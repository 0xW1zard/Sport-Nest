import React from 'react';
import Image from 'next/image';
import {
    MdLocationOn,
    MdStar,
    MdGroups,
    MdGrass,
    MdLightbulb,
    MdShower,
} from 'react-icons/md';
import BookingForm from '@/components/BookingForm';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Footer from '@/components/Footer';

const FacilityDetailsPage = async ({ params }) => {
    const { id } = await params;

    const { token } = await auth.api.getToken({
        headers: await headers()
    });

    const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/allFacilities/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const facility = await response.json();

    const {
        name,
        facility_type,
        location,
        price_per_hour,
        capacity,
        description,
        image
    } = facility;

    return (
        <>
            <main className="w-full px-4 md:px-8 py-10 container mx-auto min-h-screen">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">

                    <div className="lg:col-span-8 flex flex-col gap-10">

                        <div className="w-full aspect-video rounded-3xl overflow-hidden relative shadow-sm">
                            <Image
                                src={image || "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1200&auto=format&fit=crop"}
                                alt={name}
                                loading="eager" fill
                                sizes="(max-width: 768px) 100vw, 800px"
                                className="object-cover"
                            />
                            <div className="absolute top-4 right-4 flex gap-2">
                                <span className="bg-yellow-300 text-green-600 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                                    {facility_type}
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                                {name}
                            </h1>
                            <div className="flex flex-wrap items-center gap-2 text-gray-500 text-sm font-medium">
                                <div className="flex items-center">
                                    <MdLocationOn className="w-5 h-5 mr-1 text-gray-400" />
                                    {location}
                                </div>
                                <span className="text-gray-300 mx-1">•</span>
                                <div className="flex items-center text-green-600">
                                    <MdStar className="w-5 h-5 mr-1" />
                                    <span className="font-bold">4.9</span>
                                    <span className="text-gray-500 ml-1 font-normal">(128 reviews)</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-white rounded-2xl p-4 flex flex-col gap-2 items-start">
                                <div className="bg-white p-2 rounded-full text-green-600 shadow-sm"><MdGroups size={20} /></div>
                                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Capacity</span>
                                <span className="text-base font-bold text-gray-900">{capacity || 22} Players</span>
                            </div>
                            <div className="bg-white rounded-2xl p-4 flex flex-col gap-2 items-start">
                                <div className="bg-white p-2 rounded-full text-green-600 shadow-sm"><MdGrass size={20} /></div>
                                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Surface</span>
                                <span className="text-base font-bold text-gray-900">Pro Turf 3G</span>
                            </div>
                            <div className="bg-white rounded-2xl p-4 flex flex-col gap-2 items-start">
                                <div className="bg-white p-2 rounded-full text-green-600 shadow-sm"><MdLightbulb size={20} /></div>
                                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Lighting</span>
                                <span className="text-base font-bold text-gray-900">LED 500 Lux</span>
                            </div>
                            <div className="bg-white rounded-2xl p-4 flex flex-col gap-2 items-start">
                                <div className="bg-white p-2 rounded-full text-green-600 shadow-sm"><MdShower size={20} /></div>
                                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Amenities</span>
                                <span className="text-base font-bold text-gray-900">Lockers, Showers</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 border-t border-gray-200 pt-8">
                            <h3 className="text-xl font-bold text-gray-900">About this facility</h3>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base whitespace-pre-line">
                                {description}
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 border-t border-gray-200 pt-8">
                            <h3 className="text-xl font-bold text-gray-900">Location</h3>
                            <div className="w-full h-62.5 bg-gray-200 rounded-3xl overflow-hidden relative shadow-inner">
                                <Image
                                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop"
                                    alt="Map" fill
                                    sizes="(max-width: 768px) 100vw, 800px"
                                    className="object-cover opacity-60 grayscale"
                                />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                                    <MdLocationOn className="text-green-600 text-5xl drop-shadow-lg" />
                                    <div className="bg-white text-gray-900 text-xs px-4 py-1.5 rounded-full shadow-md mt-1 font-bold">
                                        {name}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="lg:col-span-4">
                        <BookingForm facility={facility} />
                    </div>

                </div>
            </main>
            <Footer></Footer>
        </>
    );
};

export default FacilityDetailsPage;