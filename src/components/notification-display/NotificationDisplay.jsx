import { AlertTriangle, CheckCircle } from 'lucide-react';

export default function NotificationDisplay({notification, hideNotification}) {
    if (!notification) return null;

    const {message, type} = notification;

    const baseClass = "fixed right-4 bottom-4 p-4 rounded-md shadow-2xl transition-transform duration-300 transform z-[9999]";

    const styleMap = {
        error: {
            bg: 'bg-red-600 border-red-800',
            icon: <AlertTriangle size={20} className="text-white"/>
        },
        success: {
            bg: 'bg-[#15151e] border-gray-700',
            icon: <CheckCircle size={20} className="text-[#e10600]"/>
        }
    };

    const {bg, icon} = styleMap[type] || styleMap.success;

    return (
        <div className={`${baseClass} ${bg} border-l-4`} style={{transform: 'translateX(0)'}}>
            <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-0.5">
                    {icon}
                </div>
                <div className="flex-grow">
                    <p className="text-sm font-semibold text-white uppercase tracking-wide leading-snug">
                        {type === 'error' ? 'ERROR' : 'Success'}
                    </p>
                    <p className="mt-1 text-sm text-gray-200">
                        {message}
                    </p>
                </div>
                <button onClick={hideNotification} className="text-gray-400 hover:text-white transition-colors ml-4 -mt-2">
                    &times;
                </button>
            </div>
        </div>
    );

}