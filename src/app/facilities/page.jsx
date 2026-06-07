'use client';
import FacilityCard from '@/components/FacilityCard';
import React, { useState, useEffect } from 'react';
import { MdSearch } from 'react-icons/md';

const FacilitiesMainBody = () => {
    const [facilities, setFacilities] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    
    const filters = ['All', 'Basketball Court', 'Football Field', 'Tennis Court', 'Swimming Pool', 'Gymnasium', 'Dance Studio', 'Climbing Wall'];

    const filteredFacilities = facilities.filter((facility) => {

        const matchesCategory = activeFilter === 'All' || facility.facility_type === activeFilter;
        const matchesSearch = facility.name.toLowerCase().includes(searchQuery.toLowerCase());
        
        return matchesCategory && matchesSearch;
    });
    
    useEffect(() => {
        const fetchFacilities = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/allFacilities`);
                const data = await response.json();
                setFacilities(data);
            } catch (error) {
                console.error("Error fetching facilities:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchFacilities();
    }, []);

    return (
        <main className="grow pt-10 pb-20 min-h-screen">
            
            <section className="px-4 flex flex-col gap-8 items-center w-full container mx-auto">
                
                <div className="w-full max-w-3xl relative">
                    <MdSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
                    <input onChange={(e) => setSearchQuery(e.target.value)}
                        type="text" 
                        placeholder="Search facilities by name..." 
                        className="w-full pl-14 pr-4 py-4 rounded-full border border-gray-300 bg-white focus:outline-none focus:border-green-800 focus:ring-1 focus:ring-green-800 transition-all text-gray-700 shadow-sm"
                    />
                </div>

                <div className="flex items-center justify-start md:justify-center gap-3 overflow-x-auto w-full pb-2 no-scrollbar">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                                activeFilter === filter
                                    ? 'bg-[#eaf4e8] text-green-800 border border-green-800' 
                                    : 'bg-[#eef0ff] text-gray-600 border border-transparent hover:bg-[#e2e6ff]'
                            }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </section>

            <section className="px-4 container mx-auto mt-10">
                {isLoading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-800"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredFacilities.map((facility) => (
                            <FacilityCard key={facility._id} facilities={facility} />
                        ))}
                    </div>
                )}
            </section>

        </main>
    );
};

export default FacilitiesMainBody;