import { Image as ImageIcon, AlertCircle, CheckCircle } from 'lucide-react';

export default function RightSidebar({ imagePreview }) {
    return (
        <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-4 shadow-md rounded-sm">
                <h4 className="text-xs font-bold uppercase text-gray-400 mb-4 tracking-widest border-b border-gray-100 pb-2">
                    Cover Preview
                </h4>
                <div className="aspect-video bg-gray-100 rounded-sm overflow-hidden relative group">
                    {imagePreview ? (
                        <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                        <div className="flex flex-col items-center justify-center h-full text-gray-400">
                            <ImageIcon size={32} className="mb-2 opacity-50" />
                            <span className="text-[10px] uppercase font-bold">No Signal</span>
                        </div>
                    )}
                    <div className="absolute top-2 right-2 bg-[#e10600] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm">
                        LIVE
                    </div>
                </div>
            </div>

            <div className="bg-[#15151e] text-white p-6 shadow-md rounded-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#e10600] opacity-10 rounded-full blur-xl -mr-10 -mt-10"></div>

                <h4 className="text-sm font-black uppercase italic tracking-tighter mb-4 flex items-center gap-2">
                    <AlertCircle size={16} className="text-[#e10600]" /> Race Engineer
                </h4>

                <ul className="space-y-4">
                    <li className="flex gap-3 items-start text-xs text-gray-300">
                        <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span>
                            <strong className="text-white block uppercase tracking-wide mb-0.5">Catchy Headline</strong>
                            Keep it punchy. Use active verbs like "Dominates", "Stuns", "Collapses".
                        </span>
                    </li>
                    <li className="flex gap-3 items-start text-xs text-gray-300">
                        <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span>
                            <strong className="text-white block uppercase tracking-wide mb-0.5">Formatting</strong>
                            Use <strong>H2/H3</strong> headers to break up long technical analysis into readable sectors.
                        </span>
                    </li>
                    <li className="flex gap-3 items-start text-xs text-gray-300">
                        <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span>
                            <strong className="text-white block uppercase tracking-wide mb-0.5">Images</strong>
                            Use the Image button in the toolbar to insert telemetry graphs or track maps inline.
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}