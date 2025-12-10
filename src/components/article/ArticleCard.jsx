import { ArrowUpRight, Eye, Heart } from "lucide-react";
import { Link } from "react-router";


export default function ArticleCard({
    _id,
    title,
    category,
    image,
    excerpt,
    author,
    // authorImage,
    likes,
    views
}) {
    const categoryFormatted = category
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return (
        <article className="group relative flex flex-col h-full bg-white rounded-xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden">

            {/* Hover Accent Line - The "Racing Line" */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#e10600] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-20"></div>

            {/* Image Section */}
            <div className="relative h-60 overflow-hidden">
                <Link to={`/articles/${_id}`}>
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                </Link>

                {/* Category Badge - Clean & Floating */}
                <div className="absolute top-4 left-4">
                    <span className="bg-[#15151e]/90 backdrop-blur-sm text-white px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md border-l-2 border-[#e10600]">
                        {categoryFormatted}
                    </span>
                </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-grow p-6">

                {/* Date & Author Row */}
                {/* <div className="flex items-center justify-between mb-3">
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
                </div> */}

                {/* Title */}
                <Link to={`/articles/${_id}`} className="block mb-3 group-hover:text-[#e10600] transition-colors duration-300">
                    <h3 className="text-lg font-extrabold text-[#15151e] leading-snug">
                        {title}
                    </h3>
                </Link>

                {/* Excerpt */}
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2 flex-grow">
                    {excerpt}
                </p>

                {/* Card Footer / Action */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                    <div className="flex gap-4 text-gray-400 text-xs font-medium">
                        <span className="flex items-center gap-1.5 hover:text-red-500 transition-colors">
                            <Heart size={14} className="group-hover:text-red-500" /> {likes}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Eye size={14} /> {views}
                        </span>
                    </div>

                    <Link to={`/articles/${_id}`} className="flex items-center gap-1 text-xs font-bold text-[#e10600] uppercase tracking-wide group/link">
                        Read More
                        <ArrowUpRight size={14} className="transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </Link>
                </div>
            </div>
        </article>
    );
}