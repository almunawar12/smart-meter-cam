import React, { useState } from "react";
import axios from "axios";
import Logo from "../assets/img/Logo.png";
import { Link } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [userRole, setUserRole] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const config = {
    headers: {
      "access-token":
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c", // Gunakan sintaks "Bearer" sebelum token
      "Content-Type": "application/json", // Tetapkan tipe konten ke JSON
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to your API endpoint with form data
      console.log("formData", formData);
      const response = await axios.post(
        "https://pemadam.pptik.id/api/api.v1/users/signin",
        formData,
        config
      );

      // Tentukan peran pengguna berdasarkan respons dari server
    const { role } = response.data; // Peran pengguna (user atau admin) dari respons server
    setUserRole(role);

      // Handle the response (you might want to redirect the user or show a success message)
      // console.log("Login successful!", response.data);
      alert('Berhasil Login');
      window.location.href = "/user_dashboard";
      // if (role === "user") {
      //   window.location.href = "/user_dashboard";
      // } else if (role === "admin") {
      //   window.location.href = "/admin_dashboard";
      // }

      // Reset the form after successful login
      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
      // Handle errors (show an error message to the user)
      // console.error("Login failed!", error);
      alert('Login Gagal');
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
            <img src={Logo} alt="Logo" className="w-10 mb-5 cursor-pointer" />
          </Link>
          <h2 className="text-2xl font-semibold">Selamat Datang Kembali !</h2>
          <p className="mb-3">Silahkan masuk terlebih dahulu</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-600 font-semibold">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="Username"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-600 font-semibold">
                Password
              </label>
              <input
                type="password"
                name="password"
                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="Username"
                value={formData.password}
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
          <p className="text-gray-600 text-sm text-center mb-0">
            Belum punya akun?{" "}
            <span className="text-blue-400 hover:text-blue-500">
              <Link to="/register">Daftar disini</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
