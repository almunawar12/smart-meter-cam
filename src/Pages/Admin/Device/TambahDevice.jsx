import { NavbarAdmin } from "../../../component/Navbar/NavbarAdmin";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function TambahDevice() {
  const router = useNavigate()
  
  const [formData, setFormData] = useState({
    name: "",
    guid_device: "",
    type_device: "",
    latitude: "",
    longitude: "",
    unit: "",
  });


  const onSubmit = async () => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload = jwtDecode(jwtToken);
      
      const data = {
        name: formData.name,
        guid_user: payload.guid,
        guid_device: formData.guid_device,
        type_device: formData.type_device,
        latitude: formData.latitude,
        longitude: formData.longitude,
        unit: formData.unit,
      };

      try {
        const token = Cookies.get("token");
        const jwtToken = atob(token);
  
        const response = await axios.post(
          "https://hydro-connect.pptik.id/api/api.v1/devices/add",
          data,
          {
            headers: {
              "x-access-token": jwtToken,
            },
          }
        );
  
        if (response.error) {
          console.log(response.message);
        } else {
          toast.success("Berhasil tambah device")
          router("/admin/daftar-device");
        }
      } catch (error) {
        console.error(error);
      }
    }

  };

  return (
    <>
      <NavbarAdmin />
      <div className="p-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 font-poppins text-[#5189C6]">
            Tambah Device
          </h2>
          <form
            className="font-poppins"
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="guid"
              >
                Guid Device
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="guid"
                type="text"
                name="guid_device"
                value={formData.guid_device}
                placeholder="Masukkan Nama"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    guid_device: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Nama Device
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                value={formData.name}
                placeholder="Masukkan Nama"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="type"
              >
                Tipe Device
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="type"
                name="type"
                value={formData.type_device}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    type_device: e.target.value,
                  })
                }
              >
                <option value="">Pilih Tipe Device</option>
                <option value="Sensor">Sensor</option>
                <option value="Akuator">Aktuator</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="latitude"
              >
                Latitude
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="latitude"
                type="text"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    latitude: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="longtitude"
              >
                Longitude
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="longtitude"
                type="text"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    longitude: e.target.value,
                  })
                }
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="unit"
              >
                Unit
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="unit"
                type="text"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    unit: e.target.value,
                  })
                }
              />
            </div>

            <div className="flex items-center justify-end mt-4">
              <Link
                to="/admin/daftar-device"
                type="button"
                className="modal-close px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              >
                Batal
              </Link>
              <button
                type="submit"
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
