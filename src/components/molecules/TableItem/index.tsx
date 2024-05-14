'use client'
import { getAllDevice } from '@/services/user';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'

export default function TableItem() {
    const [deviceData, setDeviceData] = useState([]) as any;
    
    useEffect(() => {
        const fetchHistoryData = async () => {
            const token: any = localStorage.getItem('token');
            //  console.log('Token:',token);
            //  console.log(token.slice(6));
            try {
                const response = await getAllDevice(token);
                console.log('Response:', response.data.data);

                setDeviceData(response.data.data);
            } catch (error) {
                console.error('Error fetching history data:', error);
            }
        };

        fetchHistoryData();
    }, []);
    
    return (
        <tbody className="bg-white divide-y divide-gray-200">
            {deviceData.map((device: any, index: any) => 

            <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                    
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
                    {device.createdAt}
                </td>
                <td className="px-6 py-4 whitespace-nowrap flex items-center">
                    <Link href="#" className="flex items-center mr-4">
                        <div className="text-blue-500 hover:text-blue-700">
                            <FaEdit />
                        </div>
                        <span className="ml-1">Edit</span>
                    </Link>
                    <Link href="#" className="flex items-center">
                        <div className="text-red-500 hover:text-red-700">
                            <FaTrash />
                        </div>
                        <span className="ml-1">Hapus</span>
                    </Link>
                </td>
            </tr>
            )}

        </tbody>
    )
}
