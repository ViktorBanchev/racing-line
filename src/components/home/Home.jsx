import { Link } from 'react-router';
import ArticleCard from '../article/ArticleCard.jsx';
import useRequest from '../../hooks/useRequest.js';
import { ChevronLeft, ChevronRight, Flag, FileText } from 'lucide-react'
import { useState } from 'react';

export default function Home() {
    const urlParams = new URLSearchParams({
        load: `author=_ownerId:users`
    })

    const { data: articles, isLoading } = useRequest(`/data/articles?${urlParams}`, []);
    const [filter, setFilter] = useState('all-news');

    const filteredArticles = articles.filter(article => {
        switch (filter) {
            case 'all-news':
                return true;
            case 'race-reports':
                return article.category === 'Race Reports'
            case 'technical':
                return article.category === 'Technical'
            case 'driver-news':
                return article.category === 'Driver News'
            case 'team-news':
                return article.category === 'Team News'
            case 'interviews':
                return article.category === 'Interviews'
        }
    })

    const transformFilter = (category) => {
        return (category.toLocaleLowerCase().split(' ').join('-'))
    }

    return (
        <div className="min-h-screen bg-[#f8f9fa]">

            {/* Hero Section */}
            <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-24 bg-[#15151e] overflow-hidden">
                <div className="absolute top-0 right-0 w-2/3 h-full bg-[#1c1c26] transform skew-x-[-12deg] translate-x-24 z-0 hidden lg:block"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#e10600] opacity-5 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {articles[0] && (
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                            <div className="order-2 lg:order-1 space-y-6">
                                <div className="flex items-center gap-3">
                                    <span className="bg-[#e10600] text-white px-3 py-1 text-xs font-bold uppercase tracking-widest transform -skew-x-12 inline-block">
                                        <span className="block skew-x-12">Featured Story</span>
                                    </span>
                                    <span className="text-gray-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                                        <Flag size={14} className="text-[#e10600]" />
                                        {articles[0].category}
                                    </span>
                                </div>

                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95] tracking-tighter">
                                    {articles[0].title}
                                </h2>

                                <p className="text-lg text-gray-400 leading-relaxed max-w-xl border-l-4 border-[#e10600] pl-6">
                                    {articles[0].excerpt}
                                </p>

                                <div className="flex flex-wrap items-center gap-6 pt-2">
                                    <div className="flex items-center gap-3">
                                        <img src={articles[0].author.image} alt="Author" className="w-10 h-10 rounded-full border-2 border-[#e10600]" />
                                        <div className="flex flex-col">
                                            <span className="text-white text-sm font-bold uppercase">{articles[0].author.username}</span>
                                            <span className="text-gray-500 text-xs">{articles[0].date || '20.11.2025'}</span>
                                        </div>
                                    </div>

                                    <Link
                                        to={`/articles/${articles[0]._id}`}
                                        className="group flex items-center gap-2 bg-white text-[#15151e] px-8 py-4 font-black uppercase tracking-wider hover:bg-[#e10600] hover:text-white transition-all duration-300 transform -skew-x-12"
                                    >
                                        <span className="skew-x-12">Read Full Story</span>
                                        <ChevronRight size={18} className="skew-x-12 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>


                            <div className="order-1 lg:order-2 relative group">
                                <div className="absolute inset-0 bg-[#e10600] transform translate-x-4 translate-y-4 rounded-lg hidden lg:block transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
                                <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-[16/10] lg:aspect-auto lg:h-[500px]">
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#15151e] via-transparent to-transparent opacity-60 lg:hidden"></div>
                                    <img
                                        src={articles[0].image}
                                        alt="Featured"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Filter Bar */}
            <div className="sticky top-[72px] z-40 bg-white/80 backdrop-blur-sm border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide">
                        {['All News', 'Race Reports', 'Technical', 'Driver News', 'Team News', 'Interviews'].map((cat) => (
                            <button key={cat} onClick={() => setFilter(transformFilter(cat))} className={`flex-shrink-0 px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide ${filter === transformFilter(cat)
                                ? 'bg-[#15151e] text-white shadow-gray-200'
                                : 'text-gray-600 bg-gray-100 hover:bg-gray-200 hover:text-[#e10600]'
                                }`}>
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="flex items-end justify-between mb-10">
                    <h2 className="text-3xl font-black text-[#15151e] uppercase tracking-tighter italic">
                        Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e10600] to-red-800">Headlines</span>
                    </h2>
                    <div className="h-1 flex-grow mx-6 bg-gray-200 hidden sm:block relative overflow-hidden">
                        <div className="absolute inset-0 w-1/3 bg-[#e10600] skew-x-[-45deg]"></div>
                    </div>
                </div>
                {
                    isLoading ? (
                        <div className="text-center py-20 text-gray-500 font-semibold uppercase tracking-widest animate-pulse">
                            Loading Telemetry...
                        </div>
                    ) : filteredArticles.length === 0 ? (
                        <div className="text-center py-20 bg-white rounded-lg shadow-sm border border-gray-100">
                            <FileText size={48} className="mx-auto mb-4 text-gray-300" />
                            <p className="text-gray-600 font-medium">No {filter} articles found. Time to hit the track!</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
                            {filteredArticles.map(article => <ArticleCard key={article._id} {...article} />)}
                        </div>
                    )
                }

                <div className="mt-20 flex justify-center">
                    <div className="inline-flex items-center bg-white rounded-full shadow-lg p-1.5 border border-gray-100">
                        <button className="w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-[#15151e] hover:bg-gray-100 transition-colors disabled:opacity-50">
                            <ChevronLeft size={20} />
                        </button>
                        <div className="flex items-center px-4 gap-2">
                            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#e10600] text-white font-bold text-sm shadow-md shadow-red-500/30">1</button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 font-bold text-sm transition-colors">2</button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100 font-bold text-sm transition-colors">3</button>
                            <span className="text-gray-300">...</span>
                        </div>
                        <button className="w-10 h-10 flex items-center justify-center rounded-full text-[#15151e] hover:bg-gray-100 transition-colors">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}