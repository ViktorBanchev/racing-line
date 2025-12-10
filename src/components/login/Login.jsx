import { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import UserContext from '../../contexts/userContext.jsx';
import useForm from '../../hooks/useForm.js';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { toast } from 'react-toastify';

export default function Login() {
    const navigate = useNavigate();
    const { loginHandler } = useContext(UserContext);

    const submitHandler = async (values) => {
        const { email, password } = values;

        if (!email || !password) {
            return toast.error('Email and Password are required');
        }

        try {
            await loginHandler({ email, password });
            toast.success('Login successful!', { autoClose: 2000 });
            navigate('/');
        } catch (error) {
            toast.error(error.message);
        }
    }

    const {
        register,
        formAction
    } = useForm(submitHandler, {
        email: '',
        password: '',
    })

    return (
        <div className="min-h-screen bg-[#15151e] flex items-center justify-center py-12 px-4 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#e10600] opacity-10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-0 right-1/4 w-4 h-full bg-white/5 skew-x-[-12deg] transform translate-x-1/2"></div>
            </div>

            <div className="max-w-md w-full relative z-10">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-black text-white italic uppercase tracking-tighter mb-2">
                        Welcome <span className="text-[#e10600]">Back</span>
                    </h1>
                    <p className="text-gray-400 text-sm font-medium uppercase tracking-widest">Login to access your garage</p>
                </div>

                <div className="bg-white p-8 shadow-2xl relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#15151e] to-[#e10600]"></div>

                    <form className="space-y-6" action={formAction}>
                        <div className="group">
                            <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1 tracking-wider group-focus-within:text-[#e10600] transition-colors">Email Address</label>
                            <div className="relative">
                                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#e10600] transition-colors" />
                                <input
                                    type="email"
                                    id="email"
                                    {...register('email')}
                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none focus:ring-2 focus:ring-[#e10600]/20 text-sm font-bold text-[#15151e] placeholder-gray-300 transition-all"
                                    placeholder="NAME@EXAMPLE.COM"
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label className="block text-[10px] font-bold uppercase text-gray-400 mb-1 tracking-wider group-focus-within:text-[#e10600] transition-colors">Password</label>
                            <div className="relative">
                                <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#e10600] transition-colors" />
                                <input
                                    type="password"
                                    id="password"
                                    {...register('password')}
                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none focus:ring-2 focus:ring-[#e10600]/20 text-sm font-bold text-[#15151e] placeholder-gray-300 transition-all"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#e10600] text-white py-4 mt-4 font-black uppercase italic tracking-wider hover:bg-[#c10500] transition-all duration-300 group flex items-center justify-center gap-2 shadow-lg shadow-red-500/20"
                        >
                            Enter Paddock <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                        <p className="text-gray-500 text-xs font-semibold">
                            New to Racing Line?{' '}
                            <Link to="/register" className="text-[#15151e] font-bold uppercase hover:text-[#e10600] transition-colors">
                                Register Here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}