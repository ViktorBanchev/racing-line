import { Link, useNavigate } from 'react-router';
import { useState } from 'react';
import useForm from '../../hooks/useForm.js';
import useRequest from '../../hooks/useRequest.js';
import { Image as ImageIcon, FileText, Tag, Type } from 'lucide-react';

export default function CreateArticle() {
    const [imagePreview, setImagePreview] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    const { request } = useRequest();

    const submitAction = async (values) => {
        const newArticle = {
            ...values,
            likes: 0,
            views: 0,
            comments: 0,
        };
        try {
            await request('/data/articles', 'POST', newArticle);
            navigate("/");
        } catch (error) {
            alert(error.message)
        }
    }

    const {
        register,
        formAction
    } = useForm(submitAction, {
        title: '',
        category: '',
        image: '',
        content: '',
    })

    return (
        <div className="min-h-screen bg-[#f8f9fa] py-12 lg:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-black text-[#15151e] uppercase italic tracking-tighter">
                        Create <span className="text-[#e10600]">Article</span>
                    </h1>
                    <div className="h-1 w-24 bg-[#e10600] mt-2 skew-x-[-12deg]"></div>
                </div>

                <div className="bg-white p-8 md:p-10 shadow-lg border-t-4 border-[#e10600] relative overflow-hidden">
                    {/* Background accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -mr-16 -mt-16 z-0"></div>

                    <form className="relative z-10 space-y-8" action={formAction}>

                        {/* Title Section */}
                        <div className="space-y-2">
                            <label htmlFor="title" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500">
                                <Type size={14} className="text-[#e10600]" /> Headline
                            </label>
                            <input
                                type="text"
                                id="title"
                                className="w-full px-4 py-3 bg-gray-50 border-l-4 border-transparent focus:border-[#e10600] focus:bg-white focus:ring-0 outline-none transition-all text-lg font-bold placeholder-gray-300"
                                placeholder="ENTER ARTICLE HEADLINE..."
                                {...register('title')}
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Category */}
                            <div className="space-y-2">
                                <label htmlFor="category" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500">
                                    <Tag size={14} className="text-[#e10600]" /> Category
                                </label>
                                <div className="relative">
                                    <select
                                        id="category"
                                        className="w-full px-4 py-3 bg-gray-50 border-l-4 border-transparent focus:border-[#e10600] focus:bg-white focus:ring-0 outline-none transition-all appearance-none font-medium text-gray-700 cursor-pointer"
                                        {...register('category')}
                                    >
                                        <option value="">Select Sector...</option>
                                        <option value="race-reports">Race Reports</option>
                                        <option value="technical">Technical Analysis</option>
                                        <option value="driver-news">Driver Market</option>
                                        <option value="team-news">Team Updates</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-gray-400"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Image URL */}
                            <div className="space-y-2">
                                <label htmlFor="image" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500">
                                    <ImageIcon size={14} className="text-[#e10600]" /> Cover Image
                                </label>
                                <input
                                    type="url"
                                    id="image"
                                    className="w-full px-4 py-3 bg-gray-50 border-l-4 border-transparent focus:border-[#e10600] focus:bg-white focus:ring-0 outline-none transition-all font-medium text-sm text-gray-700 placeholder-gray-300"
                                    placeholder="https://..."
                                    {...register('image')}
                                    onChange={(e) => setImagePreview(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Image Preview Area */}
                        {imagePreview && (
                            <div className="w-full h-48 bg-gray-100 overflow-hidden relative group">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                                <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 text-[10px] font-bold uppercase">Preview</div>
                            </div>
                        )}

                        {/* Content */}
                        <div className="space-y-2">
                            <label htmlFor="content" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-500">
                                <FileText size={14} className="text-[#e10600]" /> Article Body
                            </label>
                            <textarea
                                id="content"
                                rows="15"
                                {...register('content')}
                                onChange={(e) => setContent(e.target.value)}
                                className="w-full p-4 bg-gray-50 border border-gray-100 focus:border-[#e10600] focus:ring-0 outline-none transition-all resize-none font-mono text-sm leading-relaxed"
                                placeholder="Start typing your analysis..."
                            />
                            <div className="flex justify-between text-[10px] uppercase font-bold text-gray-400">
                                <span>Markdown Supported</span>
                                <span>{content.length} Chars</span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center justify-end gap-4 pt-6 border-t border-gray-100">
                            <Link
                                to="/articles"
                                className="px-6 py-3 text-gray-500 font-bold uppercase text-xs tracking-wider hover:text-[#15151e] transition-colors"
                            >
                                Cancel
                            </Link>
                            <button
                                type="submit"
                                className="bg-[#e10600] text-white px-8 py-3 font-black uppercase italic tracking-wider transform -skew-x-12 hover:skew-x-0 hover:bg-[#c10500] transition-all shadow-lg hover:shadow-red-500/30"
                            >
                                <span className="skew-x-12 inline-block">Publish Story</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}