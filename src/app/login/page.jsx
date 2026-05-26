'use client';
import React from 'react';
import Link from 'next/link';
import { MdOutlineSportsScore, MdOutlineMail, MdOutlineLock, MdArrowForward } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';

const Login = () => {

    const handleLogin = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries());
        console.log('Logging in user:', userData);
        const { email, password } = userData;

        const { data, error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
            callbackURL: "/",
        });
        console.log("Sign-in response:", { data, error });

        if (error) {
            toast.error('Login failed');
        } else {
            toast.success('Login Successful! welcome');
        }

    }

    const handleGoogleLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
          });
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f8f9fc] relative overflow-hidden p-4">

            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-indigo-100/40 blur-[100px]"></div>
                <div className="absolute bottom-[10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-green-100/30 blur-[80px]"></div>
            </div>

            <div className="w-full max-w-md bg-white rounded-3xl shadow-sm p-8 md:p-10 border border-gray-100 transition-transform duration-300 hover:shadow-md">

                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-50 text-green-800 mb-4">
                        <MdOutlineSportsScore className="w-6 h-6" />
                    </div>
                    <h1 className="text-3xl font-extrabold text-green-800 tracking-tight mb-1">SportNest</h1>
                    <h2 className="text-xl font-bold text-gray-900">Welcome Back</h2>
                    <p className="text-sm text-gray-500 mt-2">Log in to book your next session.</p>
                </div>

                <form onSubmit={handleLogin} className="flex flex-col gap-4">

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700 ml-1">Email Address</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                <MdOutlineMail className="w-5 h-5" />
                            </div>
                            <input
                                type="email"
                                name="email"
                                placeholder="athlete@example.com"
                                required
                                className="w-full pl-11 pr-4 py-3 bg-white text-gray-900 border border-gray-200 rounded-xl focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800 transition-all placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.5 mt-2">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                <MdOutlineLock className="w-5 h-5" />
                            </div>
                            <input
                                type="password"
                                name="password"
                                placeholder="••••••••"
                                required
                                className="w-full pl-11 pr-4 py-3 bg-white text-gray-900 border border-gray-200 rounded-xl focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800 transition-all placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="mt-4 w-full py-3 px-6 bg-[#00652c] text-white text-sm font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-[#005323] transition-all duration-300 hover:-translate-y-0.5"
                    >
                        Login
                        <MdArrowForward className="w-5 h-5" />
                    </button>
                </form>

                <div className="relative flex py-6 items-center">
                    <div className="grow border-t border-gray-200"></div>
                    <span className="shrink-0 mx-4 text-sm text-gray-400 font-medium">OR</span>
                    <div className="grow border-t border-gray-200"></div>
                </div>

                <button
                    type="button" onClick={handleGoogleLogin}
                    className="w-full py-3 px-6 border border-gray-300 text-gray-700 font-medium text-sm rounded-full flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors duration-200"
                >
                    <FcGoogle className="w-5 h-5" />
                    Login with Google
                </button>

                <p className="text-center mt-8 text-sm text-gray-600">
                    Don't have an account?{' '}
                    <Link href="/register" className="text-[#00652c] font-bold hover:underline underline-offset-2 hover:decoration-[#00652c] transition-all">
                        Register
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default Login;