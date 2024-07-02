'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Cookies from "js-cookie";
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';


export default function Navbar() {
    const router = useRouter();

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        Cookies.remove("token");
        toast.success('Logout Success');
        router.push("/sign-in");
    };

    return (
        <nav className="flex items-center justify-between flex-wrap bg-blue-400 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Image src="/assets/images/Logo.png" width={40} height={40} alt="logo" />
            </div>
            <div className="block lg:hidden">
                <button
                    className="flex items-center px-3 py-2 border rounded-md text-blue-200 border-blue-400 hover:text-white hover:border-white"
                    type="button"
                    onClick={toggleMenu}
                >
                    <svg
                        className="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className="text-sm lg:flex-grow font-semibold ">
                    <Link href="/admin" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-[#FFAA4D] mr-4">
                        Dashboard
                    </Link>
                    <Link href="/admin/devices" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-[#FFAA4D] mr-4">
                        Devices
                    </Link>
                </div>
                <Link href="/admin/profile" className="lg:hidden">
                    <p className='text-white hover:text-[#FFAA4D] mt-2'>Profile</p>
                </Link>
                <div onClick={handleLogout} className="lg:hidden">
                    <p className='cursor-pointer text-white hover:text-[#FFAA4D] mt-2'>Logout</p>
                </div>
                <div className="relative lg:block md:hidden">
                    <Image
                        src="/assets/icons/profile.png"
                        width={40}
                        height={40}
                        alt="profile"
                        className="rounded-full cursor-pointer"
                        onClick={toggleDropdown}
                    />
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
                            <Link href="/admin/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                                Profile
                            </Link>
                            <p className="block px-4 py-2 text-gray-800 cursor-pointer hover:bg-gray-200" onClick={handleLogout}>
                                Logout
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <ToastContainer />
        </nav>
    );
}
