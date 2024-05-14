'use client';
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowBack } from "react-icons/io";
import SignInItem from '@/components/molecules/SIgnInItem';

export default function SignIn() {
  
  return (
    <div className="flex flex-col md:flex-row h-screen bg-blue-400">
      <div className="md:w-1/2 relative flex items-center justify-center">
        <Image src="/assets/icons/sign-in.svg" width={300} height={300} objectFit="cover" alt="Sign In Illustration" />
      </div>

      <div className="md:w-1/2 flex flex-col bg-white">
        <div className="p-6 flex items-center">
          <Link href="/" className="flex items-center">
            <IoIosArrowBack className="text-xl mr-2" />
            <p className="text-sm cursor-pointer">Back</p>
          </Link>
        </div>
        <SignInItem />
      </div>
    </div>

  );
}
