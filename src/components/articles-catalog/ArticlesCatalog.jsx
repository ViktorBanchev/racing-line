import { useNavigate } from "react-router";
import useRequest from "../../hooks/useRequest.js";
import { FileText, Filter, Loader2 } from "lucide-react";
import ArticleListItem from "./ArticleListItem.jsx";

import { useLocation } from "react-router";

export default function ArticleCatalog() {
    const navigate = useNavigate();
    const location = useLocation();

    const transformCategory = (cat) => {
        return cat.toLowerCase().replace(/\s+/g, '-');
    };

    const queryParams = new URLSearchParams(location.search);
    const currentCategory = queryParams.get('category') || 'all-news';

    let filterQuery = '';
    if (currentCategory && currentCategory !== 'all-news') {
        const encodedCategory = encodeURIComponent(`category="${transformCategory(currentCategory)}"`);
        filterQuery = `&where=${encodedCategory}`;
    }

    const { data: articles, isLoading } = useRequest(`/data/articles?${filterQuery}`, [], {noAuth: true});

    const navigateToNewQuery = (key, value) => {
        const newSearchParams = new URLSearchParams(location.search);

        if (value === 'all-news' || value === 'newest') {
            newSearchParams.delete(key);
        } else {
            newSearchParams.set(key, value);

        }
        
        navigate(`/articles?${newSearchParams.toString()}`);
    };

    const categories = ['All News', 'Race Report', 'Technical', 'Analysis', 'Driver News', 'Opinion'];

    return (
        <div className="min-h-screen bg-[#f3f4f6] pb-20">

            <div className="bg-[#15151e] pt-24 pb-6 border-b-4 border-[#e10600]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-end">
                    <div>
                        <h1 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-1">
                            The <span className="text-[#e10600]">Racing Grid</span>
                        </h1>
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                            Browse all published telemetry and analysis
                        </p>
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 p-4 bg-white rounded-sm shadow-sm border border-gray-100">

                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <Filter size={16} className="text-[#e10600]" />
                        <span className="text-xs font-bold uppercase text-gray-500">Filter By:</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {categories.map(cat => {
                            const catValue = transformCategory(cat);
                            
                            return (
                                <button
                                    key={cat}
                                    onClick={() => navigateToNewQuery('category', catValue)}
                                    className={`
                                    px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full transition-all
                                    ${currentCategory === catValue ? 'bg-[#e10600] text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
                                `}
                                >
                                    {cat}
                                </button>
                            )
                        })}
                    </div>
                </div>

                {isLoading ? (
                    <div className="text-center py-20 text-gray-500 font-semibold uppercase tracking-widest flex items-center justify-center gap-3">
                        <Loader2 size={24} className="animate-spin text-[#e10600]" />
                        Loading Telemetry...
                    </div>
                ) : articles.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-lg shadow-sm border border-gray-100">
                        <FileText size={48} className="mx-auto mb-4 text-gray-300" />
                        <p className="text-gray-600 font-medium">No articles match the current filter.</p>
                    </div>
                ) : (
                    <div className="flex flex-col gap-6">
                        {articles.map(article => (
                            <ArticleListItem
                                key={article._id}
                                {...article}
                            />
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}