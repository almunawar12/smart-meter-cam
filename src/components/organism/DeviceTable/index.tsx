import TableItem from '@/components/molecules/TableItem'
import React from 'react'

export default function DeviceTable() {
    return (
        <div className=''>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-blue-300">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                                No
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                                Name
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                                Latitude
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                                Longitude
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                                Create At
                            </th>
                            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <TableItem />
                </table>
            </div>
        </div>
    )
}
