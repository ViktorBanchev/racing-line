import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import UserContext from "../../contexts/UserContext.jsx";
import { Menu, X } from 'lucide-react';

export default function Header() {
    const { isAuthenticated, user } = useContext(UserContext);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        const handleResize = () => { if (window.innerWidth >= 768) setMobileMenuOpen(false) };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    const closeMenu = () => setMobileMenuOpen(false);

    return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#15151e]/95 backdrop-blur-md shadow-xl py-3' : 'bg-[#15151e] py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <Link to="/" onClick={closeMenu} className="flex items-center group">
                        <div className="relative flex items-baseline gap-1">
                            <h1 className="text-3xl font-black text-white tracking-tighter italic transform -skew-x-6">
                                RACING<span className="text-[#e10600]">LINE</span>
                            </h1>
                            <div className="w-2 h-2 rounded-full bg-[#e10600] mb-1 animate-pulse"></div>
                        </div>
                    </Link>

                    <nav className="hidden md:flex items-center gap-1">
                        <Link to='/' className="relative px-5 py-2 text-gray-300 font-bold uppercase text-sm tracking-wide hover:text-white transition-colors overflow-hidden group">
                            <span className="relative z-10">Home</span>
                            <span className="absolute inset-0 bg-white/10 transform skew-x-[-20deg] translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
                        </Link>
                        <Link to='/articles' className="relative px-5 py-2 text-gray-300 font-bold uppercase text-sm tracking-wide hover:text-white transition-colors overflow-hidden group">
                            <span className="relative z-10">Articles</span>
                            <span className="absolute inset-0 bg-white/10 transform skew-x-[-20deg] translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
                        </Link>
                        {isAuthenticated && (
                            <Link to="/my-articles" className="relative px-5 py-2 text-gray-300 font-bold uppercase text-sm tracking-wide hover:text-white transition-colors overflow-hidden group">
                                <span className="relative z-10">My Paddock</span>
                                <span className="absolute inset-0 bg-white/10 transform skew-x-[-20deg] translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
                            </Link>
                        )}
                        <Link to='/about' className="relative px-5 py-2 text-gray-300 font-bold uppercase text-sm tracking-wide hover:text-white transition-colors overflow-hidden group">
                            <span className="relative z-10">About</span>
                            <span className="absolute inset-0 bg-white/10 transform skew-x-[-20deg] translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
                        </Link>
                    </nav>

                    <div className="hidden md:flex items-center gap-4">
                        {isAuthenticated ? (
                            <>
                                {user.role === 'admin' && (
                                    <Link to="/articles/create" className="flex items-center gap-2 bg-[#e10600] hover:bg-[#c10500] text-white px-5 py-2 rounded transform -skew-x-12 hover:skew-x-0 transition-all shadow-lg hover:shadow-red-600/40">
                                        <span className="transform skew-x-12 font-bold uppercase text-sm tracking-wider">Write</span>
                                    </Link>
                                )}

                                <Link to="/logout" className="text-gray-400 hover:text-white font-semibold text-sm">Logout</Link>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="text-white font-bold text-sm uppercase tracking-wide hover:text-[#e10600] transition-colors">
                                    Login
                                </Link>
                                <Link to="/register" className="bg-white text-[#15151e] px-5 py-2 rounded font-bold uppercase text-sm tracking-wide hover:bg-[#e10600] hover:text-white transition-all transform -skew-x-12">
                                    <span className="inline-block transform skew-x-12">Join Now</span>
                                </Link>
                            </>
                        )}
                    </div>

                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            <div className={`md:hidden absolute top-full left-0 w-full bg-[#1c1c26] border-t-4 border-[#1c1c26] transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-screen border-b border-gray-800' : 'max-h-0 border-t-0'}`}>
                <nav className="flex flex-col p-4 space-y-2">
                    <Link to='/' onClick={closeMenu} className="block px-4 py-3 text-white font-bold uppercase text-sm tracking-wide hover:bg-[#15151e] border-l-2 border-transparent hover:border-[#e10600] transition-all">Home</Link>
                    <Link to='/articles' onClick={closeMenu} className="block px-4 py-3 text-white font-bold uppercase text-sm tracking-wide hover:bg-[#15151e] border-l-2 border-transparent hover:border-[#e10600] transition-all">Articles</Link>

                    {isAuthenticated && (
                        <Link to='/my-articles' onClick={closeMenu} className="block px-4 py-3 text-white font-bold uppercase text-sm tracking-wide hover:bg-[#15151e] border-l-2 border-transparent hover:border-[#e10600] transition-all">My Paddock</Link>
                    )}

                    <Link to='/about' onClick={closeMenu} className="block px-4 py-3 text-white font-bold uppercase text-sm tracking-wide hover:bg-[#15151e] border-l-2 border-transparent hover:border-[#e10600] transition-all mb-4">About</Link>

                    <div className="h-px bg-gray-800 my-2"></div>

                    {isAuthenticated ? (
                        <>
                            <Link to="/articles/create" onClick={closeMenu} className="block text-center bg-[#e10600] text-white px-4 py-3 font-bold uppercase text-sm tracking-wider mx-2 rounded-sm">Write Article</Link>
                            <Link to="/logout" onClick={closeMenu} className="block text-center text-gray-400 py-3 font-semibold text-sm hover:text-white">Logout</Link>
                        </>
                    ) : (
                        <div className="flex flex-col gap-3 mx-2 pt-2">
                            <Link to="/login" onClick={closeMenu} className="block text-center border border-gray-600 text-white px-4 py-3 font-bold uppercase text-sm tracking-wider rounded-sm">Login</Link>
                            <Link to="/register" onClick={closeMenu} className="block text-center bg-white text-[#15151e] px-4 py-3 font-bold uppercase text-sm tracking-wider rounded-sm">Join Now</Link>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
}