import { startTransition, useContext, useMemo, useOptimistic, useRef, useState } from "react";
import useForm from "../../hooks/useForm.js";
import useRequest from "../../hooks/useRequest.js";
import UserContext from "../../contexts/userContext.jsx";
import { v4 as uuid } from 'uuid'
import { toast } from "react-toastify";

export default function CommentSection({ articleId }) {
    const { user, isAuthenticated } = useContext(UserContext);
    const [visibleCount, setVisibleCount] = useState(5);

    const formRef = useRef();
    const { request, data: comments, setData: setComments } = useRequest(`/comments/${articleId}`, [], { noAuth: true });

    const [optimisticComments, dispatchOptimisticComments] = useOptimistic(comments, (state, action) => {
        switch (action.type) {
            case 'ADD_COMMENT':
                return [action.payload, ...state];
            default:
                return state;
        }
    })

    const submitCommentHandler = async (values) => {
        const { comment } = values;

        if (!comment) {
            return toast.error('Comment cannot be empty');
        }

        if (!isAuthenticated) {
            return toast.info('You must be logged in to post a comment');
        }

        const commentPayload = {
            content: comment
        };

        const optimisticComment = {
            _id: uuid(),
            content: comment,
            createdAt: new Date().toISOString(),
            author: {
                _id: user._id,
                username: user.username,
                image: user.image
            },
            optimistic: true
        };

        dispatchOptimisticComments({ type: 'ADD_COMMENT', payload: { ...optimisticComment, optimistic: true } });
        resetForm();
        try {
            const result = await request(`/comments/${articleId}`, "POST", commentPayload);

            startTransition(() => {
                setComments(state => [result.data, ...state])
            });
            resetForm();
        } catch {
            toast.error('Failed to post comment. Please try again later.');
        }
    }

    const {
        register,
        formAction,
        resetForm
    } = useForm(submitCommentHandler, {
        content: '',
    })

    const renderedComments = useMemo(() => {
        if (!optimisticComments || optimisticComments.length === 0) return null;

        return optimisticComments.slice(0, visibleCount).map(com => {
            const timeSinceRaw = Date.now() - new Date(com.createdAt);
            const timeSinceMinutes = Math.floor(timeSinceRaw / 60000);
            const timeSinceHours = Math.floor(timeSinceMinutes / 60);
            const timeSinceDays = Math.floor(timeSinceHours / 24);

            let timeSince = 'Just now';
            if (timeSinceDays > 0) {
                timeSince = `${timeSinceDays} day${timeSinceDays > 1 ? 's' : ''} ago`;
            } else if (timeSinceHours > 0) {
                timeSince = `${timeSinceHours} hour${timeSinceHours > 1 ? 's' : ''} ago`;
            } else if (timeSinceMinutes > 0) {
                timeSince = `${timeSinceMinutes} minute${timeSinceMinutes > 1 ? 's' : ''} ago`;
            }

            return (
                <div className={`flex gap-4 transition-all duration-300 ${com.optimistic ? 'opacity-50' : 'opacity-100'}`} key={com._id}>
                    <img src={com.author?.image || "https://via.placeholder.com/40"} alt="User" className="w-10 h-10 rounded-full bg-gray-100 object-cover" />
                    <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-sm text-[#15151e]">{com.author?.username}</span>
                            <span className="text-xs text-gray-400">{timeSince}</span>
                        </div>
                        <p className="text-sm text-gray-700">{com.content}</p>
                    </div>
                    {com.optimistic && <span className="text-[10px] text-gray-400 uppercase font-bold animate-pulse">Sending...</span>}
                </div>
            )
        });
    }, [optimisticComments, visibleCount]);

    return (
        <div className="mt-2">
            <h3 className="text-xl font-black uppercase italic tracking-tight mb-6 flex items-center gap-2">
                Discussion <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full not-italic font-bold">{comments.length}</span>
            </h3>

            <form action={formAction} ref={formRef} className="flex gap-4 mb-10">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
                <div className="flex-grow relative">
                    <textarea
                        rows="3"
                        placeholder="Join the debate..."
                        {...register('comment')}
                        className="w-full bg-gray-50 border border-gray-200 p-3 focus:border-[#e10600] focus:ring-0 outline-none transition-all resize-none text-sm rounded-sm"
                    ></textarea>
                    <button type="submit" className="absolute bottom-3 right-3 bg-[#15151e] text-white px-4 py-1 text-[10px] font-bold uppercase tracking-wider hover:bg-[#e10600] transition-colors rounded-sm">
                        Post
                    </button>
                </div>
            </form>

            <div className="space-y-10">
                {renderedComments}
            </div>

            {optimisticComments?.length > visibleCount && (
                <div className="mt-8 flex justify-center">
                    <button
                        onClick={() => setVisibleCount(prev => prev + 5)}
                        className="px-6 py-2 bg-white border border-gray-200 text-gray-500 font-bold uppercase text-[10px] tracking-wider rounded-sm hover:text-[#e10600] hover:border-[#e10600] transition-colors"
                    >
                        Load More Comments ({optimisticComments.length - visibleCount} hidden)
                    </button>
                </div>
            )}
        </div>
    );
}