import { NavbarAdmin } from "../../component/Navbar/NavbarAdmin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect, useCallback } from "react";
import Cookies from "js-cookie";
import axios from "axios";

export const DaftarUser = () => {
  const [users, setUsers] = useState([]);

  const getUsers = useCallback(async () => {
    try {
      const token = Cookies.get("token");
      const jwtToken = atob(token);

      const data = {
        page: "1",
        limit: "10",
        guid_user: "",
      };

      const response = await axios.post(
        "https://hydro-connect.pptik.id/api/api.v1/devices/get-user",
        data,
        {
          headers: {
            "x-access-token": jwtToken,
          },
        }
      );
      setUsers(response.data.users);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <>
      <NavbarAdmin />
      <section className="p-20 mt-3 flex flex-col items-center font-poppins">
        <h1 className="text-2xl text-center font-semibold text-[#5189C6] mb-2">
          Daftar Pengguna
        </h1>
        {/* <button
          className="bg-[#5189C6] hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded mb-4"
        >
          Tambah Pengguna
        </button> */}
        <div className="w-full mx-auto">
          <table className="min-w-full border border-gray-300 table-auto text-white">
            <thead className="bg-blue-400">
              <tr>
                <th className="border-b border-gray-300 py-2">No</th>
                <th className="border-b border-gray-300 py-2">Nama</th>
                <th className="border-b border-gray-300 py-2">Email</th>
                <th className="border-b border-gray-300 py-2">Role</th>
                <th className="border-b border-gray-300 py-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {users ? (
                users.map((users, index) => (
                  <tr
                    key={users.guid}
                    className="bg-gray-200 text-center text-black"
                  >
                    <td className="border-b border-gray-300 py-2">
                      {index + 1}
                    </td>
                    <td className="border-b border-gray-300 py-2 truncate">
                      {users.name}
                    </td>
                    <td className="border-b border-gray-300 py-2 truncate">
                      {users.longitude}
                    </td>
                    <td className="border-b border-gray-300 py-2 truncate">
                      {users.latitude}
                    </td>
                    <td className="border-b border-gray-300 py-2">
                      <button className="mr-2">
                        <FontAwesomeIcon
                          icon={faEdit}
                          style={{ color: "blue" }}
                        />
                      </button>
                      <button className="mr-2">
                        <FontAwesomeIcon
                          icon={faTrash}
                          style={{ color: "red" }}
                        />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <div>Loading...</div>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
