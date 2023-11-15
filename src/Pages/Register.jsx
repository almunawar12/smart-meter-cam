import Logo from "../assets/img/Logo.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";


export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone_number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const config = {
    headers: {
      "access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.ifzSo4nZ09IMFlMnLQtW3pFcLD8jyeMSXZxqaQmgMns", // Gunakan sintaks "Bearer" sebelum token
      "Content-Type": "application/json", // Tetapkan tipe konten ke JSON
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to your registration endpoint with form data
      console.log("formData", formData);
      const response = await axios.post(
        "https://hydro-connect.pptik.id/api/api.v1/users/signup",
        formData,
        config
      );

      // Handle the response (you might want to redirect the user or show a success message)
      // console.log("Registration successful!", response.data);
      alert('Registrasi Berhasil');
      window.location.href = "/login";

      // Reset the form after successful registration
      setFormData({
        name: "",
        email: "",
        password: "",
        phone_number: "",
      });
    } catch (error) {
      // Handle errors (show an error message to the user)
      console.error("Registration failed!", error);
    }
  };

  return (
    <div className="min-h-screen flex font-poppins">
      <div className="flex-1 bg-[#5189C6] p-5">
        <div className="flex h-full flex-col justify-center items-center">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-16 mb-2 cursor-pointer" />
          </Link>
          <p className="text-2xl text-white font-semibold">Smart Meter Cam</p>
        </div>
      </div>

      <div className="flex-1 flex px-5 justify-center items-center font-poppins">
        <div className="w-4/5 p-8 bg-white shadow-lg rounded-lg">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-10 mb-3 cursor-pointer" />
          </Link>
          <h2 className="text-2xl font-semibold">Selamat Datang !</h2>
          <p className="mb-3">Silahkan Registrasi terlebih dahulu</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label className="block text-gray-600 font-semibold">Nama</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="Nama Lengkap"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-600 font-semibold">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="ex: jhon@gmail.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-600 font-semibold">
                Password
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
                value={formData.password}
                onChange={handleChange}
                name="password"
              />
            </div>
            <div className="mb-2">
              <label className="block text-gray-600 font-semibold">
                No Handphone
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="ex: 08xxxxxxx"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <button
                type="submit"
                className="w-full bg-[#5189C6] text-white p-2 rounded-md hover:bg-blue-400 transition duration-300"
              >
                Masuk
              </button>
            </div>
          </form>
          <p className="text-gray-600 text-sm text-center">
            Sudah punya akun?{" "}
            <span className="text-blue-400 hover:text-blue-500">
              <Link to="/login">Masuk di sini</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}


// import Logo from "../assets/img/Logo.png";
// import { Link } from "react-router-dom";
// import React, { useState } from "react";
// import axios from "axios";
// // import {useHistory} from "react-router-dom";


// export default function Register() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [phone_number, setPhone_number] = useState('');

//   // const history = useHistory();

//   const Register = async(e) => {
//     e.preventDefault();
//     try {
//       await axios.post('https://hydro-connect.pptik.id/api/api.v1/users/signup', {
//         name: name,
//         email: email,
//         password: password,
//         phone_number: phone_number
//       });
//       // history.push("/")
//     } catch (error) {
//       if (error.response) {
//         console.log(error.response.data);
//       }
//     }
//   } 

//   return (
//     <div className="min-h-screen flex font-poppins">
//       <div className="flex-1 bg-[#5189C6] p-5">
//         <div className="flex h-full flex-col justify-center items-center">
//           <Link to="/">
//             <img src={Logo} alt="Logo" className="w-16 mb-2 cursor-pointer" />
//           </Link>
//           <p className="text-2xl text-white font-semibold">Smart Meter Cam</p>
//         </div>
//       </div>

//       <div className="flex-1 flex px-5 justify-center items-center font-poppins">
//         <div className="w-4/5 p-8 bg-white shadow-lg rounded-lg">
//           <Link to="/">
//             <img src={Logo} alt="Logo" className="w-10 mb-3 cursor-pointer" />
//           </Link>
//           <h2 className="text-2xl font-semibold">Selamat Datang !</h2>
//           <p className="mb-3">Silahkan Registrasi terlebih dahulu</p>
//           <form onSubmit={Register}>
//             <div className="mb-2">
//               <label className="block text-gray-600 font-semibold">Nama</label>
//               <input
//                 type="text"
//                 className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
//                 placeholder="Nama Lengkap"
//                 name="name" value={name} onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//             <div className="mb-2">
//               <label className="block text-gray-600 font-semibold">Email</label>
//               <input
//                 type="email"
//                 className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
//                 placeholder="ex: jhon@gmail.com"
//                 name="email" value={email} onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div className="mb-2">
//               <label className="block text-gray-600 font-semibold">
//                 Password
//               </label>
//               <input
//                 type="text"
//                 className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
//                 name="password" value={password} onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <div className="mb-2">
//               <label className="block text-gray-600 font-semibold">
//                 No Handphone
//               </label>
//               <input
//                 type="text"
//                 className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
//                 placeholder="ex: 08xxxxxxx"
//                 name="phone_number" value={phone_number} onChange={(e) => setPhone_number(e.target.value)}
//               />
//             </div>
//             <div className="mb-3">
//               <button
//                 type="submit"
//                 className="w-full bg-[#5189C6] text-white p-2 rounded-md hover:bg-blue-400 transition duration-300"
//               >
//                 Masuk
//               </button>
//             </div>
//           </form>
//           <p className="text-gray-600 text-sm text-center">
//             Sudah punya akun?{" "}
//             <span className="text-blue-400 hover:text-blue-500">
//               <Link to="/login">Masuk di sini</Link>
//             </span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

