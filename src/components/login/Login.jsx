import { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import UserContext from '../../contexts/userContext.jsx';
import useForm from '../../hooks/useForm.js';

export default function Login() {
    const navigate = useNavigate();
    const { loginHandler } = useContext(UserContext);

    const submitHandler = async (values) => {
        const { email, password } = values;
        try {
            await loginHandler({ email, password });
            navigate('/');
        } catch (error) {
            alert(error.message)
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
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center py-12 px-4">
            <div className="max-w-md w-full">

                <div className="bg-white rounded-xl shadow-lg p-8">

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
                        <p className="text-gray-600">Login to your F1 Blog account</p>
                    </div>

                    {/* Form */}
                    <form className="space-y-6" action={formAction}>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                                Email <span className="text-[#e10600]">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#e10600] focus:outline-none transition-all"
                                placeholder="Enter your email"
                                {...register('email')}
                            />
                            <p className="mt-1 text-sm text-red-600 hidden">Please enter a valid email</p>
                        </div>

                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-900 mb-2">
                                Password <span className="text-[#e10600]">*</span>
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#e10600] focus:outline-none transition-all"
                                placeholder="Enter your password"
                                {...register('password')}
                            />
                            <p className="mt-1 text-sm text-red-600 hidden">Password is required</p>
                        </div>

                        {/* Remember & Forgot */}
                        {/* <div className="flex justify-between items-center">
                            <label className="flex items-center cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 mr-2" />
                                <span className="text-sm text-gray-700">Remember me</span>
                            </label>
                            <a href="#" className="text-sm text-[#e10600] hover:text-[#c10500] font-medium">
                                Forgot password?
                            </a>
                        </div> */}

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full bg-[#e10600] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#c10500] transition-all hover:shadow-lg hover:shadow-[#e10600]/30"
                        >
                            Login
                        </button>

                        {/* Divider */}
                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-gray-500 font-semibold">OR</span>
                            </div>
                        </div>

                        {/* Social Login */}
                        {/* <button
                            type="button"
                            className="w-full flex items-center justify-center gap-3 px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                        >
                            <span>🔍</span>
                            <span>Continue with Google</span>
                        </button> */}

                    </form>

                    {/* Switch to Register */}
                    <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                        <p className="text-gray-600">
                            Don't have an account?{' '}
                            <Link to="/register" className="text-[#e10600] hover:text-[#c10500] font-semibold">
                                Register here
                            </Link>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}