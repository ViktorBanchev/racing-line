import { Link } from 'react-router';

export default function MyArticles() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-4xl font-bold mb-2">My Articles</h1>
                        <p className="text-gray-600">Manage your published articles</p>
                    </div>
                    <Link
                        to="/articles/create"
                        className="bg-[#e10600] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#c10500] transition-all hover:shadow-lg hover:shadow-[#e10600]/30"
                    >
                        + Write New Article
                    </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-xl p-6 shadow-md">
                        <div className="text-3xl font-bold text-[#e10600] mb-2">12</div>
                        <div className="text-gray-600 font-medium">Total Articles</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md">
                        <div className="text-3xl font-bold text-[#e10600] mb-2">1,234</div>
                        <div className="text-gray-600 font-medium">Total Views</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md">
                        <div className="text-3xl font-bold text-[#e10600] mb-2">156</div>
                        <div className="text-gray-600 font-medium">Total Likes</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md">
                        <div className="text-3xl font-bold text-[#e10600] mb-2">48</div>
                        <div className="text-gray-600 font-medium">Total Comments</div>
                    </div>
                </div>

                {/* Articles List */}
                <div className="bg-white rounded-xl shadow-md overflow-hidden">

                    {/* Table Header */}
                    <div className="hidden md:grid md:grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200 font-semibold text-gray-700 text-sm">
                        <div className="col-span-5">Article</div>
                        <div className="col-span-2">Category</div>
                        <div className="col-span-1 text-center">Views</div>
                        <div className="col-span-1 text-center">Likes</div>
                        <div className="col-span-1 text-center">Comments</div>
                        <div className="col-span-2 text-right">Actions</div>
                    </div>

                    {/* Article Rows */}
                    <div className="divide-y divide-gray-200">

                        {/* Article 1 */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-5 hover:bg-gray-50 transition-colors">
                            <div className="md:col-span-5">
                                <Link to="/articles/1" className="flex gap-4">
                                    <img
                                        src="https://via.placeholder.com/100x60"
                                        alt="Article"
                                        className="w-24 h-16 object-cover rounded-lg flex-shrink-0"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 hover:text-[#e10600] line-clamp-2 mb-1">
                                            Verstappen Dominates Abu Dhabi Grand Prix
                                        </h3>
                                        <p className="text-sm text-gray-500">Published on Nov 22, 2025</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="md:col-span-2 flex items-center">
                                <span className="inline-block bg-[#e10600] text-white px-3 py-1 rounded text-xs font-semibold uppercase">
                                    Race Reports
                                </span>
                            </div>
                            <div className="md:col-span-1 flex items-center justify-center">
                                <span className="text-gray-700 font-medium">156</span>
                            </div>
                            <div className="md:col-span-1 flex items-center justify-center">
                                <span className="text-gray-700 font-medium">24</span>
                            </div>
                            <div className="md:col-span-1 flex items-center justify-center">
                                <span className="text-gray-700 font-medium">8</span>
                            </div>
                            <div className="md:col-span-2 flex items-center justify-end gap-2">
                                <Link
                                    to="/articles/edit/1"
                                    className="px-4 py-2 bg-gray-700 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-all"
                                >
                                    Edit
                                </Link>
                                <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700 transition-all">
                                    Delete
                                </button>
                            </div>
                        </div>

                        {/* Article 2 */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-5 hover:bg-gray-50 transition-colors">
                            <div className="md:col-span-5">
                                <Link to="/articles/2" className="flex gap-4">
                                    <img
                                        src="https://via.placeholder.com/100x60"
                                        alt="Article"
                                        className="w-24 h-16 object-cover rounded-lg flex-shrink-0"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 hover:text-[#e10600] line-clamp-2 mb-1">
                                            Ferrari's Strategy Masterclass in Singapore
                                        </h3>
                                        <p className="text-sm text-gray-500">Published on Nov 20, 2025</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="md:col-span-2 flex items-center">
                                <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded text-xs font-semibold uppercase">
                                    Analysis
                                </span>
                            </div>
                            <div className="md:col-span-1 flex items-center justify-center">
                                <span className="text-gray-700 font-medium">203</span>
                            </div>
                            <div className="md:col-span-1 flex items-center justify-center">
                                <span className="text-gray-700 font-medium">31</span>
                            </div>
                            <div className="md:col-span-1 flex items-center justify-center">
                                <span className="text-gray-700 font-medium">12</span>
                            </div>
                            <div className="md:col-span-2 flex items-center justify-end gap-2">
                                <Link
                                    to="/articles/edit/2"
                                    className="px-4 py-2 bg-gray-700 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-all"
                                >
                                    Edit
                                </Link>
                                <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700 transition-all">
                                    Delete
                                </button>
                            </div>
                        </div>

                        {/* Article 3 */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-5 hover:bg-gray-50 transition-colors">
                            <div className="md:col-span-5">
                                <Link to="/articles/3" className="flex gap-4">
                                    <img
                                        src="https://via.placeholder.com/100x60"
                                        alt="Article"
                                        className="w-24 h-16 object-cover rounded-lg flex-shrink-0"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-gray-900 hover:text-[#e10600] line-clamp-2 mb-1">
                                            Understanding DRS: The Overtaking Aid
                                        </h3>
                                        <p className="text-sm text-gray-500">Published on Nov 18, 2025</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="md:col-span-2 flex items-center">
                                <span className="inline-block bg-green-600 text-white px-3 py-1 rounded text-xs font-semibold uppercase">
                                    Technical
                                </span>
                            </div>
                            <div className="md:col-span-1 flex items-center justify-center">
                                <span className="text-gray-700 font-medium">189</span>
                            </div>
                            <div className="md:col-span-1 flex items-center justify-center">
                                <span className="text-gray-700 font-medium">18</span>
                            </div>
                            <div className="md:col-span-1 flex items-center justify-center">
                                <span className="text-gray-700 font-medium">6</span>
                            </div>
                            <div className="md:col-span-2 flex items-center justify-end gap-2">
                                <Link
                                    to="/articles/edit/3"
                                    className="px-4 py-2 bg-gray-700 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-all"
                                >
                                    Edit
                                </Link>
                                <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700 transition-all">
                                    Delete
                                </button>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Empty State (show when no articles) */}
                {/* <div className="bg-white rounded-xl shadow-md p-12 text-center">
          <div className="text-6xl mb-4">📝</div>
          <h2 className="text-2xl font-bold mb-3">No Articles Yet</h2>
          <p className="text-gray-600 mb-6">Start sharing your F1 insights with the community</p>
          <Link
            to="/articles/create"
            className="inline-block bg-[#e10600] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#c10500] transition-all"
          >
            Write Your First Article
          </Link>
        </div> */}

            </div>
        </div>
    );
}