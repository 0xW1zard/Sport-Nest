'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import Button from './homeComponents/Button';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    const { data: session } = authClient.useSession();
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = async () => {
        await authClient.signOut({
            fetchOptions: {
              onSuccess: () => {
                router.push("/"); 
              },
            },
          });
    }

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'All Facilities', href: '/facilities' },
        { name: 'My Bookings', href: '/my-bookings' },
        { name: 'Add Facility', href: '/add-facility' },
        { name: 'Manage My Facilities', href: '/manage-facilities' },
    ];

    return (
        <div className='border-b border-gray-300 shadow-sm'>
            <div className="container mx-auto navbar px-4">

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-1">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className={isActive ? "text-green-800 font-bold bg-green-50" : "text-gray-600"}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <Link href="/" className="text-xl text-green-800 font-extrabold">SportNest</Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2 font-medium text-gray-500">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className={`rounded-none hover:text-green-800 hover:bg-transparent ${isActive
                                            ? "text-green-800 border-b-2 border-green-800 font-semibold"
                                            : "text-gray-500 border-b-2 border-transparent"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="navbar-end">
                    {session?.user ? (
                        <div className="dropdown dropdown-end border border-dashed border-gray-400 rounded-full hover:bg-gray-200">
                            <div tabIndex={0} role="button" className="btn btn-transparent py-0.5 px-1 rounded-full flex items-center gap-2 pr-4 ">
                                <div className="avatar">
                                    <div className="w-9 rounded-full">
                                        <Image
                                            alt="User Profile"
                                            src={session?.user?.image || 'https://via.placeholder.com/150'}
                                            width={36}
                                            height={36}
                                        />
                                    </div>
                                </div>
                                <span className="text-sm font-semibold text-gray-700">
                                    {session?.user?.name?.split(' ')[0] || 'User'}
                                </span>
                            </div>

                            <ul
                                tabIndex={-1}
                                className="menu menu-sm dropdown-content bg-base-100 border border-gray-100 rounded-box z-1 mt-3 w-52 p-2 shadow-lg"
                            >
                                <li><Link href="/profile">Profile</Link></li>
                                <li><Link href="/settings" >Settings</Link></li>
                                <li onClick={handleLogout} className="text-red-600"><a>Logout</a></li>
                            </ul>
                        </div>
                    ) : (
                        <Link href="/login"><Button>Login</Button></Link>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Navbar;