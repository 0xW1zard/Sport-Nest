import Link from 'next/link';
import { SearchX } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center font-sans">
            <div className="bg-green-50 p-6 rounded-full mb-6 shadow-sm">
                <SearchX className="w-16 h-16 text-green-700" strokeWidth={1.5} />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                404 - Page Not Found
            </h1>
            
            <p className="text-lg text-gray-500 max-w-md mb-8 leading-relaxed">
                Oops! We couldn't find the facility or page you're looking for. It might have been moved, deleted, or never existed.
            </p>
            
            <Link
                href="/"
                className="bg-green-700 text-white font-bold rounded-full px-8 py-3 hover:bg-green-800 hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
            >
                Return to Dashboard
            </Link>
        </div>
    );
}