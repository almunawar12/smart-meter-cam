'use client';
import React, { useState, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LoginTypes } from '@/services/data-types';
import { setLogin } from '@/services/auth';
import Cookies from "js-cookie";
import { jwtDecode } from 'jwt-decode';

export default function SignInItem(): JSX.Element {
  const router = useRouter();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: LoginTypes = {
      email,
      password,
      guidAplication: 'PROJECT-a1647cd4-7720-4613-8bcf-c837c4529c80-2024',
    };

    const result = await setLogin(data);

    // console.log(result);

    if (result.error) {
      alert(result.message);
    } else {
      const token = result.data.userToken;
      const userToken = result.data.userToken;
      const appToken = result.data.appToken;

      // console.log(userToken);
      // console.log(appToken);

      localStorage.setItem('appToken', appToken);
      localStorage.setItem('userToken', userToken);
      
      // const payload: any = jwtDecode(token);
      // const tokenBase64 = btoa(token);
      // Cookies.set("token", tokenBase64, { expires: 2 });
      localStorage.setItem('token', token);
      alert('Login Success');
      router.push('/admin');
      // if (payload.role === 'admin') {
      //   router.push('/admin');
      // } else {
      //   router.push('/user');
      // }
    }
  };

  return (
    <div className="flex justify-center items-center flex-grow">
      <form className="p-6 w-3/4 md:w-3/5" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-1">Account SignIn</h2>
        <p className='text-gray-500 text-sm mb-5'>If you are already a member you can login with your email address and password.</p>
        <div className="mb-3">
          <label htmlFor="email" className="text-gray-500 font-semibold">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
            placeholder="youremail@email.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="text-gray-500 font-semibold">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className='text-sm text-blue-400 text-left hover:text-blue-500 mb-2'>
          <Link href="/forgot-password">Forgot Password?</Link>
        </div>
        <button type="submit" className="w-full bg-blue-400 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-600">
          Login
        </button>
        <p className='text-sm text-center mt-6'>{`Don't have an account? `}<Link href="/sign-up" className='text-blue-500'>SignUp Here</Link> </p>
      </form>
    </div>
  );
}
