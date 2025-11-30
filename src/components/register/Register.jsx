import { Link } from "react-router";
import useForm from "../../hooks/useForm.js";

export default function Register() {
    const submitHandler = (formData) => {
        //TODO: get values
        

        //TODO: API call
    }

    const {
        register,
        formAction
    } = useForm(submitHandler, {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center py-12 px-4">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">

                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold mb-2">Create Account</h1>
                    <p className="text-gray-600">Join the F1 Blog community</p>
                </div>

                {/* Form */}
                <form className="space-y-5" action={formAction}>

                    {/* Username */}
                    <div>
                        <label htmlFor="username" className="block text-sm font-semibold text-gray-900 mb-2">
                            Username <span className="text-[#e10600]">*</span>
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#e10600] focus:outline-none transition-all"
                            placeholder="Choose a username"
                            name="username"
                        />
                        <p className="mt-1 text-sm text-gray-500">3-20 characters, letters and numbers only</p>
                        <p className="mt-1 text-sm text-red-600 hidden">Username must be 3-20 characters</p>
                    </div>

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
                            name="email"
                        />
                        <p className="mt-1 text-sm text-red-600 hidden">Please enter a valid email</p>
                    </div>

                    {/* Profile Picture */}
                    {/* <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                            Profile Picture
                        </label>
                        <div className="flex items-center gap-4">
                            <div className="w-20 h-20 rounded-full bg-gray-200 border-2 border-gray-300 overflow-hidden flex-shrink-0">
                                <img
                                    src="https://via.placeholder.com/80"
                                    alt="Preview"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <label
                                    htmlFor="profilePicture"
                                    className="inline-block bg-gray-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-all cursor-pointer"
                                >
                                    Choose File
                                </label>
                                <input
                                    type="file"
                                    id="profilePicture"
                                    name="profilePicture"
                                    accept="image/*"
                                    className="hidden"
                                />
                                <p className="mt-2 text-sm text-gray-500">JPG, PNG or GIF (max 2MB)</p>
                            </div>
                        </div>
                    </div> */}

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-semibold text-gray-900 mb-2">
                            Password <span className="text-[#e10600]">*</span>
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#e10600] focus:outline-none transition-all"
                            placeholder="Create a password"
                            name="password"
                        />
                        <p className="mt-1 text-sm text-gray-500">At least 6 characters</p>
                        <p className="mt-1 text-sm text-red-600 hidden">Password must be at least 6 characters</p>
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-900 mb-2">
                            Confirm Password <span className="text-[#e10600]">*</span>
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#e10600] focus:outline-none transition-all"
                            placeholder="Confirm your password"
                            name="confirmPassword"
                        />
                        <p className="mt-1 text-sm text-red-600 hidden">Passwords do not match</p>
                    </div>

                    {/* Terms */}
                    {/* <div>
                        <label className="flex items-start cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 mt-1 mr-3 flex-shrink-0" />
                            <span className="text-sm text-gray-700">
                                I agree to the{' '}
                                <a href="#" className="text-[#e10600] hover:text-[#c10500] font-medium">
                                    Terms & Conditions
                                </a>
                            </span>
                        </label>
                    </div> */}

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-[#e10600] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#c10500] transition-all hover:shadow-lg hover:shadow-[#e10600]/30"
                    >
                        Create Account
                    </button>

                    {/* Divider */}
                    {/* <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-gray-500 font-semibold">OR</span>
                        </div>
                    </div> */}

                    {/* Social Register */}
                    {/* <button
                        type="button"
                        className="w-full flex items-center justify-center gap-3 px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                    >
                        <span>🔍</span>
                        <span>Sign up with Google</span>
                    </button> */}

                </form>

                {/* Switch to Login */}
                <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                    <p className="text-gray-600">
                        Already have an account?{' '}
                        <Link to="/login" className="text-[#e10600] hover:text-[#c10500] font-semibold">
                            Login here
                        </Link>
                    </p>
                </div>

            </div>
        </div>
    );
}