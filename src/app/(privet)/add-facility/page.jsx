'use client';
import Footer from '@/components/Footer';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const AddFacilityPage = () => {
    const router = useRouter();
    const sportOptions = [
        'All', 'Basketball Court', 'Football Field', 'Tennis Court',
        'Swimming Pool', 'Gymnasium', 'Dance Studio', 'Climbing Wall'
    ];
    const timeSlotOptions = [
        '06:00 (6:00 AM)', '07:00 (7:00 AM)', '08:00 (8:00 AM)', '09:00 (9:00 AM)', '10:00 (10:00 AM)',
        '11:00 (11:00 AM)', '12:00 (12:00 PM)', '13:00 (1:00 PM)', '14:00 (2:00 PM)', '15:00 (3:00 PM)',
        '16:00 (4:00 PM)', '17:00 (5:00 PM)', '18:00 (6:00 PM)', '19:00 (7:00 PM)', '20:00 (8:00 PM)',
        '21:00 (9:00 PM)', '22:00 (10:00 PM)', '23:00 (11:00 PM)'
    ];

    const [selectedSlots, setSelectedSlots] = useState([]);
    const toggleSlot = (slot) => {
        setSelectedSlots((prev) =>
            prev.includes(slot)
                ? prev.filter((s) => s !== slot)
                : [...prev, slot]
        );
    };

    const { data: session } = authClient.useSession();
    const { user } = session || {};

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const facilityData = Object.fromEntries(formData.entries());
        facilityData.available_slots = selectedSlots;
        facilityData.userId = user?.id
        facilityData.userName = user?.name
        facilityData.owner_email = user?.email
        facilityData.booking_count = Math.floor(Math.random() * 100)

        const { data: tokenData } = await authClient.token();
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/allFacilities`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${tokenData?.token}`
                },
                body: JSON.stringify(facilityData)
            })
            const data = await response.json();
            toast.success('Facility added successfully!');
            router.push('/facilities');
        } catch (error) {
            toast.error('Error submitting facility.');
        }
    }



    return (
        <>
            <div className="container mx-auto px-4 pb-20">
                <div className="mt-12 mb-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">Add New Facility</h1>
                    <p className="text-lg text-gray-500">Expand your portfolio and bring elite sports venues to the community.</p>
                </div>

                <div className="max-w-3xl mx-auto bg-white rounded-md shadow-sm border border-gray-100 p-6 md:p-10 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-green-700 to-green-400"></div>

                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="col-span-1 md:col-span-2">
                            <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="name">Facility Name</label>
                            <input
                                className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-[#00652c] focus:ring-1 focus:ring-[#00652c] transition-all shadow-sm"
                                name="name" required
                                placeholder="e.g. Downtown Elite Tennis Courts"
                                type="text"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="facility_type">Sport Type</label>
                            <select
                                className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 appearance-none focus:outline-none focus:border-[#00652c] focus:ring-1 focus:ring-[#00652c] transition-all shadow-sm cursor-pointer"
                                name="facility_type" required
                                defaultValue=""
                            >
                                <option disabled value="">Select a sport...</option>
                                {sportOptions.map((sport, index) => (
                                    <option key={index} value={sport}>{sport}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="location">Location</label>
                            <input
                                className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-[#00652c] focus:ring-1 focus:ring-[#00652c] transition-all shadow-sm"
                                name="location" required
                                placeholder="Address or Area"
                                type="text"
                            />
                        </div>

                        <div className="col-span-1 md:col-span-2">
                            <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="image">Facility Image URL</label>
                            <input
                                className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-[#00652c] focus:ring-1 focus:ring-[#00652c] transition-all shadow-sm"
                                name="image" required
                                placeholder="https://example.com/your-image.jpg"
                                type="url"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-1 md:col-span-2 bg-gray-50 p-6 rounded-xl border border-gray-100 mt-2">
                            <div className="col-span-1 md:col-span-2 w-full flex flex-col md:flex-row gap-6">
                                <div className='w-full'>
                                    <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="price_per_hour">Price per Hour ($)</label>
                                    <input
                                        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-[#00652c] focus:ring-1 focus:ring-[#00652c] transition-all shadow-sm"
                                        name="price_per_hour" required
                                        placeholder="0.00"
                                        type="number"
                                        step="0.01"
                                    />
                                </div>

                                <div className='w-full'>
                                    <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="capacity">Max Capacity (People)</label>
                                    <input
                                        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-[#00652c] focus:ring-1 focus:ring-[#00652c] transition-all shadow-sm"
                                        name="capacity" required
                                        placeholder="e.g. 22"
                                        type="number"
                                    />
                                </div>
                            </div>
                            <div className='col-span-2'>
                                <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="available_slots">Available Time Slots</label>
                                <div className="flex flex-wrap gap-2">
                                    {timeSlotOptions.map((slot, index) => {
                                        const isSelected = selectedSlots.includes(slot);
                                        return (
                                            <button
                                                key={index}
                                                type="button"
                                                onClick={() => toggleSlot(slot)}
                                                className={`px-4 py-2 rounded-xl border text-sm font-medium transition-all duration-200 ${isSelected
                                                    ? 'bg-green-800 text-white border-green-500 shadow-sm scale-105'
                                                    : 'bg-white text-gray-700 border-gray-300 hover:border-green-800 hover:text-green-800'
                                                    }`}
                                            >
                                                {slot}
                                            </button>
                                        );
                                    })}
                                </div>

                            </div>
                        </div>

                        <div className="col-span-1 md:col-span-2 mt-2">
                            <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="description">Description</label>
                            <textarea
                                className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all shadow-sm resize-y"
                                name="description" required
                                placeholder="Describe the amenities, rules, and unique features of this facility..."
                                rows="4"
                            ></textarea>
                        </div>

                        <div className='col-span-1 md:col-span-2 mt-4'>
                            <button
                                className="bg-green-700 w-full text-white font-bold text-lg rounded-full px-10 py-4 hover:bg-green-800 hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
                                type="submit"
                            >
                                Submit Facility
                            </button>
                        </div>


                    </form>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default AddFacilityPage;