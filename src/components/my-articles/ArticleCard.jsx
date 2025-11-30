import { Link } from "react-router";

export default function ArticleCard({
    _id,
    title,
    image,
    category
}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-5 hover:bg-gray-50 transition-colors">
            <div className="md:col-span-5">
                <Link to={`/articles/${_id}`} className="flex gap-4">
                    <img
                        src={image}
                        alt="Article"
                        className="w-24 h-16 object-cover rounded-lg flex-shrink-0"
                    />
                    <div>
                        <h3 className="font-semibold text-gray-900 hover:text-[#e10600] line-clamp-2 mb-1">
                            {title}
                        </h3>
                        <p className="text-sm text-gray-500">Published on Nov 22, 2025</p>
                    </div>
                </Link>
            </div>
            <div className="md:col-span-2 flex items-center">
                <span className="inline-block bg-[#e10600] text-white px-3 py-1 rounded text-xs font-semibold uppercase">
                    {category}
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
                    to={`/articles/${_id}/edit`}
                    className="px-4 py-2 bg-gray-700 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-all"
                >
                    Edit
                </Link>
                <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700 transition-all">
                    Delete
                </button>
            </div>
        </div>
    );
}