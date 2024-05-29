import Image from 'next/image'
import React from 'react'

export default function ImageProfile() {
    return (
        <div className="w-full lg:w-1/3 flex flex-col items-center p-4 border-r border-gray-200">
            <Image src="/assets/icons/profile.png" alt="Profile Image" className="w-32 h-32 rounded-full object-cover mb-4" width={40} height={40} />
            <label className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded cursor-pointer">
                <input type="file" className="hidden" />
                Upload Photo
            </label>
            <p className="text-gray-600 text-sm mt-2 text-center">Image size should be under 1MB and image ratio needs to be 1:1</p>
        </div>
    )
}
