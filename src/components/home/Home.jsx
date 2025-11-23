import { Link } from 'react-router';
import ArticleCard from '../article/ArticleCard.jsx';

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50">

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[#15151e] to-[#1e1e28] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="max-w-3xl">
                        <span className="inline-block bg-[#e10600] px-4 py-1.5 rounded-lg text-sm font-semibold mb-4 uppercase tracking-wide">
                            Featured Article
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Verstappen Dominates Abu Dhabi Grand Prix
                        </h2>
                        <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                            Red Bull driver secures another victory in spectacular fashion at Yas Marina Circuit
                        </p>
                        <div className="flex items-center gap-6 text-gray-400 mb-8 text-sm">
                            <span>By Max Smith</span>
                            <span>•</span>
                            <span>November 22, 2025</span>
                            <span>•</span>
                            <span>Race Reports</span>
                        </div>
                        <Link
                            to="/articles/123"
                            className="inline-block bg-[#e10600] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#c10500] transition-all hover:shadow-lg hover:shadow-[#e10600]/30 text-lg"
                        >
                            Read Article
                        </Link>
                    </div>
                </div>
            </section>

            {/* Categories Filter */}
            <section className="border-b border-gray-200 bg-white sticky top-16 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex gap-3 overflow-x-auto">
                        <button className="px-5 py-2 rounded-full bg-[#e10600] text-white font-semibold whitespace-nowrap">
                            All
                        </button>
                        <button className="px-5 py-2 rounded-full border-2 border-gray-300 bg-white text-gray-700 font-semibold hover:border-[#e10600] hover:text-[#e10600] transition-all whitespace-nowrap">
                            Race Reports
                        </button>
                        <button className="px-5 py-2 rounded-full border-2 border-gray-300 bg-white text-gray-700 font-semibold hover:border-[#e10600] hover:text-[#e10600] transition-all whitespace-nowrap">
                            Technical
                        </button>
                        <button className="px-5 py-2 rounded-full border-2 border-gray-300 bg-white text-gray-700 font-semibold hover:border-[#e10600] hover:text-[#e10600] transition-all whitespace-nowrap">
                            Driver News
                        </button>
                        <button className="px-5 py-2 rounded-full border-2 border-gray-300 bg-white text-gray-700 font-semibold hover:border-[#e10600] hover:text-[#e10600] transition-all whitespace-nowrap">
                            Team News
                        </button>
                    </div>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h2 className="text-3xl font-bold mb-8">Latest Articles</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-3 mt-12">
                    <button
                        className="px-5 py-2 rounded-lg border-2 border-gray-300 bg-white text-gray-700 font-semibold hover:border-[#e10600] hover:text-[#e10600] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled
                    >
                        Previous
                    </button>
                    <button className="px-5 py-2 rounded-lg bg-[#e10600] text-white font-semibold">
                        1
                    </button>
                    <button className="px-5 py-2 rounded-lg border-2 border-gray-300 bg-white text-gray-700 font-semibold hover:border-[#e10600] hover:text-[#e10600] transition-all">
                        2
                    </button>
                    <button className="px-5 py-2 rounded-lg border-2 border-gray-300 bg-white text-gray-700 font-semibold hover:border-[#e10600] hover:text-[#e10600] transition-all">
                        3
                    </button>
                    <button className="px-5 py-2 rounded-lg border-2 border-gray-300 bg-white text-gray-700 font-semibold hover:border-[#e10600] hover:text-[#e10600] transition-all">
                        Next
                    </button>
                </div>
            </section>
        </div>
    );
}