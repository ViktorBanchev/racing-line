import { Link } from 'react-router';
import { Clock, Calendar, ChevronRight } from 'lucide-react'; // Добавяме ChevronRight

export default function ArticleListItem({ _id, title, category, image, date, excerpt }) {
    return (
        <Link 
            to={`/articles/${_id}`} 
            // 💥 FIX: Основният контейнер става хоризонтален, широк и премахваме ненужните сенки за list view
            className="group block bg-white hover:bg-gray-50 transition-colors duration-300 overflow-hidden 
                       flex flex-row items-center border border-gray-200 hover:border-[#e10600] rounded-sm"
        >
            
            {/* Image (Left, КОМПАКТЕН ИЗГЛЕД) */}
            <div className="relative w-48 h-32 flex-shrink-0 overflow-hidden">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/15151e/e10600?text=IMG'; }}
                />
                 {/* Category Badge - Позициониран върху изображението */}
                <span className="absolute top-3 left-3 bg-[#15151e] text-white text-[9px] font-bold uppercase px-2 py-1 tracking-wider rounded-sm border-l-2 border-[#e10600]">
                    {category}
                </span>
            </div>
            
            {/* Content (Right, Fluid Padding, ЕЛЕМЕНТИТЕ СА ПОДРЕДЕНИ ЕДИН ВЪРХУ ДРУГ) */}
            <div className="flex flex-col justify-between flex-grow min-w-0 h-full p-4 md:p-5">
                
                {/* Title */}
                <h3 className="text-xl font-black text-[#15151e] leading-snug group-hover:text-[#e10600] transition-colors mb-2">
                    {title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-gray-600 text-sm line-clamp-2 mb-4 flex-grow">
                    {excerpt}
                </p>

                {/* Footer/Meta Row */}
                <div className="flex items-center justify-between text-xs text-gray-500 font-medium uppercase tracking-wide pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                        <Calendar size={12} className="text-gray-400" /> {date}
                    </div>
                    {/* Read More Arrow */}
                    <div className="flex items-center gap-1 text-[#e10600] font-bold">
                         Read
                        <ChevronRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                    </div>
                </div>
            </div>
        </Link>
    );
}