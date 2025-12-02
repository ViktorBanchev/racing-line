import { Link, useNavigate } from "react-router";
import useForm from "../../hooks/useForm.js";
import { useContext } from "react";
import UserContext from "../../contexts/userContext.jsx";
import { User, Mail, Lock, Image, ArrowRight } from 'lucide-react';

export default function Register() {
    const { registerHandler } = useContext(UserContext)
    const navigate = useNavigate();

    const submitHandler = async (values) => {
        const { username, email, password, confirmPassword, image } = values;

        if (!email || !password) {
            return alert('email or password missing')
        }

        if (password !== confirmPassword) {
            return alert('Password missmatch')
        }
        try {
            await registerHandler({ username, email, password, image });
            navigate('/');
        } catch (error) {
            alert(error.message)
        }
    }

    const {
        register,
        formAction
    } = useForm(submitHandler, {
        username: '',
        email: '',
        image: '',
        password: '',
        confirmPassword: '',
    })

    return (
        <div className="min-h-screen bg-[#15151e] flex items-center justify-center py-12 px-4 relative overflow-hidden">
            {/* Background Aesthetics */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#e10600] opacity-10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>
                {/* Racing Stripes */}
                <div className="absolute top-0 left-1/4 w-32 h-full bg-white/5 skew-x-[-12deg] transform -translate-x-1/2"></div>
                <div className="absolute top-0 left-1/4 w-8 h-full bg-[#e10600]/10 skew-x-[-12deg] transform translate-x-20"></div>
            </div>

            <div className="max-w-md w-full relative z-10">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-black text-white italic uppercase tracking-tighter mb-2">
                        Start Your <span className="text-[#e10600]">Engine</span>
                    </h1>
                    <p className="text-gray-400 text-sm font-medium uppercase tracking-widest">Join the Racing Line Paddock</p>
                </div>

                <div className="bg-white p-8 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#e10600] to-[#15151e]"></div>

                    <form className="space-y-5" action={formAction}>

                        {/* Username */}
                        <div className="group">
                            <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1 tracking-wider group-focus-within:text-[#e10600] transition-colors">Username</label>
                            <div className="relative">
                                <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#e10600] transition-colors" />
                                <input
                                    type="text"
                                    {...register('username')}
                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none focus:ring-2 focus:ring-[#e10600]/20 text-sm font-bold text-[#15151e] placeholder-gray-300 transition-all"
                                    placeholder="MAXV33"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="group">
                            <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1 tracking-wider group-focus-within:text-[#e10600] transition-colors">Email Address</label>
                            <div className="relative">
                                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#e10600] transition-colors" />
                                <input
                                    type="email"
                                    {...register('email')}
                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none focus:ring-2 focus:ring-[#e10600]/20 text-sm font-bold text-[#15151e] placeholder-gray-300 transition-all"
                                    placeholder="NAME@EXAMPLE.COM"
                                />
                            </div>
                        </div>

                        {/* Image URL */}
                        <div className="group">
                            <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1 tracking-wider group-focus-within:text-[#e10600] transition-colors">Avatar URL</label>
                            <div className="relative">
                                <Image size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#e10600] transition-colors" />
                                <input
                                    type="text"
                                    {...register('image')}
                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none focus:ring-2 focus:ring-[#e10600]/20 text-sm font-bold text-[#15151e] placeholder-gray-300 transition-all"
                                    placeholder="HTTPS://..."
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="group">
                            <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1 tracking-wider group-focus-within:text-[#e10600] transition-colors">Password</label>
                            <div className="relative">
                                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#e10600] transition-colors" />
                                <input
                                    type="password"
                                    {...register('password')}
                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none focus:ring-2 focus:ring-[#e10600]/20 text-sm font-bold text-[#15151e] placeholder-gray-300 transition-all"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        {/* Confirm Password */}
                        <div className="group">
                            <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1 tracking-wider group-focus-within:text-[#e10600] transition-colors">Confirm Password</label>
                            <div className="relative">
                                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#e10600] transition-colors" />
                                <input
                                    type="password"
                                    {...register('confirmPassword')}
                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none focus:ring-2 focus:ring-[#e10600]/20 text-sm font-bold text-[#15151e] placeholder-gray-300 transition-all"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#15151e] text-white py-4 mt-4 font-black uppercase italic tracking-wider hover:bg-[#e10600] transition-all duration-300 group flex items-center justify-center gap-2"
                        >
                            Create Account <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                        <p className="text-gray-500 text-xs font-semibold">
                            Already have a Super License?{' '}
                            <Link to="/login" className="text-[#e10600] font-bold uppercase hover:underline">
                                Login to Paddock
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}