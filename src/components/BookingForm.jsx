'use client';
import { authClient } from '@/lib/auth-client';
import { u } from 'framer-motion/client';
import React, { useState } from 'react';
import toast from 'react-hot-toast';

const BookingForm = ({ facility }) => {

    const {
        name,
        facility_type,
        location,
        price_per_hour,
        capacity,
        description,
        image,
        available_slots
    } = facility;
    const price = Number(price_per_hour);


    const [duration, setDuration] = useState(1.5);
    const session  = authClient.useSession();

    const estimatedPayment = (duration * price).toFixed(2);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const date = formData.get('date');
        const startTime = formData.get('startTime');
        const duration = parseFloat(formData.get('duration'));


        const bookingDetails = {
            userId: session?.data?.user?.id,
            userName: session?.data?.user?.name,
            userEmail: session?.data?.user?.email,
            userImage: session?.data?.user?.image,
            facilityId: facility._id,
            date,
            startTime,
            duration,
            estimatedPayment,
            name,
            facility_type,
            location,
            price_per_hour,
            capacity,
            description,
            image
        };

        console.log("Booking Details:", bookingDetails);

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingDetails)
        })
        const result = await res.json();
        console.log("Booking Response:", result);
        toast.success("Booking successful!");
    }



    return (
        <div className="sticky top-28 w-full bg-white shadow-md rounded-3xl border border-gray-100 p-6 md:p-8 flex flex-col gap-6">

            <div className="flex flex-col pb-4 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 line-clamp-1">{name}</h2>
                <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl font-extrabold text-[#00652c]">${price}</span>
                    <span className="text-sm font-medium text-gray-500">/ hour</span>
                </div>
            </div>


            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">


                <div className="form-control w-full">
                    <div className="label pt-0"><span className="label-text font-bold text-gray-700">Select Date</span></div>
                    <input
                        type="date"
                        name="date"
                        required
                        className="input input-bordered w-full focus:outline-none focus:border-[#00652c] focus:ring-1 focus:ring-[#00652c]"
                    />
                </div>

                <div className="form-control w-full">
                    <div className="label pt-0"><span className="label-text font-bold text-gray-700">Start Time</span></div>
                    <select
                        name="startTime"
                        required
                        defaultValue=""
                        className="select select-bordered w-full focus:outline-none focus:border-[#00652c] focus:ring-1 focus:ring-[#00652c]"
                    >
                        <option value="" disabled>Select a time...</option>
                        {
                            available_slots.map((slot, index) => (
                                <option key={index} value={slot}>{slot}</option>
                            ))
                        }
                        
                    </select>
                </div>

                <div className="form-control w-full">
                    <div className="label pt-0"><span className="label-text font-bold text-gray-700">Duration (Hours)</span></div>
                    <select onChange={(e) => setDuration(parseFloat(e.target.value))}
                        name="duration"
                        required
                        defaultValue="1.5"
                        className="select select-bordered w-full focus:outline-none focus:border-[#00652c] focus:ring-1 focus:ring-[#00652c]"
                    >
                        <option value="1">1 Hour</option>
                        <option value="1.5">1.5 Hours</option>
                        <option value="2">2 Hours</option>
                        <option value="3">3 Hours</option>
                    </select>
                </div>

                <div className="flex flex-col gap-4 mt-4 pt-6 border-t border-gray-100 w-full">
                    <div className="flex justify-between items-center w-full">
                        <span className="text-gray-500 font-medium">Est. Payment</span>
                        <span className="text-2xl font-extrabold text-gray-900">
                            ${estimatedPayment}
                        </span>
                    </div>

                    <button
                        type="submit"
                        className="btn w-full h-14 bg-[#00652c] hover:bg-[#005323] text-white font-bold text-lg rounded-full border-none shadow-[0_4px_14px_0_rgba(0,101,44,0.39)]"
                    >
                        Book Now
                    </button>

                    <p className="text-center text-xs text-gray-400 font-medium flex items-center justify-center gap-1">
                        <span className="text-green-600">🔒</span> Secure payment. Finalized at checkout.
                    </p>
                </div>
            </form>

        </div>
    );
};

export default BookingForm;