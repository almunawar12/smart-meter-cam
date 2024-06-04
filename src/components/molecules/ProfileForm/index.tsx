'use client'
import { jwtDecode } from 'jwt-decode';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface User {
    name: string;
    email: string;
    phone_number: string;
    guid: string;
}

export default function ProfileForm() {
    const [user, setUser] = useState<User>({
        name: "",
        email: "",
        phone_number: "",
        guid: ""
    });

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const decoded = jwtDecode<User>(token);
            setUser(decoded);
            console.log(decoded);
        }
    }, []);

    return (
        <div className="w-full lg:w-2/3 p-6">
            <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
            <form className="space-y-6">
                <div className="flex flex-col lg:flex-row lg:space-x-4">
                    <div className="w-full lg:w-1/2">
                        <label htmlFor="fullName" className="block text-gray-700 font-bold mb-2">Full Name</label>
                        <input
                            type="text"
                            id="fullName"
                            value={user.name}
                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                            className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                            placeholder="Full name"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                        className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                        placeholder="Enter your email"
                    />
                </div>
                <div>
                    <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">Phone Number</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        value={user.phone_number}
                        onChange={(e) => setUser({ ...user, phone_number: e.target.value })}
                        className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                        placeholder="Your phone number..."
                    />
                </div>
                <div>
                    <label htmlFor="guid" className="block text-gray-700 font-bold mb-2">GUID</label>
                    <input
                        type="text"
                        id="guid"
                        value={user.guid}
                        onChange={(e) => setUser({ ...user, guid: e.target.value })}
                        className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                        placeholder="GUID"
                    />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                    <Link href="/admin/"
                        type="button"
                        className="bg-[#FFAA4D] hover:bg-orange-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4 sm:mb-0"
                    >
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        className="sm:ml-4 bg-[#FFAA4D] hover:bg-orange-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
}
