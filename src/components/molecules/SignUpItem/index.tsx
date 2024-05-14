'use client';
import React, { useState, FormEvent } from 'react';
import Link from 'next/link';
import { setRegister } from '@/services/auth';
import { useRouter } from 'next/navigation';
import { RegisterTypes } from '@/services/data-types';

export default function SignUpItem(): JSX.Element {
  const router = useRouter();

  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [instansi, setInstansi] = useState<string>('instansi1');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data : RegisterTypes = {
      name,
      phoneNumber: phone,
      email,
      password,
      guidAplication: 'PROJECT-a1647cd4-7720-4613-8bcf-c837c4529c80-2024',
      role: 'warga',
      companyGuid: 'COMPANY-59463305-0abe-4c64-a4f5-533527956e43-2024',
    };

    // setRegister(data)
    const result = await setRegister(data);

    console.log(result);
    localStorage.setItem("email-verify", email);

    if (result.error) {
      alert(result.message);
    } else {
      alert('Register Success');
      router.push('/verify');
    }
  };

  return (
    <div className="flex justify-center items-center flex-grow">
      <form className="p-6 w-1/2 lg:w-3/4 md:w-3/5" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-1">Account SignUp</h2>
        <p className='text-gray-500 text-sm mb-5'>Become a member and enjoy exclusive promotions.</p>
        <div className="mb-3">
          <label htmlFor="name" className="text-gray-500 font-semibold">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
            placeholder="Full Name"
            id='name'
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="text-gray-500 font-semibold">Phone Number</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
            placeholder="628xxxxxxxx"
            id='phone'
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="text-gray-500 font-semibold">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
            placeholder="youremail@email.com"
            id='email'
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="text-gray-500 font-semibold">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
            required id='password'
          />
        </div>
        <div className="mb-3">
          <label htmlFor="instansi" className="text-gray-500 font-semibold">Instansi</label>
          <select
            value={instansi}
            onChange={(e) => setInstansi(e.target.value)}
            className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
            id='instansi'
          >
            <option value="instansi1">Instansi 1</option>
            <option value="instansi2">Instansi 2</option>
            <option value="instansi3">Instansi 3</option>
          </select>
        </div>
        
        <button type="submit" className="w-full bg-blue-400 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-600">
          Create Account
        </button>
        <p className='text-sm text-center mt-6'>Already have an account? <Link href="/sign-in" className='text-blue-500'>Sign In Here</Link> </p>
      </form>
    </div>
  );
}
