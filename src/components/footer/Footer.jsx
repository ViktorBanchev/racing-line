import { Link } from "react-router";
import { Twitter, Instagram, Facebook, ChevronRight, Flag } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-[#15151e] text-white mt-20 border-t-4 border-[#e10600] relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1c1c26] transform skew-x-[-12deg] translate-x-12 z-0 hidden md:block"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand Section */}
                    <div className="space-y-6">
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
                        <div className="flex gap-4">
                            {[Twitter, Instagram, Facebook].map((Icon, index) => (
                                <a key={index} href="#" className="w-10 h-10 flex items-center justify-center bg-[#1c1c26] rounded hover:bg-[#e10600] transition-colors group">
                                    <Icon size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white uppercase italic tracking-wider flex items-center gap-2">
                            <ChevronRight size={16} className="text-[#e10600]" /> Navigation
                        </h4>
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

                    {/* Categories */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white uppercase italic tracking-wider flex items-center gap-2">
                            <ChevronRight size={16} className="text-[#e10600]" /> Paddock
                        </h4>
                        <ul className="space-y-3">
                            {['Race Reports', 'Technical', 'Driver News', 'Team News'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all inline-flex items-center gap-2 text-sm font-medium">
                                        <span className="w-1.5 h-1.5 bg-[#e10600] rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter (Replaced Connect text with functional look) */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white uppercase italic tracking-wider flex items-center gap-2">
                            <Flag size={16} className="text-[#e10600]" /> Newsletter
                        </h4>
                        <p className="text-gray-400 text-sm mb-4">Subscribe for the latest race debriefs directly to your inbox.</p>
                        <form className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-[#1c1c26] border border-gray-800 text-white px-4 py-2 text-sm focus:outline-none focus:border-[#e10600] rounded-sm"
                            />
                            <button className="bg-[#e10600] text-white px-4 py-2 text-sm font-bold uppercase italic tracking-wide hover:bg-[#c10500] transition-colors rounded-sm">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-[#1c1c26] mt-16 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest font-semibold">
                    <p>&copy; 2025 Racing Line. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-[#e10600] transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-[#e10600] transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}