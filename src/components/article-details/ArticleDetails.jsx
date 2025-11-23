
import { Link, useParams } from 'react-router';
import ArticleCard from '../article/ArticleCard.jsx';
import { useEffect, useState } from 'react';
import request from '../../utils/request.js';

export default function ArticleDetails() {
    const { articleId } = useParams();
    console.log(articleId);

    const [article, setArticle] = useState({});
    console.log(`/articles/${articleId}`);

    useEffect(() => {
        request(`/articles/${articleId}`)
            .then(result => {
                setArticle(result)
            })
            .catch(err => alert(err.message))
    }, [articleId])

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* Breadcrumb */}
                <nav className="text-sm text-gray-500 mb-8">
                    <Link to="/" className="hover:text-[#e10600]">Home</Link>
                    <span className="mx-2">/</span>
                    <Link to="/articles" className="hover:text-[#e10600]">Articles</Link>
                    <span className="mx-2">/</span>
                    <span>Current Article</span>
                </nav>

                {/* Article */}
                <article className="bg-white rounded-xl shadow-md p-8 md:p-12 mb-12">

                    {/* Header */}
                    <header className="mb-8">
                        <span className="inline-block bg-[#e10600] text-white px-4 py-1.5 rounded-lg text-sm font-semibold mb-4 uppercase">
                            {article.category}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            {article.title}
                        </h1>

                        {/* Meta */}
                        <div className="flex flex-wrap justify-between items-center gap-4 py-6 border-t border-b border-gray-200">
                            <div className="flex items-center gap-3">
                                <img
                                    src={article.authorImage}
                                    alt="Author"
                                    className="w-12 h-12 rounded-full"
                                />
                                <div>
                                    <Link to="/authors/123" className="font-semibold text-gray-900 hover:text-[#e10600]">
                                        {article.author}
                                    </Link>
                                    <p className="text-sm text-gray-500">November 22, 2025 • 5 min read</p>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-wrap gap-2">
                                <button className="px-4 py-2 border-2 border-gray-300 rounded-lg font-semibold hover:border-[#e10600] hover:text-[#e10600] transition-all">
                                    ❤️ {article.likes} Likes
                                </button>
                                <button className="px-4 py-2 border-2 border-gray-300 rounded-lg font-semibold hover:border-[#e10600] hover:text-[#e10600] transition-all">
                                    🔖 Save
                                </button>
                                <button className="px-4 py-2 border-2 border-gray-300 rounded-lg font-semibold hover:border-[#e10600] hover:text-[#e10600] transition-all">
                                    📤 Share
                                </button>

                                {/* Author Controls (show only for article owner) */}
                                <Link
                                    to="/articles/edit/123"
                                    className="px-4 py-2 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all"
                                >
                                    ✏️ Edit
                                </Link>
                                <button className="px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all">
                                    🗑️ Delete
                                </button>
                            </div>
                        </div>
                    </header>

                    {/* Featured Image */}
                    <div className="mb-8 rounded-xl overflow-hidden">
                        <img
                            src={article.image}
                            alt="Article"
                            className="w-full h-[400px] object-cover"
                        />
                    </div>

                    {/* Content */}
                    {/* <div className="prose prose-lg max-w-none">
                        <p className="text-xl text-gray-700 leading-relaxed font-medium mb-6">
                            Red Bull driver Max Verstappen secured another dominant victory at the Abu Dhabi Grand Prix, showcasing his exceptional skill under the lights of Yas Marina Circuit.
                        </p>

                        <h2 className="text-3xl font-bold mt-8 mb-4">Perfect Start</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Verstappen made a clean getaway from pole position, immediately building a gap to the chasing pack. His superior pace was evident from lap one, as he pulled away from his rivals with seemingly effortless ease.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-4">
                            The Red Bull RB21 proved to be the car to beat once again, with its exceptional straight-line speed and cornering capabilities giving Verstappen the perfect platform to dominate the race from start to finish.
                        </p>

                        <h2 className="text-3xl font-bold mt-8 mb-4">Strategic Masterclass</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            The team's strategy was flawless throughout the 58-lap race. A well-timed pit stop during a brief Virtual Safety Car period allowed Verstappen to maintain his lead without losing significant time.
                        </p>

                        <blockquote className="border-l-4 border-[#e10600] pl-6 py-4 my-6 bg-gray-50 italic text-gray-700">
                            "The car felt amazing today. The team gave me the perfect strategy, and I could manage the tyres perfectly throughout the race." - Max Verstappen
                        </blockquote>

                        <h2 className="text-3xl font-bold mt-8 mb-4">Championship Implications</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            This victory extends Verstappen's championship lead to 67 points with only three races remaining. While mathematically still possible for his rivals to catch up, the Dutchman looks set to secure his fourth consecutive world championship.
                        </p>

                        <h3 className="text-2xl font-bold mt-6 mb-3">Race Results - Top 5</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                            <li>1. Max Verstappen (Red Bull) - 1:32:15.567</li>
                            <li>2. Charles Leclerc (Ferrari) - +8.945s</li>
                            <li>3. Lewis Hamilton (Mercedes) - +12.387s</li>
                            <li>4. Lando Norris (McLaren) - +18.234s</li>
                            <li>5. Carlos Sainz (Ferrari) - +23.891s</li>
                        </ul>
                    </div> */}

                    <div className="prose prose-lg max-w-none">
                        <p className="text-xl text-gray-700 leading-relaxed font-medium mb-6">
                            {article.content}
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="flex justify-center gap-12 py-8 mt-8 border-t border-gray-200">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-[#e10600]">{article.views}</div>
                            <div className="text-gray-500 text-sm">Views</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-[#e10600]">{article.likes}</div>
                            <div className="text-gray-500 text-sm">Likes</div>
                        </div>
                        {/* <div className="text-center">
                            <div className="text-3xl font-bold text-[#e10600]">8</div>
                            <div className="text-gray-500 text-sm">Comments</div>
                        </div> */}
                    </div>
                </article>

                {/* Comments Section */}
                <section className="bg-white rounded-xl shadow-md p-8 mb-12">
                    <h2 className="text-2xl font-bold mb-6">Comments (8)</h2>

                    {/* Comment Form */}
                    <div className="mb-8 pb-8 border-b border-gray-200">
                        <h3 className="text-lg font-semibold mb-4">Leave a Comment</h3>
                        <form>
                            <textarea
                                placeholder="Share your thoughts..."
                                rows="4"
                                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-[#e10600] focus:outline-none transition-all resize-none mb-4"
                            />
                            <button
                                type="submit"
                                className="bg-[#e10600] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#c10500] transition-all"
                            >
                                Post Comment
                            </button>
                        </form>
                    </div>

                    {/* Comments List */}
                    <div className="space-y-6">

                        {/* Comment 1 */}
                        <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                            <img
                                src="https://via.placeholder.com/40"
                                alt="User"
                                className="w-10 h-10 rounded-full flex-shrink-0"
                            />
                            <div className="flex-1">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="font-semibold">John Racer</span>
                                    <span className="text-sm text-gray-500">2 hours ago</span>
                                </div>
                                <p className="text-gray-700 mb-3 leading-relaxed">
                                    Incredible drive by Max! He made it look so easy out there. Red Bull's dominance is simply unmatched this season.
                                </p>
                                <div className="flex gap-4">
                                    <button className="text-sm text-gray-500 hover:text-[#e10600]">👍 5</button>
                                    <button className="text-sm text-gray-500 hover:text-[#e10600]">Reply</button>
                                </div>
                            </div>
                        </div>

                        {/* Comment 2 */}
                        <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                            <img
                                src="https://via.placeholder.com/40"
                                alt="User"
                                className="w-10 h-10 rounded-full flex-shrink-0"
                            />
                            <div className="flex-1">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="font-semibold">Sarah F1Fan</span>
                                    <span className="text-sm text-gray-500">4 hours ago</span>
                                </div>
                                <p className="text-gray-700 mb-3 leading-relaxed">
                                    Great article! Really captured the excitement of the race. Can't wait for Austin!
                                </p>
                                <div className="flex gap-4">
                                    <button className="text-sm text-gray-500 hover:text-[#e10600]">👍 3</button>
                                    <button className="text-sm text-gray-500 hover:text-[#e10600]">Reply</button>
                                </div>
                            </div>
                        </div>

                        {/* Comment 3 */}
                        <div className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                            <img
                                src="https://via.placeholder.com/40"
                                alt="User"
                                className="w-10 h-10 rounded-full flex-shrink-0"
                            />
                            <div className="flex-1">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="font-semibold">Mike Racing</span>
                                    <span className="text-sm text-gray-500">5 hours ago</span>
                                </div>
                                <p className="text-gray-700 mb-3 leading-relaxed">
                                    The strategy call during the VSC was perfect. That's what wins championships - not just speed, but perfect execution.
                                </p>
                                <div className="flex gap-4">
                                    <button className="text-sm text-gray-500 hover:text-[#e10600]">👍 8</button>
                                    <button className="text-sm text-gray-500 hover:text-[#e10600]">Reply</button>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Load More */}
                    <button className="w-full mt-6 px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:border-[#e10600] hover:text-[#e10600] transition-all">
                        Load More Comments
                    </button>
                </section>

                {/* Related Articles */}
                <section>
                    <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ArticleCard />
                        <ArticleCard />
                    </div>
                </section>

            </div>
        </div>
    );
}