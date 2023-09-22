// import React from "react";
// import Logo from "../../assets/img/Logo.png";



// function Navbar() {
//   return (
//     <nav className="bg-white p-4">
//       <div className="container mx-auto flex flex-wrap justify-between items-center">
//         <a href="#" className="ml-4 md:ml-20">
//           <img src={Logo} alt="" className="w-12" />
//         </a>

//         <ul className="mt-4 md:mt-0 md:flex space-x-4">
//           <li>
//             <a
//               href="#"
//               className="text-black font-medium hover:text-blue-700 font-poppins text-sm"
//             >
//               Beranda
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="text-gray-400 font-medium hover:text-black font-poppins text-sm"
//             >
//               Tentang Kami
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="text-gray-400 font-medium hover:text-black font-poppins text-sm"
//             >
//               Layanan
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="text-gray-400 font-medium hover:text-black font-poppins text-sm"
//             >
//               Kontak
//             </a>
//           </li>
//         </ul>

//         <div className="flex mt-4 md:mt-0 space-x-4 ml-4 md:ml-0">
//           <a
//             href="#"
//             className="bg-white hover:bg-blue-600 hover:text-white text-blue-500 font-poppins font-semibold px-4 py-2 rounded-md border-2 border-blue-500"
//           >
//             Daftar
//           </a>
//           <a
//             href="#"
//             className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-poppins font-semibold"
//           >
//             Masuk
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import React from "react";
import Logo from "../../assets/img/Logo.png";
import { Link } from "react-router-dom"; // Import Link dari react-router-dom

function Navbar() {
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <Link to="/" className="ml-4 md:ml-20"> {/* Gunakan Link dengan 'to' untuk navigasi */}
          <img src={Logo} alt="" className="w-12" />
        </Link>

        <ul className="mt-4 md:mt-0 md:flex space-x-4">
          <li>
            <Link
              to="/"
              className="text-black font-medium hover:text-blue-700 font-poppins text-sm"
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link
              to="/tentang"
              className="text-gray-400 font-medium hover:text-black font-poppins text-sm"
            >
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link
              to="/layanan"
              className="text-gray-400 font-medium hover:text-black font-poppins text-sm"
            >
              Layanan
            </Link>
          </li>
          <li>
            <Link
              to="/kontak"
              className="text-gray-400 font-medium hover:text-black font-poppins text-sm"
            >
              Kontak
            </Link>
          </li>
        </ul>

        <div className="flex mt-4 md:mt-0 space-x-4 ml-4 md:ml-0">
          <Link
            to="/daftar"
            className="bg-white hover:bg-blue-600 hover:text-white text-blue-500 font-poppins font-semibold px-4 py-2 rounded-md border-2 border-blue-500"
          >
            Daftar
          </Link>
          <Link
            to="/masuk"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-poppins font-semibold"
          >
            Masuk
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
