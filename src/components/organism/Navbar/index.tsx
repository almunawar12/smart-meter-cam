'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';


export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex items-center justify-between flex-wrap bg-blue-400 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Image src="/assets/images/Logo.png" width={40} height={40} alt="logo" />
            </div>
            <div className="block lg:hidden">
                <button
                    className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white"
                    type="button"
                    onClick={toggleMenu}
                >
                    <svg
                        className="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path
                            d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                        />
                    </svg>
                </button>
            </div>
            <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
                <div className="text-sm lg:flex-grow font-semibold ">
                    <Link
                        href="/"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-[#FFAA4D] mr-4"
                    >
                        Home
                    </Link>
                    <a
                        href="#responsive-header"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-[#FFAA4D] mr-4"
                    >
                        About
                    </a>
                    <a
                        href="#responsive-header"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-[#FFAA4D] mr-4"
                    >
                        Service
                    </a>
                </div>
                <div>
                    <Link
                        href="/sign-in"
                        className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0"
                    >
                        Login
                    </Link>
                    <Link
                        href="/sign-up"
                        className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 ml-2"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </nav>
    );
}
