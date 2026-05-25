export default function ToolButton({ onClick, isActive, disabled, icon, title }) {
    return (<button
        type="button"
        onClick={(e) => { e.preventDefault(); onClick(); }}
        disabled={disabled}
        className={`p-2 rounded-sm transition-colors ${isActive ? 'bg-[#e10600] text-white' :
            disabled ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-700 hover:text-white'
            }`}
        title={title}
    >
        {icon}
    </button>
    );
}