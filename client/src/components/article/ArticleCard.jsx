import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";


export default function ArticleCard({
    _id,
    title,
    category,
    image,
    excerpt,
    author,
    _createdOn,
}) {
    const categoryFormatted = category
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    const date = new Date(_createdOn).toLocaleDateString('en-GB');

    return (
        <article className="group relative flex flex-col h-full bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#e10600] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-20"></div>

            <div className="relative h-60 overflow-hidden">
                <Link to={`/articles/${_id}`}>
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                </Link>

                <div className="absolute top-4 left-4">
                    <span className="bg-[#15151e]/90 backdrop-blur-sm text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md border-l-2 border-[#e10600]">
                        {categoryFormatted}
                    </span>
                </div>
            </div>

            <div className="flex flex-col flex-grow p-6">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                        <img
                            src={author?.image}
                            alt={author?.username}
                            className="w-6 h-6 rounded-full border border-gray-100"
                        />
                        <span className="text-xs font-semibold text-gray-500 hover:text-[#e10600] transition-colors cursor-pointer">
                            {author?.username}
                        </span>
                    </div>
                    <span className="text-xs text-gray-400 font-medium">
                        {date || '20.11.2025'}
                    </span>
                </div>

                <Link to={`/articles/${_id}`} className="block mb-3 group-hover:text-[#e10600] transition-colors duration-300">
                    <h3 className="text-lg font-extrabold text-[#15151e] leading-snug">
                        {title}
                    </h3>
                </Link>

                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2 flex-grow">
                    {excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                    <Link to={`/articles/${_id}`} className="flex items-center gap-1 text-xs font-bold text-[#e10600] uppercase tracking-wide group/link">
                        Read More
                        <ArrowUpRight size={14} className="transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </Link>
                </div>
            </div>
        </article>
    );
}