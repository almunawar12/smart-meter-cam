import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/Logo.png";
import Button from "../Button";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-white p-4 top-0 z-50 fixed w-full">
      <div className="container mx-auto flex flex-wrap justify-between items-center font-poppins">
        <Link to="/" className="ml-4 md:ml-20">
          <img src={Logo} alt="" className="w-12" />
        </Link>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-4 md:ml-4 w-full md:w-auto mt-4 md:mt-0`}
        >
          <li>
            <Link
              to="/"
              className="text-black font-medium hover:text-blue-700 text-sm"
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link
              to="#about"
              className="text-gray-400 font-medium hover:text-black text-sm"
            >
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link
              to="#layanan"
              className="text-gray-400 font-medium hover:text-black text-sm"
            >
              Layanan
            </Link>
          </li>
          <li>
            <Link
              to="#kontak"
              className="text-gray-400 font-medium hover:text-black text-sm"
            >
              Kontak
            </Link>
          </li>
        </ul>

        <div className="flex mt-4 md:mt-0 space-x-4 md:ml-0">
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
