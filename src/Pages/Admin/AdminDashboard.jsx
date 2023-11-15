import React, { useState } from "react";
import { NavbarAdmin } from "../../component/Navbar/NavbarAdmin";
import Banner from "../../component/Main/Banner";
import { Tabel } from "../../component/Visualisasi/Tabel";
import Modal from "../../component/Modal";
import Footer from "../../component/Footer/Footer";


export const AdminDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <NavbarAdmin />
      {/* <section className="mt-2">
        <Banner />
      </section> */}
      <section className="m-4 flex flex-col items-center mb-32">
        <h1 className="text-2xl text-center font-bold text-[#5189C6] mb-2">
          Daftar Perangkat Terdaftar
        </h1>
        <button
          className="bg-[#5189C6] hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded mb-4"
          onClick={openModal}
        >
          Tambah Device
        </button>
        <Tabel />
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="text-xl font-semibold mb-4 font-poppins text-[#5189C6]">
            Tambah Device
          </h2>
          <form className="font-poppins">
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
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Masukan Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="device"
              >
                No Device
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="device"
                type="text"
                placeholder="Masukan Nama"
              />
            </div>

            <div className="flex items-center justify-end mt-4">
              <button
                type="button"
                className="modal-close px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                onClick={closeModal}
              >
                Batal
              </button>
              <button
                type="submit"
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                Simpan
              </button>
            </div>
          </form>
        </Modal>
      </section>

      <Footer />
    </>
  );
};
