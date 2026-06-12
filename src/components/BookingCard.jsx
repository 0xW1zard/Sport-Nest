import React from 'react';
import { FaRegCalendar, FaRegClock } from 'react-icons/fa';
import { HiOutlineDotsCircleHorizontal } from 'react-icons/hi';
import { IoLocationSharp } from 'react-icons/io5';
import DeleteButton from '@/components/DeleteButton';
import Image from 'next/image';

const BookingCard = ({booking}) => {
    const { _id, name, image, estimatedPayment, location, date, startTime } = booking;
    return (
        <div>
            <div className='max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200 rounded-2xl mt-5 bg-white gap-4 md:gap-6'>

                <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-5 w-full md:w-auto flex-1'>

                    <div className='w-full sm:w-40 md:w-48 h-48 sm:h-36 relative rounded-xl overflow-hidden shrink-0 bg-gray-100'>
                        <Image
                            src={image}
                            alt={name}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 160px, 192px"
                            priority
                        />
                    </div>

                    <div className='flex flex-col gap-2 w-full'>
                        <div className='flex flex-wrap items-center gap-3'>
                            <h2 className='text-lg md:text-xl font-bold text-gray-900'>
                                {name}
                            </h2>
                            <span className='flex items-center gap-1.5 bg-green-100 text-green-700 px-2.5 py-1 text-xs font-semibold rounded-full w-fit'>
                                <HiOutlineDotsCircleHorizontal className="text-sm" />
                                Pending
                            </span>
                        </div>

                        <div className='flex flex-wrap items-center gap-x-4 gap-y-2 mt-1 text-sm text-green-700'>
                            <p className='flex items-center gap-1.5'>
                                <IoLocationSharp /> {location}
                            </p>
                            <p className='flex items-center gap-1.5'>
                                <FaRegCalendar /> {date}
                            </p>
                            <p className='flex items-center gap-1.5'>
                                <FaRegClock /> {startTime}
                            </p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-row gap-4 items-center justify-between md:items-end w-full md:w-auto pt-4 md:pt-0 border-t md:border-none border-gray-100 shrink-0'>
                    <p className='text-xl md:text-2xl font-bold text-gray-900'>
                        ${estimatedPayment}
                    </p>
                    <div className="mt-0 md:mt-2 border border-red-600 rounded-full">
                        <DeleteButton name={name} id={_id} url="my-bookings" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BookingCard;