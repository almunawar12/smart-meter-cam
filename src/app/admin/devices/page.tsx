'use client'
import DeviceTable from '@/components/organism/DeviceTable'
import Footer from '@/components/organism/Footer'
import Navbar from '@/components/organism/NavbarAdmin'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import JwtToken from '@/services/data'
import DeviceModal from '@/components/organism/Modal/AddDevice'

const Devices = () => {
const [jwtData, setJwtData] = useState({} as any);
const [isModalOpen, setIsModalOpen] = useState(false);

  const getDataAsync = async () => {
    try {
      const jwtToken = new JwtToken(); 
      const jwt = await jwtToken.getCompanyGuid();
      const userGuid = await jwtToken.getUserGuid(); 
      setJwtData(jwt); 

      console.log(jwt);
      console.log(userGuid);
      // console.log(jwtData.companyGuid)
    } catch (error) {
      console.error('Error fetching JWT data:', error);
    }
  };

  const handleAddDevice = (device: { name: string; type: string }) => {
    console.log('Device added:', device);
  };

  useEffect(() => {
    getDataAsync();
  }, []);


  return (
    <>
      <Navbar />
      <section className="p-10">
        <h1 className="text-center text-2xl font-bold">Daftar Device</h1>
        <button
          className="flex items-center mr-4 bg-blue-400 hover:bg-blue-500 w-40 rounded-md p-2 mb-3"
          onClick={() => setIsModalOpen(true)}
        >
          <div className="text-white hover:text-blue-700">
            <FaPlus />
          </div>
          <span className="ml-1 text-white font-semibold">Tambah Device</span>
        </button>
        <DeviceTable />
      </section>
      <Footer />
      <DeviceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddDevice}
      />
    </>
  )
}

export default Devices