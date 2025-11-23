import { Link } from "react-router";


export default function ArticleCard() {
    return (
        <article className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

            {/* Image */}
            <div className="relative h-52 overflow-hidden">
                <img
                    src="https://via.placeholder.com/400x250"
                    alt="Article"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <span className="absolute top-3 right-3 bg-[#e10600] text-white px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wide">
                    Race Reports
                </span>
            </div>

            {/* Content */}
            <div className="p-5">
                <Link to="/articles/1">
                    <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-[#e10600] transition-colors cursor-pointer">
                        Ferrari's Strategy Masterclass in Singapore
                    </h3>
                </Link>

                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    A detailed analysis of how Ferrari executed the perfect race strategy under the lights of Marina Bay...
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                        <img
                            src="https://via.placeholder.com/32"
                            alt="Author"
                            className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="text-sm text-gray-500 font-medium">John Doe</span>
                    </div>

                    <div className="flex gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                            ❤️ 24
                        </span>
                        <span className="flex items-center gap-1">
                            👁️ 156
                        </span>
                    </div>
                </div>

                <Link
                    to="/articles/1"
                    className="inline-block mt-4 text-[#e10600] font-semibold hover:text-[#c10500] transition-colors"
                >
                    Read More →
                </Link>
            </div>
        </article>
    );
}