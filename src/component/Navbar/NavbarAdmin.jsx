import React from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import Logo from "../../assets/img/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useEffect } from "react";

export function NavbarAdmin() {
  const [openNav, setOpenNav] = React.useState(false);
  const router = useNavigate();

  const [user, setUser] = useState({
    name: "",
  });

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload = jwtDecode(jwtToken);
      const userFromPayload = payload;
      setUser(userFromPayload);
    }
  }, []);

  const handleLogout = () => {
    // localStorage.removeItem("userRole");
    Cookies.remove("token");
    toast.error("Logout Berhasil", {
      position: toast.POSITION.TOP_RIGHT,
    });
    router("/");
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <Link to="/admin/dashboard" className="flex items-center">
          Beranda
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <Link to="/admin/daftar-device" className="flex items-center">
          Daftar Device
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <Link to="/admin/daftar-user" className="flex items-center">
          Daftar User
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Link to="/" className="">
          <img src={Logo} alt="" className="w-12" />
        </Link>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-1">
          <button className="hidden lg:inline-block group relative focus:outline-none">
            <span className="py-2 text-sm"> {user.name} </span>
            <ul className="fixed hidden bg-white border border-gray-300 mt-2 py-2 rounded-md text-black group-hover:block z-50">
              <li className="cursor-pointer px-4 hover:bg-gray-100">
                <Link to="/admin/profile">Profile</Link>
              </li>
              <li
                className="cursor-pointer px-4 hover:bg-gray-100"
                onClick={handleLogout}
              >
                Logout
              </li>
            </ul>
          </button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          <hr className="border-t-2 w-1/3 border-gray-500 my-1"></hr>
          <span className="py-2 text-black p-1 text-sm font-medium">
            {" "}
            {user.name}{" "}
          </span>
          <Link
            to="/admin/profile"
            className="text-black text-sm flex items-center gap-x-2 p-1 font-medium"
          >
            Profile
          </Link>
          <button
            onClick={handleLogout}
            className="text-black text-sm flex items-center gap-x-2 p-1 font-medium"
          >
            Logout
          </button>
        </div>
      </Collapse>
    </Navbar>
  );
}
