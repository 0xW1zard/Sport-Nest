"use client"; // Error components must be Client Components

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error("Application Error:", error);
    }, [error]);

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center font-sans">
            <div className="bg-red-50 p-6 rounded-full mb-6 shadow-sm">
                <AlertTriangle className="w-16 h-16 text-red-500" strokeWidth={1.5} />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Something went wrong
            </h1>
            
            <p className="text-lg text-gray-500 max-w-md mb-8 leading-relaxed">
                We apologize for the inconvenience. An unexpected error has occurred while loading this page.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button
                    onClick={() => reset()}
                    className="w-full sm:w-auto px-8 py-3 rounded-full font-bold text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 transition-colors shadow-sm"
                >
                    Try Again
                </button>
                
                <Link
                    href="/"
                    className="w-full sm:w-auto bg-green-700 text-white font-bold rounded-full px-8 py-3 hover:bg-green-800 hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
                >
                    Go Home
                </Link>
            </div>
        </div>
    );
}