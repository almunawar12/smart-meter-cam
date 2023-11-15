import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import Logo from "../../assets/img/Logo.png";
import { Link } from "react-router-dom";

export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);

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
        <Link to="#" className="flex items-center">
          Beranda
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <Link to="#" className="flex items-center">
          Tentang Kami
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <Link to="#" className="flex items-center">
          Layanan
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <Link to="#" className="flex items-center">
          Kontak
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
          <Link to="/login">
            <Button
              size="sm"
              className="hidden lg:inline-block bg-white hover:bg-blue-400 text-blue-400 hover:text-white"
            >
              <span>Sign In</span>
            </Button>
          </Link>
          <Link to="/register">
            <Button
              size="sm"
              className="hidden lg:inline-block bg-blue-400 hover:bg-white hover:text-blue-400"
            >
              <span>Register</span>
            </Button>
          </Link>
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
          <div className="flex items-center gap-x-1">
            <Link to="/login" className="w-1/2">
              <Button
                fullWidth
                size="sm"
                className="bg-white hover:bg-blue-400 text-blue-400 hover:text-white"
              >
                <span>Log In</span>
              </Button>
            </Link>
            <Link to="/register" className="w-1/2">
              <Button
                fullWidth
                size="sm"
                className="bg-blue-400 hover:bg-white hover:text-blue-400"
              >
                <span>Sign in</span>
              </Button>
            </Link>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
}
