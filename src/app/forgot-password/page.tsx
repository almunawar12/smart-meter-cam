import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowBack } from "react-icons/io";


export default function ForgotPassword() {
    return (
        <div className="flex flex-col md:flex-row h-screen bg-blue-400">
            <div className="md:w-1/2 relative flex items-center justify-center">
                <Image src="/assets/icons/forgot-password.svg" width={300} height={300} objectFit="cover" alt="Sign In Illustration" />
            </div>

            <div className="md:w-1/2 flex flex-col bg-white">
                <div className="p-6 flex items-center">
                    <Link href="/" className="flex items-center">
                        <IoIosArrowBack className="text-xl mr-2" />
                        <p className="text-sm cursor-pointer">Back</p>
                    </Link>
                </div>
                <div className="flex justify-center items-center flex-grow">
                    <form className="p-6 w-1/2 lg:w-3/4 md:w-3/5">
                        <h2 className="text-2xl font-semibold mb-1">Forgot Your Password?</h2>
                        <p className='text-gray-500 text-sm mb-5'>{`Don't Worry, happens to all of us. Enter your email below to recover your password.`}</p>
                        <div className="mb-3">
                            <label htmlFor="email" className="text-gray-500 font-semibold">Email Address</label>
                            <input type="email" className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500" placeholder="youremail@email.com" />
                        </div>
                        <button type="submit" className="w-full bg-blue-400 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-600">Submit</button>
                        <p className='text-sm text-center mt-6'>Already have an account? <Link href="/sign-in" className='text-blue-500'>Sign In Here</Link> </p>
                    </form>
                </div>
            </div>
        </div>

    );
}
