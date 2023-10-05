import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../../assets/img/Logo.png";
import Button from "../Button";

function Navbar() {
  const location = useLocation();

  const shouldHideNavbar = location.pathname === "/login" || location.pathname === "/register";

  return (
    <nav className={`bg-white p-4 sticky top-0 ${shouldHideNavbar ? "hidden" : "block"}`}>
      <div className="container mx-auto flex flex-wrap justify-between items-center font-poppins">
        <a href="/" className="ml-4 md:ml-20">
          <img src={Logo} alt="" className="w-12" />
        </a>

        <ul className="mt-4 md:mt-0 md:flex space-x-4 px-auto">
          <li>
            <a
              href="/"
              className="text-black font-medium hover:text-blue-700 text-sm"
            >
              Beranda
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-gray-400 font-medium hover:text-black text-sm"
            >
              Tentang Kami
            </a>
          </li>
          <li>
            <a
              href="#layanan"
              className="text-gray-400 font-medium hover:text-black text-sm"
            >
              Layanan
            </a>
          </li>
          <li>
            <a
              href="#kontak"
              className="text-gray-400 font-medium hover:text-black text-sm"
            >
              Kontak
            </a>
          </li>
        </ul>

        <div className="flex mt-4 md:mt-0 space-x-4 md:ml-0 mr-14">
          <Button
            link="/login"
            label="Masuk"
            color="bg-blue-500 hover:bg-blue-600 text-white border-none"
            />
          <Button
            link="/register"
            label="Daftar"
            color="bg-white hover:bg-blue-600 hover:text-white text-blue-500 border-blue-500"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
