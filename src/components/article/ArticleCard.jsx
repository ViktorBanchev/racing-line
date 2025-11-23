import { Link } from "react-router";


export default function ArticleCard({
    _id,
    title,
    category,
    image,
    excerpt,
    author,
    authorImage,
    likes,
    views
}) {
    return (
        <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

            {/* Image */}
            <div className="relative h-52 overflow-hidden">
                <img
                    src={image}
                    alt="Article"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <span className="absolute top-3 right-3 bg-[#e10600] text-white px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wide">
                    {category}
                </span>
            </div>

            {/* Content */}
            <div className="p-5">
                <Link to="/articles/1">
                    <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-[#e10600] transition-colors cursor-pointer">
                        {title}
                    </h3>
                </Link>

                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {excerpt}
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                        <img
                            src={authorImage}
                            alt="Author"
                            className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="text-sm text-gray-500 font-medium">{author}</span>
                    </div>

                    <div className="flex gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                            ❤️ {likes}
                        </span>
                        <span className="flex items-center gap-1">
                            👁️ {views}
                        </span>
                    </div>
                </div>

                <Link
                    to={`/articles/${_id}`}
                    className="inline-block mt-4 text-[#e10600] font-semibold hover:text-[#c10500] transition-colors"
                >
                    Read More →
                </Link>
            </div>
        </article>
    );
}