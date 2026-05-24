import { useContext } from 'react';
import { Link } from 'react-router';
import UserContext from '../../contexts/userContext.jsx';
import useRequest from '../../hooks/useRequest.js';
import MyArticleCard from './MyArticleCard.jsx';
import { FileText } from 'lucide-react';

export default function MyArticles() {
    const { user } = useContext(UserContext)

    const urlParams = new URLSearchParams({
        where: `_ownerId="${user?._id}"`
    })

    const { data: articles,
        request,
        setData,
        isLoading
    } = useRequest(`/data/articles?${urlParams.toString()}`, []);

    const deleteHandler = async (articleId) => {
        await request(`/data/articles/${articleId}`, 'DELETE', null);
        setData(state => state.filter(todo => todo._id !== articleId));
    }

    return (
        <div className="min-h-screen bg-[#f3f4f6] pb-20">
            <div className="bg-[#15151e] pt-24 pb-6 border-b-4 border-[#e10600]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-end">
                    <div>
                        <h1 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-1">
                            My <span className="text-[#e10600]">Paddock</span>
                        </h1>
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                            Manage Your Articles
                        </p>
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                    <Link
                        to="/articles/create"
                        className="flex items-center gap-2 bg-[#15151e] text-white px-5 py-2 font-bold uppercase text-xs tracking-wider rounded-sm hover:bg-[#e10600] transition-colors"
                    >
                        <FileText size={16} /> Write New Article
                    </Link>
                </div>

                {isLoading ? (
                    <div className="text-center py-20 text-gray-500 font-semibold uppercase tracking-widest animate-pulse">
                        Loading Telemetry...
                    </div>
                ) : articles.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-lg shadow-sm border border-gray-100">
                        <FileText size={48} className="mx-auto mb-4 text-gray-300" />
                        <p className="text-gray-600 font-medium">No articles found. Time to hit the track!</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-4">
                        {articles.map(article => (
                            <MyArticleCard
                                key={article._id}
                                {...article}
                                onDelete={deleteHandler}
                            />
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}