import { useNavigate } from "react-router";
import useRequest from "../../hooks/useRequest.js";
import { useState } from "react";
import { ChevronLeft, ChevronRight, FileText, Filter, Loader2 } from "lucide-react";
import ArticleCard from "../article/ArticleCard.jsx";
import ArticleListItem from "./ArticleListItem.jsx";

import { useLocation } from "react-router";

const ARTICLE_PER_PAGE = 3;

export default function ArticleCatalog() {
    const navigate = useNavigate();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const currentPage = parseInt(queryParams.get('page')) || 1;

    const offset = (currentPage - 1) * ARTICLE_PER_PAGE;

    const paginationQuery = `offset=${offset}&pageSize=${ARTICLE_PER_PAGE}`;

    const { data: countData } = useRequest('/data/articles?count=true', 0);
    // В реално приложение, URL-ът ще бъде `/data/articles`
    const { data: articles, isLoading } = useRequest(`/data/articles?${paginationQuery}`, []);
    const [filter, setFilter] = useState('All');
    const [sort, setSort] = useState('Newest');

    const totalPages = Math.ceil(countData / ARTICLE_PER_PAGE);
    console.log(totalPages);


    const categories = ['All News', 'Race Report', 'Technical', 'Analysis', 'Driver News', 'Opinion'];

    // 🌟 Логика за филтриране и сортиране 🌟
    const filteredArticles = articles
        .filter(article => filter === 'All' || article.category === filter)
        .sort((a, b) => {
            // Mock Date for sorting (in real app, use article._createdOn or a real date field)
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);

            if (sort === 'Newest') return dateB - dateA;
            if (sort === 'Oldest') return dateA - dateB;

            return 0;
        });

    const transformCategory = (cat) => {
        console.log(cat.toLowerCase().replace(/\s+/g, '-'));
        return cat.toLowerCase().replace(/\s+/g, '-');
    };

    return (
        <div className="min-h-screen bg-[#f3f4f6] pb-20">

            {/* --- HEADER --- */}
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

                {/* Filter and Sort Controls */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 p-4 bg-white rounded-sm shadow-sm border border-gray-100">

                    <div className="flex items-center gap-2 mb-4 md:mb-0">
                        <Filter size={16} className="text-[#e10600]" />
                        <span className="text-xs font-bold uppercase text-gray-500">Filter By:</span>
                    </div>

                    {/* Category Filter Buttons */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(transformCategory(cat))}
                                className={`
                                    px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-full transition-all
                                    ${filter === cat ? 'bg-[#e10600] text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
                                `}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Sort Dropdown */}
                    <div className="flex items-center gap-2 mt-4 md:mt-0">
                        <span className="text-xs font-bold uppercase text-gray-500">Sort:</span>
                        <select
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            className="bg-gray-100 text-xs font-bold uppercase text-gray-700 border-none rounded-sm px-2 py-1 focus:ring-0 focus:border-[#e10600]"
                        >
                            <option value="Newest">Newest</option>
                            <option value="Oldest">Oldest</option>
                            {/* <option value="MostViews">Most Views</option> */}
                        </select>
                    </div>
                </div>

                {/* Article Grid */}
                {isLoading ? (
                    <div className="text-center py-20 text-gray-500 font-semibold uppercase tracking-widest flex items-center justify-center gap-3">
                        <Loader2 size={24} className="animate-spin text-[#e10600]" />
                        Loading Telemetry...
                    </div>
                ) : filteredArticles.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-lg shadow-sm border border-gray-100">
                        <FileText size={48} className="mx-auto mb-4 text-gray-300" />
                        <p className="text-gray-600 font-medium">No articles match the current filter.</p>
                    </div>
                ) : (
                    <div className="flex flex-col gap-6">
                        {filteredArticles.map(article => (
                            // Използваме Mock компонента тук
                            <ArticleListItem
                                key={article._id}
                                {...article}
                            />
                        ))}
                    </div>
                )}

                <div className="flex justify-center items-center gap-2 pt-8 mt-12 border-t border-gray-200">

                    {/* Previous Button */}
                    <button
                        onClick={() => {
                            const targetPath = currentPage - 1 === 1
                                ? '/articles'
                                : `/articles?page=${currentPage - 1}`;
                            navigate(targetPath);
                        }}
                        disabled={currentPage === 1}
                        className="p-2 border border-gray-300 rounded-md bg-white text-[#15151e] hover:bg-gray-100 disabled:opacity-50 transition-colors"
                    >
                        <ChevronLeft size={18} />
                    </button>

                    {/* Page Numbers */}
                    <div className="flex gap-1">
                        {[...Array(totalPages)].map((_, index) => {
                            const pageNumber = index + 1;

                            const targetPath = pageNumber === 1
                                ? '/articles'
                                : `/articles?page=${pageNumber}`;

                            return (
                                <button
                                    key={pageNumber}
                                    onClick={() => navigate(targetPath)}
                                    className={`px-4 py-2 rounded-md font-bold text-sm transition-colors ${pageNumber === currentPage
                                        ? 'bg-[#e10600] text-white shadow-md'
                                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                                        }`}
                                >
                                    {pageNumber}
                                </button>
                            )
                        })}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={() => navigate(`/articles/?page=${currentPage + 1}`)}
                        disabled={currentPage === totalPages}
                        className="p-2 border border-gray-300 rounded-md bg-white text-[#15151e] hover:bg-gray-100 disabled:opacity-50 transition-colors"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
            </main>
        </div>
    );
}