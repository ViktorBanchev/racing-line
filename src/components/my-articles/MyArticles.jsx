import { useContext } from 'react';
import { Link } from 'react-router';
import UserContext from '../../contexts/userContext.jsx';
import useRequest from '../../hooks/useRequest.js';
import ArticleCard from './ArticleCard.jsx';

export default function MyArticles() {
    const {user} = useContext(UserContext)

    const urlParams = new URLSearchParams({
        where: `_ownerId="${user?._id}"`
    })

     const { data: articles } = useRequest(`/data/articles?${urlParams.toString()}`, []);
     console.log(articles);

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
                        {articles.map(article => <ArticleCard key={article._id} {...article} />)}
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