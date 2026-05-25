'use client';
import React from 'react';
import Link from 'next/link';
import {
    MdOutlinePerson,
    MdOutlineMail,
    MdOutlineLock,
    MdOutlineImage,
    MdArrowForward
} from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';

const Register = () => {


    const handleRegister = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries());
        console.log('Registering user:', userData);
        const { fullName, email, password, photoUrl } = userData;

        const { data, error } = await authClient.signUp.email({
            name: fullName, // required
            email: email, // required
            password: password, // required
            image: photoUrl || undefined, // optional
            callbackURL: "/",
        });
        console.log("Sign-up response:", { data, error });

        if (error) {
            if(error.status === 422) {
               return toast.error('User Already Exists')
            }
            toast.error('SignUp failed');
        } else {
            toast.success('SignUp Successful! welcome');
        }

    }



    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#f8f9fc] relative overflow-hidden p-4">


            <main className="relative z-10 w-full max-w-md bg-white rounded-3xl shadow-sm p-8 md:p-10 border border-gray-100">

                <div className="text-center mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Join the Community</h2>
                    <p className="text-sm text-gray-500">Create an account to discover and book elite facilities.</p>
                </div>

                <form onSubmit={handleRegister} className="flex flex-col gap-4">

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="fullName" className="text-sm font-medium text-gray-700 ml-1">Full Name</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                <MdOutlinePerson className="w-5 h-5" />
                            </div>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Enter your full name"
                                required
                                className="w-full pl-11 pr-4 py-3 bg-white text-gray-900 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00652c] focus:ring-1 focus:ring-[#00652c] transition-all placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700 ml-1">Email Address</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                <MdOutlineMail className="w-5 h-5" />
                            </div>
                            <input
                                type="email"
                                name="email"
                                placeholder="name@example.com"
                                required
                                className="w-full pl-11 pr-4 py-3 bg-white text-gray-900 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00652c] focus:ring-1 focus:ring-[#00652c] transition-all placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="password" className="text-sm font-medium text-gray-700 ml-1">Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                <MdOutlineLock className="w-5 h-5" />
                            </div>
                            <input
                                type="password"
                                name="password"
                                placeholder="Create a strong password"
                                required
                                className="w-full pl-11 pr-4 py-3 bg-white text-gray-900 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00652c] focus:ring-1 focus:ring-[#00652c] transition-all placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <div className="flex justify-between items-center ml-1 pr-1">
                            <label htmlFor="photoUrl" className="text-sm font-medium text-gray-700">Profile Photo URL</label>
                            <span className="text-xs text-gray-400">Optional</span>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                <MdOutlineImage className="w-5 h-5" />
                            </div>
                            <input
                                type="url"
                                name="photoUrl"
                                placeholder="https://..."
                                className="w-full pl-11 pr-4 py-3 bg-white text-gray-900 border border-gray-200 rounded-xl focus:outline-none focus:border-[#00652c] focus:ring-1 focus:ring-[#00652c] transition-all placeholder:text-gray-400"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="mt-4 w-full py-3 px-6 bg-[#00652c] text-white text-sm font-semibold rounded-full flex items-center justify-center gap-2 hover:bg-[#005323] transition-all duration-300 hover:shadow-[0_0_12px_4px_rgba(178,247,70,0.2)] hover:-translate-y-0.5"
                    >
                        Create Account
                        <MdArrowForward className="w-5 h-5" />
                    </button>
                </form>

                <div className="relative flex py-6 items-center">
                    <div className="grow border-t border-gray-200"></div>
                    <span className="shrink-0 mx-4 text-xs text-gray-400 font-medium">OR</span>
                    <div className="grow border-t border-gray-200"></div>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 px-6 border border-gray-300 text-gray-700 font-medium text-sm rounded-full flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors duration-200"
                >
                    <FcGoogle className="w-5 h-5" />
                    Sign up with Google
                </button>

                <p className="text-center mt-8 text-sm text-gray-600">
                    Already have an account?
                    <Link href="/login" className="text-[#00652c] ml-1 font-bold hover:underline underline-offset-2 hover:decoration-[#00652c] transition-all">
                        Login
                    </Link>
                </p>

            </main>
        </div>
    );
};

export default Register;