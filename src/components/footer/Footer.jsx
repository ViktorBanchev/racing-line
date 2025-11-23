import { Link } from "react-router";

export default function Footer() {
    return (
        <footer className="bg-[#15151e] text-white mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">
                            F1 <span className="text-[#e10600]">BLOG</span>
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            Your source for the latest Formula 1 news, analysis, and insights.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-[#e10600]">Quick Links</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-[#e10600] transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/articles" className="text-gray-400 hover:text-[#e10600] transition-colors">
                                    Articles
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-[#e10600] transition-colors">
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Categories */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-[#e10600]">Categories</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-[#e10600] transition-colors">
                                    Race Reports
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-[#e10600] transition-colors">
                                    Technical
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-[#e10600] transition-colors">
                                    Driver News
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-[#e10600] transition-colors">
                                    Team News
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-[#e10600]">Connect</h4>
                        <div className="flex space-x-4">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-[#e10600] transition-colors text-lg"
                            >
                                Twitter
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-[#e10600] transition-colors text-lg"
                            >
                                Instagram
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-[#e10600] transition-colors text-lg"
                            >
                                Facebook
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-[#1e1e28] mt-8 pt-6 text-center">
                    <p className="text-gray-400">
                        &copy; 2025 F1 Blog. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}