import { Link } from 'react-router';
import ArticleCard from '../article/ArticleCard.jsx';
import useRequest from '../../hooks/useRequest.js';
import { ChevronRight, Flag } from 'lucide-react'

export default function Home() {
    const urlParams = new URLSearchParams({
        sortBy: '_createdOn desc',
        pageSize: 3,
        load: `author=_ownerId:users`
    })

    const { data: articles, isLoading } = useRequest(`/data/articles?${urlParams}`, []);

    return (
        <div className="min-h-screen bg-[#f8f9fa]">
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
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
                            {articles.map(article => <ArticleCard key={article._id} {...article} />)}
                        </div>
                    )
                }
            </main>
        </div>
    );
}