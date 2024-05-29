import Link from 'next/link'
import React from 'react'

export default function ProfileForm() {
    return (
        <div className="w-full lg:w-2/3 p-6">
            <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
            <form className="space-y-6">
                <div className="flex flex-col lg:flex-row lg:space-x-4">
                    <div className="w-full lg:w-1/2">
                        <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">Full Name</label>
                        <input
                            type="text"
                            id="firstName"
                            className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                            placeholder="First name"
                        />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">Last name</label>
                        <input
                            type="text"
                            id="lastName"
                            className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                            placeholder="Last name"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
                    <input
                        type="text"
                        id="username"
                        className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                        placeholder="Enter your username"
                    />
                </div>
                <div>
                    <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">Phone Number</label>
                    <input
                        type="text"
                        id="phoneNumber"
                        className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                        placeholder="Your phone number..."
                    />
                </div>
                <div>
                    <label htmlFor="bio" className="block text-gray-700 font-bold mb-2">Address</label>
                    <textarea
                        id="bio"
                        className="w-full border border-gray-300 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                        placeholder="Your title, profession or small biography"
                        rows={3}
                    ></textarea>
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
    )
}
