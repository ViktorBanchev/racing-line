import { Link, useNavigate } from "react-router";
import { Edit3, Trash2, Globe, Calendar } from 'lucide-react';

export default function MyArticleCard({
    _id,
    title,
    category,
    image,
    _createdOn,
    status = 'Published',
    onDelete,
    isDeleting
}) {

    const navigate = useNavigate();

    const date = new Date(_createdOn).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });

    return (
        <article className="bg-white rounded-sm shadow-sm transition-all duration-300 grid grid-cols-12 items-stretch border border-gray-200 hover:shadow-md hover:border-[#e10600] overflow-hidden">
            <div className={`col-span-2 relative h-full min-h-[120px] flex-shrink-0 group 'bg-[#e10600]/10'}`}>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="col-span-7 p-4 md:p-6 flex flex-col justify-center">
                <h3 className="text-base font-bold line-clamp-2 text-[#15151e] hover:text-[#e10600] transition-colors cursor-pointer"
                    onClick={() => navigate(`/articles/${_id}`)}>
                    {title}
                </h3>

                <div className="flex items-center gap-4 text-[10px] mt-2 text-gray-500 font-medium uppercase tracking-wider">
                    <span className="flex items-center gap-1">
                        <Calendar size={10} /> {date}
                    </span>
                    <span className="flex items-center gap-1 font-bold text-[#15151e]">
                        {category}
                    </span>
                </div>
            </div>

            <div className="col-span-3 p-4 lg:p-6 border-l border-gray-100 flex flex-col justify-between items-center bg-gray-50/50">
                <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider whitespace-nowrap mb-2">
                    <Globe size={12} className="text-[#e10600]" />
                    <span className='text-[#e10600]'>
                        {status}
                    </span>
                </div>

                <div className="flex gap-2 w-full justify-center">
                    <Link
                        to={`/articles/${_id}/edit`}
                        className="flex-grow px-2 py-1 bg-[#15151e] text-white text-[11px] font-bold uppercase rounded-sm hover:bg-[#e10600] transition-colors text-center shadow-sm"
                        title='Edit article'
                    >
                        <Edit3 size={14} className="inline-block mr-1 -mt-1" /> Edit
                    </Link>

                    <button
                        onClick={() => onDelete(_id)}
                        disabled={isDeleting}
                        className="flex-grow px-2 py-1 bg-red-600 text-white text-[11px] font-bold uppercase rounded-sm hover:bg-red-800 transition-colors disabled:opacity-50 text-center shadow-sm"
                        title="Delete Article"
                    >
                        <Trash2 size={14} className="inline-block mr-1 -mt-1" /> {isDeleting ? 'Deleting...' : 'Delete'}
                    </button>
                </div>
            </div>
        </article>
    );

}