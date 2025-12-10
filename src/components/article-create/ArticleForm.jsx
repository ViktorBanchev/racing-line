import { Link, useNavigate, useParams } from 'react-router';
import { FileText } from 'lucide-react';
import useForm from '../../hooks/useForm.js';
import useRequest from '../../hooks/useRequest.js';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import ImageExtension from '@tiptap/extension-image';
import LinkExtension from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import MenuBar from './tiptap/MenuBar.jsx';
import RightSidebar from './right-sidebar/RightSidebar.jsx';
import { useEffect } from "react";
import { toast } from 'react-toastify';

export default function ArticleForm({
    mode
}) {
    const navigate = useNavigate();
    const { articleId } = useParams();
    const { request } = useRequest();

    const submitAction = async (values) => {
        if (!editor) return;

        const articleData = {
            ...values,
            likedBy: [],
            views: 0,
            content: editor.getHTML(),
            plainText: editor.getText(),
        };

        if (!articleData.title) {
            return toast.error('Title is required');
        }

        if (!articleData.category) {
            return toast.error('Category is required');
        }

        if (!articleData.image) {
            return toast.error('Image is required');
        }

        if (editor.isEmpty) {
            return toast.error('Article content can not be empty');
        }

        try {
            switch (mode) {
                case 'edit':
                    await request(`/data/articles/${articleId}`, 'PUT', articleData);
                    break;
                case 'create':
                    await request('/data/articles', 'POST', articleData);
                    break;
            }
            toast.success(`Article ${mode === 'create' ? 'published' : 'edited'} successfully!`);
            navigate("/");
        } catch (error) {
            toast("Failed to publish article: " + error.message);
        }
    }

    const { register, formAction, imagePreview, setValues } = useForm(submitAction, {
        title: '', category: '', image: '',
    });

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                link: false
            }),
            ImageExtension,
            LinkExtension.configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: 'text-[#e10600] underline font-bold',
                },
            }),
            Placeholder.configure({
                placeholder: "Start writing your analysis... (Type '/' for commands)",
            }),
        ],
        content: '',
        editorProps: {
            attributes: {
                class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none focus:outline-none min-h-[500px] p-8 text-[#15151e]',
            },
        },
    });

    useEffect(() => {
        if (mode === 'edit') {
            request(`/data/articles/${articleId}`, null, null)
                .then(result => {
                    setValues(result);
                    editor.commands.setContent(result.content);
                })
        }
    }, [editor, mode, articleId, request, setValues]);

    return (
        <div className="min-h-screen bg-[#f3f4f6] pb-20">
            <div className="bg-[#15151e] pt-24 pb-6 border-b-4 border-[#e10600]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-end">
                    <div>
                        <h1 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-2">
                            Paddock <span className="text-[#e10600]">Editor</span>
                        </h1>
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
                            Tiptap Engine V2.0
                        </p>
                    </div>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
                <form action={formAction} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-8 space-y-6">
                        <div className="bg-white p-6 shadow-md rounded-sm border-l-4 border-[#15151e]">
                            <h3 className="text-xs font-black uppercase text-gray-400 mb-4 tracking-widest flex items-center gap-2">
                                <FileText size={14} /> Basic Telemetry
                            </h3>

                            <div className="space-y-6">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-bold uppercase text-gray-500">Headline</label>
                                    <input
                                        type="text"
                                        className="w-full text-2xl font-black italic text-[#15151e] placeholder-gray-300 border-0 border-b-2 border-gray-100 focus:border-[#e10600] focus:ring-0 px-0 py-2 bg-transparent transition-all"
                                        placeholder="ENTER TITLE HERE..."
                                        {...register('title')}
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold uppercase text-gray-500">Sector</label>
                                        <select
                                            className="w-full bg-gray-50 font-bold text-sm text-gray-700 border border-gray-200 rounded-sm px-3 py-2 focus:border-[#e10600] focus:ring-0"
                                            {...register('category')}
                                        >
                                            <option value="">Select Category...</option>
                                            <option value="race-report">Race Report</option>
                                            <option value="technical">Technical</option>
                                            <option value="driver-news">Driver News</option>
                                            <option value="team-news">Team News</option>
                                            <option value="interviews">Interviews</option>
                                        </select>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-[10px] font-bold uppercase text-gray-500">Cover
                                            Visual</label>
                                        <input
                                            type="text"
                                            className="w-full bg-gray-50 font-medium text-sm text-gray-700 border border-gray-200 rounded-sm px-3 py-2 focus:border-[#e10600] focus:ring-0"
                                            placeholder="https://..."
                                            {...register('image')}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white shadow-xl rounded-sm flex flex-col min-h-[600px] border border-gray-200">
                            <MenuBar editor={editor} />

                            <div className="flex-grow bg-white cursor-text">
                                <EditorContent editor={editor} />
                            </div>
                        </div>

                        <div className="flex justify-end gap-4 pt-4">
                            <Link to="/"
                                className="px-6 py-3 bg-white border border-gray-200 text-gray-500 font-bold uppercase text-xs tracking-wider rounded-sm hover:bg-gray-50 transition-colors">
                                Abort
                            </Link>
                            <button
                                type="submit"
                                className="px-8 py-3 bg-[#e10600] text-white font-black uppercase italic tracking-wider rounded-sm hover:bg-[#c10500] transition-all transform hover:-translate-y-1 shadow-lg shadow-red-600/20"
                            >
                                Publish to Grid
                            </button>
                        </div>
                    </div>

                    <RightSidebar imagePreview={imagePreview} />
                </form>
            </main>
        </div>
    );
}