import { useContext } from "react";
import { Link } from "react-router";
import UserContext from "../../contexts/userContext.jsx";

export default function Header() {
    const { isAuthenticated } = useContext(UserContext);
    return (
        <header className="bg-[#15151e] sticky top-0 z-50 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">

                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <h1 className="text-2xl font-extrabold text-white">
                            F1 <span className="text-[#e10600]">BLOG</span>
                        </h1>
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link
                            to="/"
                            className="text-white hover:text-[#e10600] transition-colors px-3 py-2 rounded-md hover:bg-[#e10600]/10 font-medium"
                        >
                            Home
                        </Link>
                        <Link
                            to="/articles"
                            className="text-white hover:text-[#e10600] transition-colors px-3 py-2 rounded-md hover:bg-[#e10600]/10 font-medium"
                        >
                            Articles
                        </Link>
                        <Link
                            to="/about"
                            className="text-white hover:text-[#e10600] transition-colors px-3 py-2 rounded-md hover:bg-[#e10600]/10 font-medium"
                        >
                            About
                        </Link>
                    </nav>

                    {isAuthenticated
                        ? (
                            <div className="flex items-center space-x-3">
                                <Link
                                    to="/articles/create"
                                    className="bg-[#e10600] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#c10500] transition-all hover:shadow-lg hover:shadow-[#e10600]/30 hidden sm:block"
                                >
                                    Write Article
                                </Link>
                                <Link
                                    to="/my-articles"
                                    className="text-white border-2 border-white px-5 py-2 rounded-lg font-semibold hover:bg-white hover:text-[#15151e] transition-all hidden sm:block"
                                >
                                    My Articles
                                </Link>
                                <Link
                                    to={'/logout'}
                                    className="bg-[#38383f] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#1e1e28] transition-all"
                                >
                                    Logout
                                </Link>
                            </div>
                        )
                        : (
                            <div className="flex items-center space-x-3">
                                <Link
                                    to="/login"
                                    className="text-white border-2 border-white px-5 py-2 rounded-lg font-semibold hover:bg-white hover:text-[#15151e] transition-all"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="bg-[#e10600] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#c10500] transition-all hover:shadow-lg hover:shadow-[#e10600]/30"
                                >
                                    Register
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </header>
    );
}