import ProfileForm from '@/components/molecules/ProfileForm'
import ProfileImage from '@/components/molecules/ProfileImage'
import React from 'react'

export default function Profile() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-4xl p-6 flex flex-col lg:flex-row">
                <ProfileImage />
                <ProfileForm />
            </div>
        </div>

    )
}
