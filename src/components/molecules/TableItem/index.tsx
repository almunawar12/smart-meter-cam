'use client'
import { deletDevice, getAllDevice } from '@/services/user';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaEdit, FaHistory, FaTrash } from 'react-icons/fa'

export default function TableItem() {
    const [deviceData, setDeviceData] = useState([]) as any;
    const token: any = localStorage.getItem('token');

    useEffect(() => {
        const fetchHistoryData = async () => {
            try {
                const response = await getAllDevice(token);
                console.log('Response:', response.data.data);
                setDeviceData(response.data.data);
            } catch (error) {
                console.error('Error fetching history data:', error);
            }
        };

        fetchHistoryData();
    }, [token]);

    const handleDelete = async (deviceGuid: string) => {
        const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus perangkat ini?");
        if (!confirmDelete) {
            return;
        }
        try {
            const response = await deletDevice(token, deviceGuid); // Pastikan deleteDevice mengembalikan response yang sesuai
            if (!response.error) {
                setDeviceData((prevData: any) =>
                    prevData.filter((device: any) => device.deviceGuid !== deviceGuid)
                );
                console.log('Data terhapus:', deviceGuid);
            }
            //  else {
            //     console.error('Error deleting device from API:', response.message);
            // }
            location.reload()
        } catch (error) {
            console.error('Error deleting device:', error);
        }
    };

    return (
        <tbody className="bg-white divide-y divide-gray-200">
            {deviceData.map((device: any, index: any) =>

                <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">
                        {index + 1}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        {device.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        {device.latitude}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        {device.longitude}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        {new Date(device.createdAt).toLocaleDateString('en-GB')}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap flex items-center">
                        <Link href={"/admin/devices/edit-device/" + device.guid} className="flex items-center mr-4">
                            <div className="text-blue-500 hover:text-blue-700">
                                <FaEdit />
                            </div>
                        </Link>
                        <button onClick={() => handleDelete(device.guid)} className="flex items-center mr-4">
                            <div className="text-red-500 hover:text-red-700">
                                <FaTrash />
                            </div>
                        </button>
                        <Link href={"/admin/devices/history/" + device.deviceGuid} className="flex items-center">
                            <div className="text-orange-500 hover:text-orange-700">
                                <FaHistory />
                            </div>
                        </Link>
                    </td>
                </tr>
            )}
        </tbody>
    );
}
