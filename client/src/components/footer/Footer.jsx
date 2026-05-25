import { Link } from "react-router";
import { ChevronRight } from 'lucide-react'
import { useState } from "react";

export default function Footer() {
    const [openSection, setOpenSection] = useState('');

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? '' : section);
    }

    return (
        <footer className="bg-[#15151e] text-white mt-20 border-t-4 border-[#e10600] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1c1c26] transform skew-x-[-12deg] translate-x-12 z-0 hidden md:block"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    <div className="space-y-6 mb-6 md:mb-0">
                        <Link to="/" className="flex items-center group w-fit">
                            <div className="relative flex items-baseline gap-1">
                                <h3 className="text-2xl font-black text-white tracking-tighter italic transform -skew-x-6">
                                    RACING<span className="text-[#e10600]">LINE</span>
                                </h3>
                                <div className="w-1.5 h-1.5 rounded-full bg-[#e10600] mb-1 animate-pulse"></div>
                            </div>
                        </Link>
                        <p className="text-gray-400 leading-relaxed text-sm max-w-xs border-l-2 border-[#e10600] pl-4">
                            Your definitive source for Formula 1 news, technical analysis, and paddock insights.
                        </p>
                    </div>

                    <div className="border-b border-gray-800 md:border-none pb-4 md:pb-0">
                        <button
                            onClick={() => toggleSection('navigation')}
                            className="w-full flex items-center justify-between md:pointer-events-none group"
                        >
                            <h4 className="text-lg font-bold text-white uppercase italic tracking-wider flex items-center gap-2">
                                <ChevronRight size={16} className={`text-[#e10600] transition-transform duration-300 md:!rotate-0 ${openSection === 'navigation' ? 'rotate-90' : ''}`} />
                                Navigation
                            </h4>
                        </button>

                        <div className={`overflow-hidden transition-all duration-300 md:!max-h-full ${openSection === 'navigation' ? 'max-h-60 mt-4' : 'max-h-0 md:max-h-60 md:mt-6'}`}>
                            <ul className="space-y-3">
                                {['Home', 'Articles', 'About', 'Contact'].map((item) => (
                                    <li key={item}>
                                        <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-gray-400 hover:text-white hover:translate-x-2 transition-all inline-flex items-center gap-2 text-sm font-medium">
                                            <span className="w-1.5 h-1.5 bg-[#e10600] rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="border-b border-gray-800 md:border-none pb-4 md:pb-0">
                        <button
                            onClick={() => toggleSection('paddock')}
                            className="w-full flex items-center justify-between md:pointer-events-none group"
                        >
                            <h4 className="text-lg font-bold text-white uppercase italic tracking-wider flex items-center gap-2">
                                <ChevronRight size={16} className={`text-[#e10600] transition-transform duration-300 md:!rotate-0 ${openSection === 'paddock' ? 'rotate-90' : ''}`} />
                                Paddock
                            </h4>
                        </button>

                        <div className={`overflow-hidden transition-all duration-300 md:!max-h-full ${openSection === 'paddock' ? 'max-h-60 mt-4' : 'max-h-0 md:max-h-60 md:mt-6'}`}>
                            <ul className="space-y-3">
                                <li>
                                    <Link to="https://github.com/ViktorBanchev/racing-line" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all inline-flex items-center gap-2 text-sm font-medium">
                                        <span className="w-1.5 h-1.5 bg-[#e10600] rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                                        GitHub repo
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#1c1c26] mt-16 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest font-semibold">
                    <p>&copy; 2026 Racing Line.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <p className="hover:text-[#e10600] transition-colors">Privacy Policy</p>
                        <p className="hover:text-[#e10600] transition-colors">Terms of Service</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}