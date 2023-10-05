import React from "react";
import { NavbarUser } from "../../component/Navbar/NavbarUser";
import Banner from "../../component/Main/Banner";

export const UserDashboard = () => {
  return (
    <>
      <section id="#dashboard">
        <NavbarUser />
      </section>
      <Banner />
      <section className="flex flex-col items-center mt-5 font-poppins" id="device">
        <h1 className="text-2xl text-center font-bold text-[#5189C6] mb-2">
          Daftarkan Device Anda
        </h1>
        <p className="text-gray-500">Silahkan isi form dibawah</p>
        <div className="bg-white p-8 rounded shadow-md w-96">
          <form className="w-full">
            <div className="mb-4">
              <label htmlFor="nama" className="block text-sm font-medium text-gray-600">
                Nama
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Jenis Perangkat
              </label>
              <input
                type="text"
                id="device"
                name="device"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                No Perangkat
              </label>
              <input
                type="twxt"
                id="no_device"
                name="no_device"
                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Kirim
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
