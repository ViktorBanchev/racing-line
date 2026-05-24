import { useContext, useState } from "react";
import { Link } from "react-router";
import UserContext from "../../contexts/userContext.jsx";

export default function Header() {
    const { isAuthenticated } = useContext(UserContext);
    const [scrolled, setScrolled] = useState(false);

    return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#15151e]/95 backdrop-blur-md shadow-xl py-3' : 'bg-[#15151e] py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center group">
                        <div className="relative flex items-baseline gap-1">
                            <h1 className="text-3xl font-black text-white tracking-tighter italic transform -skew-x-6">
                                RACING<span className="text-[#e10600]">LINE</span>
                            </h1>
                            <div className="w-2 h-2 rounded-full bg-[#e10600] mb-1 animate-pulse"></div>
                        </div>
                    </Link>

                    <nav className="hidden md:flex items-center gap-1">
                        <Link
                            to='/'
                            className="relative px-5 py-2 text-gray-300 font-bold uppercase text-sm tracking-wide hover:text-white transition-colors overflow-hidden group"
                        >
                            <span className="relative z-10">Home</span>
                            <span className="absolute inset-0 bg-white/10 transform skew-x-[-20deg] translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
                        </Link>

                        <Link
                            to='/articles'
                            className="relative px-5 py-2 text-gray-300 font-bold uppercase text-sm tracking-wide hover:text-white transition-colors overflow-hidden group"
                        >
                            <span className="relative z-10">Articles</span>
                            <span className="absolute inset-0 bg-white/10 transform skew-x-[-20deg] translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
                        </Link>
                        {isAuthenticated && (
                            <Link
                                to="/my-articles"
                                className="relative px-5 py-2 text-gray-300 font-bold uppercase text-sm tracking-wide hover:text-white transition-colors overflow-hidden group"
                            >
                                <span className="relative z-10">My Paddock</span>
                                <span className="absolute inset-0 bg-white/10 transform skew-x-[-20deg] translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
                            </Link>
                        )}


                        <Link
                            to='/about'
                            className="relative px-5 py-2 text-gray-300 font-bold uppercase text-sm tracking-wide hover:text-white transition-colors overflow-hidden group"
                        >
                            <span className="relative z-10">About</span>
                            <span className="absolute inset-0 bg-white/10 transform skew-x-[-20deg] translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
                        </Link>

                    </nav>

                    <div className="flex items-center gap-4">
                        {isAuthenticated ? (
                            <>
                                <Link to="/articles/create" className="hidden sm:flex items-center gap-2 bg-[#e10600] hover:bg-[#c10500] text-white px-5 py-2 rounded transform -skew-x-12 hover:skew-x-0 transition-all shadow-lg hover:shadow-red-600/40">
                                    <span className="transform skew-x-12 font-bold uppercase text-sm tracking-wider">Write</span>
                                </Link>
                                <Link to="/logout" className="text-gray-400 hover:text-white font-semibold text-sm">Logout</Link>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="hidden sm:block text-white font-bold text-sm uppercase tracking-wide hover:text-[#e10600] transition-colors">
                                    Login
                                </Link>
                                <Link to="/register" className="bg-white text-[#15151e] px-5 py-2 rounded font-bold uppercase text-sm tracking-wide hover:bg-[#e10600] hover:text-white transition-all transform -skew-x-12">
                                    <span className="inline-block transform skew-x-12">Join Now</span>
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}