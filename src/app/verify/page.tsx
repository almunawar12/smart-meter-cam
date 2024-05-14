'use client';
import React, { FormEvent, useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from 'next/navigation';
import { ActivationTypes } from '@/services/data-types';
import { setVerify } from '@/services/auth';

export default function Verify() {
    const router = useRouter();

    const [otp, setOtp] = useState<string>('');
    const [emailVerify, setEmailVerify] = useState<string>('');

    useEffect(() => {
        const getLocalEmail = localStorage.getItem('email-verify');
        if (getLocalEmail) {
            setEmailVerify(getLocalEmail)
            console.log(getLocalEmail)
        } else {
            router.push('/sign-up');
        }
    }, [router])

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data: ActivationTypes = {
            email: emailVerify,
            guidAplication: 'PROJECT-a1647cd4-7720-4613-8bcf-c837c4529c80-2024',
            otp,
        };

        const result = await setVerify(data);

        console.log(result);

        if (result.error) {
            alert(result.message);
        } else {
            localStorage.removeItem("email-verify");
            alert('Verify Success');
            router.push('/sign-in');
        }
    };

    return (
        <div className="flex flex-col md:flex-row h-screen bg-blue-400">
            <div className="md:w-1/2 relative flex items-center justify-center">
                <Image src="/assets/icons/verify.svg" width={300} height={300} objectFit="cover" alt="Sign In Illustration" />
            </div>

            <div className="md:w-1/2 flex flex-col bg-white">
                <div className="p-6 flex items-center">
                    <Link href="/" className="flex items-center">
                        <IoIosArrowBack className="text-xl mr-2" />
                        <p className="text-sm cursor-pointer">Back</p>
                    </Link>
                </div>
                <div className="flex justify-center items-center flex-grow">
                    <form className="p-6 w-1/2 lg:w-3/4 md:w-3/5" onSubmit={handleSubmit}>
                        <h2 className="text-2xl font-semibold mb-1">Verify Code</h2>
                        <p className='text-gray-500 text-sm mb-5'>An authentication code has been send to your email.</p>
                        <div className="mb-3">
                            <label htmlFor="code" className="text-gray-500 font-semibold">Enter Code</label>
                            <input type="text" id='code' className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500" value={otp} onChange={(e) => setOtp(e.target.value)} />
                        </div>
                        <p className='text-sm mb-3'>{`DIdn't Receive a code? `} <span className='text-sm text-blue-400'>Resend</span> </p>
                        <button type="submit" className="w-full bg-blue-400 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-600">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
