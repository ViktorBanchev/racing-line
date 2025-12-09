import { Link, useNavigate, useParams } from 'react-router';
import useRequest from '../../hooks/useRequest.js';
import {
    Heart,
    Edit3,
    Trash2,
    TrendingUp,
} from 'lucide-react';
import { useContext, useEffect } from 'react';
import UserContext from '../../contexts/userContext.jsx';
import CommentSection from './CommentSection.jsx';
import DOMPurify from 'dompurify';
import useArticleLikes from '../../hooks/useArticleLikes.js';
import Socials from './social/Socials.jsx';

export default function ArticleDetails() {
    const { articleId } = useParams();
    const navigate = useNavigate();
    const { user, isAuthenticated } = useContext(UserContext);

    const urlParams = new URLSearchParams({
        load: `author=_ownerId:users`
    })

    const {
        data: article,
        request,
        setData: setArticle
    } = useRequest(`/data/articles/${articleId}?${urlParams}`, { likedBy: [], author: {} })

    const validArticleId = typeof article._id === "string" ? article._id : null;

    if (!article || !article.title) return <div
        className="min-h-screen bg-[#f8f9fa] pt-32 text-center font-bold text-gray-500 uppercase tracking-widest">Loading
        Paddock Data...</div>;

    const deleteHandler = async () => {
        await request(`/data/articles/${articleId}`, 'DELETE', null);
        navigate('/')
    }

    return (
        <div className="min-h-screen bg-white text-[#15151e]">
            {/* Main Content Wrapper */}
            <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
                {/* --- HEADER SECTION (News Style) --- */}
                <header className="max-w-4xl mx-auto mb-10">

                    {/* Category & Breadcrumb */}
                    <div className="flex items-center gap-2 mb-4">
                        <span
                            className="bg-[#e10600] text-white text-[10px] font-bold uppercase px-2 py-0.5 tracking-wider rounded-sm">
                            {article.category}
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.95] mb-6 text-[#15151e]">
                        {article.title}
                    </h1>

                    {/* Subtitle / Excerpt */}
                    <p className="text-xl md:text-2xl text-gray-600 leading-tight font-medium mb-6">
                        {article.subtitle}
                    </p>

                    {/* Subtle Author & Meta Row */}
                    <div
                        className="flex flex-wrap items-center justify-between border-t border-b border-gray-100 py-4 gap-4">

                        {/* Author Info (Subtle) */}
                        <div className="flex items-center gap-3">
                            <img
                                src={article.author.image}
                                alt={article.author.username}
                                className="w-10 h-10 rounded-full bg-gray-100 object-cover"
                            />
                            <div className="flex flex-col justify-center">
                                <span
                                    className="text-sm font-bold text-[#15151e] leading-none mb-1 hover:text-[#e10600] cursor-pointer">
                                    {article.author.username}
                                </span>
                                <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                                    {article.date} • 18:42 GMT
                                </span>
                            </div>
                        </div>

                        {/* Social / Actions */}
                        <Socials articleId={article._id} />
                    </div>
                </header>

                {/* --- MAIN IMAGE SECTION (Restricted Width) --- */}
                <div className="max-w-5xl mx-auto mb-12">
                    <div
                        className="relative aspect-[16/9] w-full overflow-hidden rounded-sm shadow-sm bg-gray-100 group">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover"
                        />
                        {/* Photo Credit */}
                        <div
                            className="absolute bottom-0 right-0 bg-black/50 text-white text-[10px] px-2 py-1 uppercase tracking-wider backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                            Photo by: Getty Images / Red Bull Content Pool
                        </div>
                    </div>
                </div>

                {/* --- CONTENT GRID --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">

                    {/* Article Body (8 cols) */}
                    <div className="lg:col-span-8">
                        {/* Admin Controls (Only visible to owner) */}
                        {user?._id === article._ownerId
                            ? (
                                <div className="flex gap-2 mb-6">
                                    <Link to={`/articles/${articleId}/edit`}
                                        className="flex items-center gap-1 px-3 py-1 bg-gray-100 hover:bg-gray-200 text-xs font-bold uppercase text-gray-600 rounded-sm transition-colors">
                                        <Edit3 size={14} /> Edit
                                    </Link>
                                    <button onClick={deleteHandler}
                                        className="flex items-center gap-1 px-3 py-1 bg-gray-100 hover:bg-red-50 hover:text-red-600 text-xs font-bold uppercase text-gray-600 rounded-sm transition-colors">
                                        <Trash2 size={14} /> Delete
                                    </button>
                                </div>
                            ) : ''
                        }


                        <article className="prose prose-lg max-w-none text-[#15151e] 
                            prose-headings:font-black prose-headings:italic prose-headings:uppercase prose-headings:tracking-tighter 
                            prose-a:text-[#e10600] prose-a:font-bold prose-a:no-underline hover:prose-a:underline 
                            prose-img:rounded-sm prose-blockquote:border-l-[#e10600] prose-blockquote:bg-gray-50 prose-blockquote:py-2 prose-blockquote:px-4">

                            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.content) }} />
                        </article>

                        {/* Article Footer / Tags */}
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <h4 className="text-xs font-bold uppercase text-gray-400 mb-4 tracking-wider">Related
                                Topics</h4>
                            <div className="flex flex-wrap gap-2">
                                {['Red Bull Racing', 'Max Verstappen', 'Qualifying', 'Monza'].map(tag => (
                                    <span key={tag}
                                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold uppercase hover:bg-[#15151e] hover:text-white transition-colors cursor-pointer rounded-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Comments Section (Simplified) */}
                        <CommentSection articleId={articleId} />
                    </div>

                    {/* Right Column: Sidebar (Standard) */}
                    <div className="lg:col-span-4 space-y-8">

                        {/* Trending Articles */}
                        <div className="bg-white border border-gray-200 p-0 rounded-sm">
                            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                                <h4 className="text-sm font-black uppercase italic tracking-tighter text-[#15151e] flex items-center gap-2">
                                    <TrendingUp size={16} className="text-[#e10600]" /> Most Read
                                </h4>
                            </div>
                            <div className="divide-y divide-gray-100">
                                {[
                                    "Horner: 'No regrets' over Perez decision",
                                    "Mercedes brings new floor to Silverstone",
                                    "Analysis: Why McLaren's pace is real",
                                    "Official: 2026 Calendar Revealed"
                                ].map((title, i) => (
                                    <Link key={i} to="#" className="block p-4 hover:bg-gray-50 group transition-colors">
                                        <div className="flex gap-3">
                                            <span
                                                className="text-xl font-black text-gray-200 group-hover:text-[#e10600] italic leading-none">{i + 1}</span>
                                            <h5 className="text-sm font-bold text-gray-700 group-hover:text-[#15151e] leading-tight">{title}</h5>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Simple Ad Placeholder (Simulating standard layout) */}
                        <div
                            className="bg-gray-100 h-64 flex items-center justify-center text-gray-400 text-xs font-mono uppercase tracking-widest border border-dashed border-gray-300">
                            Advertisement Space
                        </div>

                    </div>

                </div>

            </main>
        </div>
    );
}