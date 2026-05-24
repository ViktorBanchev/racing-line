import { startTransition, useContext, useOptimistic, useRef } from "react";
import useForm from "../../hooks/useForm.js";
import useRequest from "../../hooks/useRequest.js";
import UserContext from "../../contexts/userContext.jsx";
import { v4 as uuid } from 'uuid'
import { toast } from "react-toastify";

export default function CommentSection({ articleId }) {
    const { user, isAuthenticated } = useContext(UserContext);

    const formRef = useRef();
    const urlParams = new URLSearchParams({
        where: `_articleId="${articleId}"`,
        load: `author=_ownerId:users`
    })
    const { request, data: comments, setData: setComments } = useRequest(`/data/comments?${urlParams}`, [], { noAuth: true });

    const [optimisticComments, dispatchOptimisticComments] = useOptimistic(comments, (state, action) => {
        switch (action.type) {
            case 'ADD_COMMENT':
                return [...state, action.payload];
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

        const newComment = {
            _id: uuid(),
            comment,
            _articleId: articleId,
            author: user
        }

        dispatchOptimisticComments({ type: 'ADD_COMMENT', payload: { ...newComment, optimistic: true } })
        try {
            const result = await request('/data/comments', "POST", newComment);
            startTransition(() => {
                setComments(state => [...state, result])
            });
            resetForm();
        } catch (err) {
            console.log(err);
            toast.error('Failed to post comment. Please try again later.');
        }
    }

    const {
        register,
        formAction,
        resetForm
    } = useForm(submitCommentHandler, {
        comment: '',
    })



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
                {optimisticComments.map(com => {
                    const timeSinceRaw = Date.now() - new Date(com._createdOn);
                    
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
                    <div className="flex gap-4" key={com._id}>
                        <img src={com.author.image} alt="User" className="w-10 h-10 rounded-full bg-gray-100" />
                        <div>
                            <div className="flex items-center gap-2 mb-1">
                                <span className="font-bold text-sm text-[#15151e]">{com.author?.username}</span>
                                <span className="text-xs text-gray-400">{timeSince}</span>
                            </div>
                            <p className="text-sm text-gray-700">{com.comment}</p>
                        </div>

                        {com.optimistic && 'Sending'}
                    </div>)})}

            </div>
        </div>
    );
}