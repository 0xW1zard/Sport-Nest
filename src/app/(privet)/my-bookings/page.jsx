import BookingCard from '@/components/BookingCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';


const MyBookings = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    });
    const userId = session?.user?.id;

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${userId}`);
    const bookings = await res.json();


    return (
        <div className='container mx-auto'>
            <div className='px-4 md:px-8 py-10'>
                <h1 className='text-3xl font-bold text-gray-900'>My Bookings</h1>
                <p className='text-gray-600 mt-1'>Here you can view and manage your bookings.</p>
            </div>

            <div className='px-4 md:px-8 py-5 border-t border-gray-200'>
                {
                    bookings.length > 0 ? (
                        bookings.map((booking) => (
                            <BookingCard key={booking._id} booking={booking} />
                        ))
                    ) : (
                        <p className='text-gray-600 text-center py-20'>You have no bookings yet.</p>
                    )
                }
            </div>
        </div>
    );
};

export default MyBookings;