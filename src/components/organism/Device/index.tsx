import React from 'react'
import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa'

export default function Device() {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Longitude</th>
                            <th className="px-4 py-2">Latitude</th>
                            <th className="px-4 py-2">Craeted At</th>
                            <th className="px-4 py-2">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                            <td className="px-4 py-2">Malcolm Lockyer</td>
                            <td className="px-4 py-2">1961</td>
                            <td className="px-4 py-2">1961</td>
                            <td className="px-4 py-2">
                                <div className="flex">
                                    <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2" >
                                        <FaEdit />
                                    </div>
                                    <div className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-2" >
                                        <FaTrash />
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
