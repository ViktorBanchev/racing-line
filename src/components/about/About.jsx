import {Link} from "react-router";

export default function About() {
    return (
        <div className="min-h-screen bg-[#f3f4f6] pb-20">
            <div className="bg-[#15151e] pt-24 pb-12 border-b-4 border-[#e10600]">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl font-black text-white uppercase italic tracking-tighter mb-4">
                        About <span className="text-[#e10600]">Paddock</span>
                    </h1>
                    <p className="text-gray-400 text-lg">
                        The definitive platform for motorsport analysis and reporting.
                    </p>
                </div>
            </div>

            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">

                {/* Mission Section */}
                <section className="bg-white p-8 shadow-md rounded-sm border-l-4 border-[#15151e]">
                    <h2 className="text-2xl font-black italic text-[#15151e] mb-4">Our Mission</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Paddock Editor was created to empower writers and journalists with a clean, fast, and
                        feature-rich editing environment. Our goal is to streamline the content creation process,
                        allowing our authors to focus entirely on delivering high-quality, insightful analysis without
                        being distracted by complex interfaces.
                    </p>
                </section>

                {/* Technical Section */}
                <section className="bg-white p-8 shadow-md rounded-sm border-l-4 border-[#e10600]">
                    <h2 className="text-2xl font-black italic text-[#15151e] mb-4">Technical Specifications</h2>
                    <p className="text-gray-700 mb-4">
                        This application is built on modern technologies to ensure performance and reliability:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 pl-4">
                        <li>**Frontend:** React with Tailwind CSS for rapid styling.</li>
                        <li>**Editor:** Tiptap Engine V2.0 for a robust, block-based WYSIWYG experience.</li>
                        <li>**Backend:** Node.js with a RESTful API architecture.</li>
                    </ul>
                </section>

                <div className="pt-4 text-center">
                    <Link to="/"
                          className="px-8 py-3 bg-[#e10600] text-white font-black uppercase italic tracking-wider rounded-sm hover:bg-[#c10500] transition-all transform shadow-lg shadow-red-600/20">
                        Back to the Main Grid
                    </Link>
                </div>

            </main>
        </div>
    );
}