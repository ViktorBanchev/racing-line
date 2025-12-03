import {
    Image as ImageIcon,
    Bold, Italic, List, Quote, Link as LinkIcon,
    Heading2, Heading3, Undo, Redo, Code
} from 'lucide-react';
import ToolButton from './ToolButton.jsx';
import { useEffect, useState } from 'react';

export default function MenuBar({ editor }) {
    const [isSticky, setIsSticky] = useState(false);

    const [, forceUpdate] = useState({});

    useEffect(() => {
        const handleUpdate = () => {
            forceUpdate({});
        };

        editor.on('transaction', handleUpdate);
        editor.on('selectionUpdate', handleUpdate);

        return () => {
            editor.off('transaction', handleUpdate);
            editor.off('selectionUpdate', handleUpdate);
        };
    }, [editor]);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 200);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    if (!editor) return null;


    const addLink = () => {
        const previousUrl = editor.getAttributes('link').href;
        const url = window.prompt('URL', previousUrl);
        if (url === null) return; // cancelled
        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink().run();
            return;
        }
        editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    };

    const addImage = () => {
        const url = window.prompt('Image URL');
        if (url) {
            editor.chain().focus().setImage({ src: url }).run();
        }
    };

    return (
        // <div className="bg-[#1c1c26] text-gray-400 p-2 flex flex-wrap items-center gap-1 border-b border-gray-800 sticky top-24 z-50 rounded-t-sm shadow-md transition-all">
        <div className={`
            sticky z-50 transition-all duration-300 ease-in-out flex flex-wrap items-center gap-1 text-gray-400
            ${isSticky
                ? "top-24 mx-auto w-[85%] rounded-full bg-[#1c1c26]/90 backdrop-blur-md border border-gray-700 shadow-2xl py-2 px-6"
                : "top-24 w-full bg-[#1c1c26] border-b border-gray-800 rounded-t-sm py-2 px-6"
            }
        `}>
            <ToolButton
                onClick={() => editor.chain().focus().toggleBold().run()}
                isActive={editor.isActive('bold')}
                icon={<Bold size={16} />}
                title="Bold (Ctrl+B)"
            />
            <ToolButton
                onClick={() => editor.chain().focus().toggleItalic().run()}
                isActive={editor.isActive('italic')}
                icon={<Italic size={16} />}
                title="Italic (Ctrl+I)"
            />
            <div className="w-px h-4 bg-gray-700 mx-1"></div>
            <ToolButton
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                isActive={editor.isActive('heading', { level: 2 })}
                icon={<Heading2 size={16} />}
                title="Heading 2"
            />
            <ToolButton
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                isActive={editor.isActive('heading', { level: 3 })}
                icon={<Heading3 size={16} />}
                title="Heading 3"
            />
            <div className="w-px h-4 bg-gray-700 mx-1"></div>
            <ToolButton
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                isActive={editor.isActive('bulletList')}
                icon={<List size={16} />}
                title="Bullet List"
            />
            <ToolButton
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                isActive={editor.isActive('blockquote')}
                icon={<Quote size={16} />}
                title="Quote"
            />
            <ToolButton
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                isActive={editor.isActive('codeBlock')}
                icon={<Code size={16} />}
                title="Code Block"
            />
            <div className="w-px h-4 bg-gray-700 mx-1"></div>
            <ToolButton
                onClick={addLink}
                isActive={editor.isActive('link')}
                icon={<LinkIcon size={16} />}
                title="Link"
            />
            <ToolButton
                onClick={addImage}
                icon={<ImageIcon size={16} />}
                title="Insert Image"
            />
            <div className="flex-grow"></div>
            <ToolButton
                onClick={() => editor.chain().focus().undo().run()}
                disabled={!editor.can().undo()}
                icon={<Undo size={16} />}
                title="Undo"
            />
            <ToolButton
                onClick={() => editor.chain().focus().redo().run()}
                disabled={!editor.can().redo()}
                icon={<Redo size={16} />}
                title="Redo"
            />
        </div>
    );
};