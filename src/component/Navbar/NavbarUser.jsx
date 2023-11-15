import React from "react";
import Logo from "../../assets/img/Logo.png";
import { Link } from "react-router-dom";

export const NavbarUser = () => {
  const handleLogout = () => {
    // Hapus informasi sesi pengguna dari localStorage atau sessionStorage
    localStorage.removeItem("userRole"); // atau sessionStorage.removeItem("userRole");

    // Redirect ke halaman login atau halaman lain jika diperlukan
    alert("logout Berhasil");
    window.location.href = "/"; // Ganti "/login" dengan rute ke halaman login Anda
  };

  return (
    <nav className="bg-white p-4 top-0 z-50 fixed w-full">
      <div className="container mx-auto flex flex-wrap justify-between items-center font-poppins">
        <a href="/" className="ml-4 md:ml-12">
          <img src={Logo} alt="" className="w-12" />
        </a>

        <ul className="mt-4 md:mt-0 md:flex space-x-4 px-auto">
          <li>
            <a
              href="#dashboard"
              className="text-black font-medium hover:text-blue-700 text-sm"
            >
              Beranda
            </a>
          </li>
          <li>
            <a
              href="#device"
              className="text-gray-400 font-medium hover:text-black text-sm"
            >
              Daftar Device
            </a>
          </li>
          <li>
            <a
              href="#visualisasi"
              className="text-gray-400 font-medium hover:text-black text-sm"
            >
              Visualisasi
            </a>
          </li>
        </ul>

        <div className="relative mt-4 md:mt-0 space-x-4 md:ml-0 mr-10 group">
          <button className="group relative focus:outline-none">
            <span className="py-2">M Rifki</span>
            <ul className="absolute hidden bg-white border border-gray-300 mt-2 py-2 rounded-md text-black group-hover:block">
              <li className="cursor-pointer px-4 py-2 hover:bg-gray-100">
              <Link to="/user_profile">Profil</Link>
              </li>
              <li className="cursor-pointer px-4 py-2 hover:bg-gray-100" onClick={handleLogout}>
                Logout
              </li>
            </ul>
          </button>
        </div>
      </div>
    </nav>
  );
};
