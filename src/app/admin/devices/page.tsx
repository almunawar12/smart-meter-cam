import DeviceTable from '@/components/organism/DeviceTable'
import Footer from '@/components/organism/Footer'
import Navbar from '@/components/organism/NavbarAdmin'
import Link from 'next/link'
import React from 'react'
import { FaPlus } from 'react-icons/fa'

export default function Devices() {
  return (
    <>
      <Navbar />
      <section className='p-10'>
        <h1 className='text-center text-2xl font-bold'>Daftar Device</h1>
        <Link href="#" className="flex items-center mr-4 bg-blue-400 hover:bg-blue-500 w-40 rounded-md p-2 mb-3">
          <div className="text-white hover:text-blue-700">
            <FaPlus />
          </div>
          <span className="ml-1 text-white font-semibold">Tambah Device</span>
        </Link>
        <DeviceTable />
      </section>
      <Footer />
    </>
  )
}
