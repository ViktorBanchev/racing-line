import { useEffect, useRef, useState } from "react";
import useForm from "../../hooks/useForm.js";
import useRequest from "../../hooks/useRequest.js";

export default function CommentSection({ articleId }) {
    // const [comments, setComments] = useState([]);
    
    //!! FIX ISSUE --> Name doesn't appear after creating comments. Appears only after page refresh!!!!!

    const formRef = useRef();
    const urlParams = new URLSearchParams({
        where: `_articleId="${articleId}"`,
        load: `author=_ownerId:users`
    })
    const { request, data: comments, setData: setComments } = useRequest(`/data/comments?${urlParams}`, []);


    const submitCommentHandler = async (values) => {
        const { comment } = values;
        const newComment = {
            comment,
            _articleId: articleId,
        }
        try {
            const result = await request('/data/comments', "POST", newComment);
            setComments(state => [...state, result]);
            resetForm();
        } catch (err) {
            alert(err.message);
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
        <div className="mt-16">
            <h3 className="text-xl font-black uppercase italic tracking-tight mb-6 flex items-center gap-2">
                Discussion <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full not-italic font-bold">12</span>
            </h3>

            {/* Input */}
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

            {/* Comment List */}
            <div className="space-y-6">
                {comments.map(com => (<div className="flex gap-4" key={com._id}>
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" alt="User" className="w-10 h-10 rounded-full bg-gray-100" />
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="font-bold text-sm text-[#15151e]">{com.author?.username}</span>
                            <span className="text-xs text-gray-400">2 hours ago</span>
                        </div>
                        <p className="text-sm text-gray-700">{com.comment}</p>
                        <div className="flex gap-4 mt-2">
                            <button className="text-xs font-bold text-gray-400 hover:text-[#e10600]">Reply</button>
                            <button className="text-xs font-bold text-gray-400 hover:text-[#e10600]">Like (5)</button>
                        </div>
                    </div>
                </div>))}

            </div>
        </div>
    );
}