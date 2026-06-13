import Footer from '@/components/Footer';
import MiniFacilityCard from '@/components/MiniFacilitesCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';
import { TiPlus } from 'react-icons/ti';

const manageFacilitiesPage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    });
    const userId = session?.user?.id;

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/manage-facilities/${userId}`);
    const myFacilities = await res.json();

    return (
        <>
            <div className='container mx-auto px-4 pb-20 min-h-screen'>
                <div className='flex items-center justify-between'>
                    <div className="mt-12 mb-10">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">Manage Facilities</h1>
                        <p className="text-md text-gray-500">Update or remove existing facilities from your portfolio.</p>
                    </div>
                    <div className='hidden md:flex'>
                        <Link href="/add-facility" className="btn text-white bg-green-600 hover:bg-green-800">
                            <TiPlus />Add Facility
                        </Link>
                    </div>
                </div>

                {myFacilities.length === 0 ? (
                    <div className='flex flex-col items-center justify-center mt-20'>
                        <h2 className='text-xl font-semibold text-gray-700 mb-4'>You have no facilities listed.</h2>
                        <p className='text-gray-500 mb-6'>Start by adding a new facility to your portfolio.</p>
                        <Link href="/add-facility" className="btn text-white bg-green-600 hover:bg-green-800">
                            <TiPlus />Add Facility
                        </Link>
                    </div>
                ) : (
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                        {myFacilities.map((facility) => (
                            <MiniFacilityCard key={facility._id} facility={facility} />
                        ))}
                    </div>
                )}

            </div>

            <Footer></Footer>
        </>
    );
};

export default manageFacilitiesPage;