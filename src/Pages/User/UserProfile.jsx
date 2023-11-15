import React from 'react';
import Logo from "../../assets/img/Logo.png"

export const UserProfile = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow-lg">
        <div className="flex flex-col items-center justify-center mb-6">
          <img
            src={Logo}
            alt="Foto Profil"
            className="w-20 h-20 rounded-full object-cover mr-4"
          />
          <div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Nama</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Masukkan nama Anda"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Masukkan email Anda"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Password</label>
          <input
            type="email"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-600">Nomor Telepon</label>
          <input
            type="tel"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Masukkan nomor telepon Anda"
          />
        </div>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
            Simpan Perubahan
          </button>
          <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none focus:ring focus:border-gray-300">
            Batal
          </button>
        </div>
      </div>
    </div>
  );
};
