import { Link } from 'react-router';
import { AlertTriangle } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#15151e] flex items-center justify-center text-center px-4">
            <div className="max-w-lg mx-auto py-12">
                <AlertTriangle size={64} className="text-[#e10600] mx-auto mb-6"/>

                <h1 className="text-7xl font-black italic text-white uppercase tracking-tighter mb-4">
                    404
                </h1>

                <h2 className="text-3xl font-bold text-gray-200 mb-6">
                    Pit Stop Error: Lost Connection
                </h2>

                <p className="text-gray-400 text-lg mb-8">
                    The page you are looking for has taken a wrong turn and cannot be found.
                    It might have been moved, deleted, or you might have mistyped the address.
                </p>

                <Link to="/"
                      className="px-8 py-3 bg-[#e10600] text-white font-black uppercase italic tracking-wider rounded-sm hover:bg-[#c10500] transition-all transform shadow-lg shadow-red-600/20">
                    Return to the Starting Grid
                </Link>
            </div>
        </div>
    );
}