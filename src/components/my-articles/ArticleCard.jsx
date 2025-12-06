import { Link, useNavigate } from "react-router";
import { Edit3, Trash2, Globe, File, Calendar } from 'lucide-react';

export default function ArticleCard({
    _id,
    title,
    category,
    image,
    excerpt,
    date,
    status = 'Published',
    onDelete,
    isDeleting
}) {

    const navigate = useNavigate();

    return (
        <article className="bg-white rounded-sm shadow-sm transition-all duration-300 grid grid-cols-12 items-stretch border border-gray-200 hover:shadow-md hover:border-[#e10600] overflow-hidden">

            {/* 1. Cover Image (Col 1-2) */}
            {/* FIX: Increased min-h from [80px] to [120px] */}
            <div className={`col-span-2 relative h-full min-h-[120px] flex-shrink-0 group 'bg-[#e10600]/10'}`}>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* 2. Title and Metadata (Col 3-9) */}
            {/* FIX: Increased padding from p-3/p-4 to p-4/p-6 */}
            <div className="col-span-7 p-4 md:p-6 flex flex-col justify-center">
                {/* Title */}
                <h3 className="text-base font-bold line-clamp-2 text-[#15151e] hover:text-[#e10600] transition-colors cursor-pointer"
                    onClick={() => navigate(`/articles/${_id}`)}>
                    {title}
                </h3>

                {/* Meta Row (Category and Date) */}
                <div className="flex items-center gap-4 text-[10px] mt-2 text-gray-500 font-medium uppercase tracking-wider">
                    <span className="flex items-center gap-1">
                        <Calendar size={10} /> {date}
                    </span>
                    <span className="flex items-center gap-1 font-bold text-[#15151e]">
                        {category}
                    </span>
                </div>
            </div>

            {/* 3. Status and Actions (Col 10-12) */}
            {/* FIX: Increased vertical padding from p-2/p-4 to p-4/p-6 */}
            <div className="col-span-3 p-4 lg:p-6 border-l border-gray-100 flex flex-col justify-between items-center bg-gray-50/50">

                {/* Status Indicator */}
                <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider whitespace-nowrap mb-2">
                    <Globe size={12} className="text-[#e10600]" />
                    <span className='text-[#e10600]'>
                        {status}
                    </span>
                </div>

                {/* Action Buttons (Updated to horizontal layout and stronger colors) */}
                <div className="flex gap-2 w-full justify-center">
                    {/* Edit Button */}
                    <Link
                        to={`/articles/edit/${_id}`}
                        // Stronger contrast and hover effect
                        className="flex-grow px-2 py-1 bg-[#15151e] text-white text-[11px] font-bold uppercase rounded-sm hover:bg-[#e10600] transition-colors text-center shadow-sm"
                        title='Edit article'
                    >
                        Edit
                    </Link>

                    {/* Delete Button */}
                    <button
                        onClick={() => onDelete(_id)}
                        disabled={isDeleting}
                        // Stronger contrast and hover effect
                        className="flex-grow px-2 py-1 bg-red-600 text-white text-[11px] font-bold uppercase rounded-sm hover:bg-red-800 transition-colors disabled:opacity-50 text-center shadow-sm"
                        title="Delete Article"
                    >
                        DELETE
                    </button>
                </div>
            </div>
        </article>
    );

}