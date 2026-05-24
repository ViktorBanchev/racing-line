import { Link, useNavigate, useParams } from 'react-router';
import useRequest from '../../hooks/useRequest.js';
import {
    Edit3,
    Trash2,
    TrendingUp,
} from 'lucide-react';
import { useContext } from 'react';
import UserContext from '../../contexts/userContext.jsx';
import CommentSection from './CommentSection.jsx';
import DOMPurify from 'dompurify';

export default function ArticleDetails() {
    const { articleId } = useParams();
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    const urlParams = new URLSearchParams({
        load: `author=_ownerId:users`
    })

    const {
        data: article,
        request,
    } = useRequest(`/data/articles/${articleId}?${urlParams}`, { likedBy: [], author: {} }, { noAuth: true });

    const formattedDate = new Date(article._createdOn).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
    article.date = formattedDate;

    const { data: newstFiveArticles } = useRequest('/data/articles?sortBy=_createdOn%20desc&pageSize=5', [], { noAuth: true });

    if (!article || !article.title) return <div
        className="min-h-screen bg-[#f8f9fa] pt-32 text-center font-bold text-gray-500 uppercase tracking-widest">Loading
        Paddock Data...</div>;

    const deleteHandler = async () => {
        await request(`/data/articles/${articleId}`, 'DELETE', null);
        navigate('/')
    }

    return (
        <div className="min-h-screen bg-white text-[#15151e]">
            <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
                <header className="max-w-4xl mx-auto mb-10">
                    <div className="flex items-center gap-2 mb-4">
                        <span
                            className="bg-[#e10600] text-white text-[10px] font-bold uppercase px-2 py-0.5 tracking-wider rounded-sm">
                            {article.category}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase italic tracking-tighter leading-[0.95] mb-6 text-[#15151e]">
                        {article.title}
                    </h1>

                    <div className="flex flex-wrap items-center justify-between border-t border-b border-gray-100 py-4 gap-4">
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
                                    {article.date}
                                </span>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="max-w-5xl mx-auto mb-12">
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm shadow-sm bg-gray-100 group">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
                    <div className="lg:col-span-8">
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

                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <CommentSection articleId={article._id} />
                        </div>
                    </div>

                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-white border border-gray-200 p-0 rounded-sm">
                            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                                <h4 className="text-sm font-black uppercase italic tracking-tighter text-[#15151e] flex items-center gap-2">
                                    <TrendingUp size={16} className="text-[#e10600]" /> Latest
                                </h4>
                            </div>
                            <div className="divide-y divide-gray-100">
                                {newstFiveArticles.map((a, i) => (
                                    <Link key={i} to={`/articles/${a._id}`} className="block p-4 hover:bg-gray-50 group transition-colors">
                                        <div className="flex gap-3">
                                            <span
                                                className="text-xl font-black text-gray-200 group-hover:text-[#e10600] italic leading-none">{i + 1}</span>
                                            <h5 className="text-sm font-bold text-gray-700 group-hover:text-[#15151e] leading-tight">{a.title}</h5>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

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