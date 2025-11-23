import { Link } from "react-router";


export default function ArticleCreate() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="bg-white rounded-xl shadow-md p-8">

                    {/* Header */}
                    <div className="text-center mb-10 pb-8 border-b border-gray-200">
                        <h1 className="text-4xl font-bold mb-3">Create New Article</h1>
                        <p className="text-lg text-gray-600">Share your F1 insights with the community</p>
                    </div>

                    {/* Form */}
                    <form className="space-y-6">

                        {/* Title */}
                        <div>
                            <label htmlFor="title" className="block text-sm font-semibold text-gray-900 mb-2">
                                Article Title <span className="text-[#e10600]">*</span>
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#e10600] focus:outline-none transition-all"
                                placeholder="Enter article title..."
                            />
                            <p className="mt-1 text-sm text-red-600 hidden">Title is required</p>
                        </div>

                        {/* Category */}
                        <div>
                            <label htmlFor="category" className="block text-sm font-semibold text-gray-900 mb-2">
                                Category <span className="text-[#e10600]">*</span>
                            </label>
                            <select
                                id="category"
                                name="category"
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#e10600] focus:outline-none transition-all"
                            >
                                <option value="">Select a category...</option>
                                <option value="race-reports">Race Reports</option>
                                <option value="technical">Technical</option>
                                <option value="driver-news">Driver News</option>
                                <option value="team-news">Team News</option>
                                <option value="opinion">Opinion</option>
                                <option value="analysis">Analysis</option>
                            </select>
                            <p className="mt-1 text-sm text-red-600 hidden">Please select a category</p>
                        </div>

                        {/* Image URL */}
                        <div>
                            <label htmlFor="imageUrl" className="block text-sm font-semibold text-gray-900 mb-2">
                                Image URL <span className="text-[#e10600]">*</span>
                            </label>
                            <input
                                type="url"
                                id="imageUrl"
                                name="imageUrl"
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#e10600] focus:outline-none transition-all"
                                placeholder="https://example.com/image.jpg"
                            />
                            <p className="mt-1 text-sm text-gray-500">Paste a URL to an image for your article</p>
                            <p className="mt-1 text-sm text-red-600 hidden">Please enter a valid image URL</p>
                        </div>

                        {/* Image Preview */}
                        <div>
                            <div className="w-full h-64 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 overflow-hidden">
                                <img
                                    src="https://via.placeholder.com/800x400?text=Image+Preview"
                                    alt="Preview"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <label htmlFor="content" className="block text-sm font-semibold text-gray-900 mb-2">
                                Article Content <span className="text-[#e10600]">*</span>
                            </label>
                            <textarea
                                id="content"
                                name="content"
                                rows="15"
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#e10600] focus:outline-none transition-all resize-none"
                                placeholder="Write your article content here..."

// You can use paragraphs, but HTML will not be rendered for security reasons.

// Pro tip: Structure your content clearly with line breaks between paragraphs.
                            />
                            <div className="flex justify-between items-center mt-2">
                                <p className="text-sm text-gray-500">Minimum 100 characters</p>
                                <p className="text-sm font-semibold text-gray-600">0 / 5000 characters</p>
                            </div>
                            <p className="mt-1 text-sm text-red-600 hidden">Content must be at least 100 characters</p>
                        </div>

                        {/* Actions */}
                        <div className="flex justify-end gap-4 pt-6 border-t border-gray-200">
                            <Link
                                to="/articles"
                                className="px-6 py-3 bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all"
                            >
                                Cancel
                            </Link>
                            <button
                                type="submit"
                                className="px-8 py-3 bg-[#e10600] text-white rounded-lg font-semibold hover:bg-[#c10500] transition-all hover:shadow-lg hover:shadow-[#e10600]/30"
                            >
                                Publish Article
                            </button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}