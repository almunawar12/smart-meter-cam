import React, { useState, useEffect } from "react";
import axios from "axios";
import Logo from "../../assets/img/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AdminProfile = () => {
  const router = useNavigate()
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone_number: "",
    guid: ""
  });

  const toastSuccess = () => {
    toast.success("Berhasil Update, Silahkan Login Kembali", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload = jwtDecode(jwtToken);
      const userFromPayload = payload;
      setUser(userFromPayload);
    }
  }, []);

  const handleCancelClick = () => {
    console.log("Aksi dibatalkan!");
    router("/admin/dashboard")
    // window.location.href = "/admin/dashboard";
    
  };

  const onSubmit = async () => {
    const data = {
      name: user.name,
      email: user.email,
      phone_number: user.phone_number,
      guid_user: user.guid
    }

    try {
      const token = Cookies.get("token");
        const jwtToken = atob(token);

      const response = await axios.post('https://hydro-connect.pptik.id/api/api.v1/users/update', data, {
        headers: {
          'x-access-token' : jwtToken
        }
      });

      if (response.error) {
        console.log(response.message)
      } else {
        toastSuccess();
        Cookies.remove("token");
        router("/login")
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 font-poppins">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow-lg">
        <div className="flex flex-col items-center justify-center mb-6">
          <img
            src={Logo}
            alt="Foto Profil"
            className="w-20 h-20 rounded-full object-cover mr-4"
          />
          <div></div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Nama
          </label>
          <input
            type="text"
            name="name"
            value={user.name}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Masukkan nama Anda"
            onChange={(e) => setUser({
              ... user,
              name: e.target.value
            })}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={user.email}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Masukkan email Anda"
            onChange={(e) => setUser({
              ...user,
              email: e.target.value
            })}
          />
        </div>
        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-600">
            Nomor Telepon
          </label>
          <input
            type="tel"
            name="phone_number"
            value={user.phone_number}
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Masukkan nomor telepon Anda"
            onChange={(e) => setUser({
              ...user,
              phone_number: e.target.value
            })}
          />
        </div>
        <div className="flex space-x-4">
          <button onClick={onSubmit} className="bg-blue-500 text-white px-4 py-2 rounded flex items-center hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
            <FontAwesomeIcon icon={faSave} className="mr-2" />
            Simpan
          </button>
          <button
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none focus:ring focus:border-gray-300"
            onClick={handleCancelClick}
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
};
