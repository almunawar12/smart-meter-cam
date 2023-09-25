import React, { useState } from "react";
import Logo from "../../assets/img/Logo.png";
import Button from "../Button";

function Navbar() {
  const [hide, setHide] = useState("block");
  const handleClick = () => setHide("hidden");
  return (
    <nav className={"bg-white p-4 sticky top-0 " + hide}>
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <a href="/" className="ml-4 md:ml-20">
          <img src={Logo} alt="" className="w-12" />
        </a>

        <ul className="mt-4 md:mt-0 md:flex space-x-4">
          <li>
            <a
              href="/"
              className="text-black font-medium hover:text-blue-700 font-poppins text-sm"
            >
              Beranda
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-gray-400 font-medium hover:text-black font-poppins text-sm"
            >
              Tentang Kami
            </a>
          </li>
          <li>
            <a
              href="#layanan"
              className="text-gray-400 font-medium hover:text-black font-poppins text-sm"
            >
              Layanan
            </a>
          </li>
          <li>
            <a
              href="#kontak"
              className="text-gray-400 font-medium hover:text-black font-poppins text-sm"
            >
              Kontak
            </a>
          </li>
        </ul>

        <div className="flex mt-4 md:mt-0 space-x-4 ml-4 md:ml-0">
          <Button
            link="/login"
            label="Masuk"
            color="bg-blue-500 hover:bg-blue-600 text-white border-none"
            handleClick={handleClick}
            />
          <Button
            link="/register"
            label="Daftar"
            color="bg-white hover:bg-blue-600 hover:text-white text-blue-500 border-blue-500"
            handleClick={handleClick}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
