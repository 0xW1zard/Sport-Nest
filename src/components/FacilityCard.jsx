import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const FacilityCard = ({ facilities }) => {

    const { name, facility_type, location, price_per_hour, capacity, available_slots, description, owner_email, booking_count, image, _id } = facilities;
    const price = Number(price_per_hour).toFixed(2);

    return (
        <div className="w-full p-4">
            <div className="w-full h-full bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">

                <div className="relative h-40 w-full">
                    <Image
                        src={image} alt={name} width={200} height={200} loading="eager"
                        className="w-full h-full object-cover"
                    />
                    <span className="absolute top-3 right-3 bg-[#c2f3d6] text-[#0a5228] text-xs font-bold px-2.5 py-1 rounded-full">
                        {facility_type}
                    </span>
                </div>

                <div className="p-4">

                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-[#1a1f36] font-bold text-[17px]">{name}</h3>
                        <div className="flex items-center text-[#118a42] font-bold text-sm">
                            <svg className="w-3.5 h-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            4.9
                        </div>
                    </div>

                    <p className="text-gray-500 text-[13px] leading-relaxed mb-4 pr-2">
                        {description}
                    </p>

                    <hr className="border-gray-200 mb-3" />

                    <div className="flex justify-between items-center mt-1">
                        <div className="flex flex-col items-start text-gray-400 text-xs font-medium">
                            <div className='flex items-center'>
                                <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                {location}
                            </div>
                            <Link href={`/facilities/${_id}`} className=" mt-2 flex items-center justify-center gap-1 text-[#118a42] font-bold hover:underline">
                                Book Now <BsArrowRight></BsArrowRight>
                            </Link>
                        </div>
                        <div className="text-gray-600 text-xs font-medium">
                            <span className="text-[#118a42] font-bold text-lg mr-0.5">${price}</span>/hr
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FacilityCard;