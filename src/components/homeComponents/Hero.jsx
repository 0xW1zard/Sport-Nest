import React from 'react';

const Hero = () => {
    return (
        <div className="min-h-screen px-4 py-6 md:px-8 max-w-7xl mx-auto">
            <div
                className="relative rounded-4xl overflow-hidden bg-gray-900 min-h-125 h-[calc(100vh-110px)] flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
            >
                <div className="absolute inset-0 bg-black/60"></div>

                <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 w-full">

                    <div className="mb-6 inline-block border border-[#84D814] text-[#84D814] rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase bg-black/20 backdrop-blur-sm">
                        Elite Booking Experience
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 max-w-3xl">
                        Your Game, Your Court, <br className="hidden sm:block" />
                        <span className="text-[#84D814]">Your Time</span>
                    </h1>

                    <p className="text-gray-300 text-base sm:text-lg max-w-2xl mb-10 leading-relaxed font-medium">
                        Book premium sports facilities in seconds. From rooftop tennis
                        courts to professional-grade turfs, secure your spot with zero
                        friction.
                    </p>

                    <button className="bg-green-800 hover:bg-green-900 text-white font-medium py-3 px-8 rounded-full flex items-center gap-2 transition-colors">
                        Explore Facilities
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;