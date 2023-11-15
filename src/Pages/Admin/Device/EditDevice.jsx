import React, { useCallback, useEffect, useState } from 'react'
import { NavbarAdmin } from '../../../component/Navbar/NavbarAdmin'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';

export const EditDevice = () => {
  const router = useNavigate()
  
  const { id } = useParams()
  const [device, setDevice] = useState(null);

  const getDevice = useCallback(async () => {
    try {
      const token = Cookies.get("token");
      const jwtToken = atob(token);

      const data = {
        page: "1",
        limit: "10",
      };

      const response = await axios.post(
        "https://hydro-connect.pptik.id/api/api.v1/devices/getalldevice",
        data,
        {
          headers: {
            "x-access-token": jwtToken,
          },
        }
      );
      response.data.device.map((device) => {
        if (device.guid === id) {
          setDevice(device)
        }
      })

    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }, []);

  useEffect(() => {
    getDevice();
  }, [getDevice]);

  const onSubmit = async () => {
    const token = Cookies.get("token");

    if (token) {
      const jwtToken = atob(token);
      const payload = jwtDecode(jwtToken);
      
      const data = {
        name: device.name,
        guid_user: payload.guid,
        guid_device: device.guid_device,
      };

      try {
        const token = Cookies.get("token");
        const jwtToken = atob(token);
  
        const response = await axios.put(
          `https://hydro-connect.pptik.id/api/api.v1/devices/updatedevice/${device.guid}`,
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
          toast.success("Berhasil edit device")
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

    {device ? (
    <div className="p-20">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 font-poppins text-[#5189C6]">
            Edit Device
          </h2>
          <form className="font-poppins" onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}>
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
                placeholder="Masukan Nama"
                value={device ? device.name : " "}
                onChange={(e) => {
                  setDevice({
                    ...device,
                    name: e.target.value
                  })
                }}
              />
            </div>

            <div className="flex items-center justify-end mt-4">
              <button
                type="button"
                className="modal-close px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
              >
                Batal
              </button>
              <button
                type="submit"
                className="ml-2 px-4 py-2 cursor-pointer bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
    ) : (
      <div>Loading...</div>
    )}
    </>
  )
}
