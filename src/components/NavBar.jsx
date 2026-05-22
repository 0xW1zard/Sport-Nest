import Image from 'next/image';
import React from 'react';

const Navbar = () => {
    return (
        <div className='border-b border-gray-300 shadow-sm'>
            <div className="container mx-auto navbar px-4">

                {/* Left side: Logo and Mobile Menu */}
                <div className="navbar-start">
                    {/* Mobile Hamburger Dropdown */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>All Facilities</a></li>
                            <li><a>My Bookings</a></li>
                            <li><a>Add Facility</a></li>
                            <li><a>Manage My Facilities</a></li>
                        </ul>
                    </div>
                    {/* Brand Logo */}
                    <a className="btn btn-ghost text-xl text-green-800 font-extrabold">SportNest</a>
                </div>

                {/* Middle: Desktop Navigation Links */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2 font-medium text-gray-500">
                        <li><a className="text-green-800 font-semibold">Home</a></li>
                        <li><a>All Facilities</a></li>
                        <li><a>My Bookings</a></li>
                        <li><a>Add Facility</a></li>
                        <li><a>Manage My Facilities</a></li>
                    </ul>
                </div>

                {/* Right side: Avatar Dropdown */}
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <Image
                                    alt="User Profile"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                    width={40}
                                    height={40}
                                />
                            </div>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <a className="justify-between">
                                    Profile
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;