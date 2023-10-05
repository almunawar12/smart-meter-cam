import React from "react";
import Logo from "../../assets/img/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export const NavbarUser = () => {
  return (
    <nav className="bg-white p-4 sticky top-0">
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
              Visualisai
            </a>
          </li>
        </ul>

        <div className="flex mt-4 md:mt-0 space-x-4 md:ml-0 mr-14">
        <div className="circle-container">
            <FontAwesomeIcon icon={faUser} className="text-white" />
          </div>
          <span className="py-2">M Rifki</span>
        </div>
      </div>
    </nav>
  );
};
