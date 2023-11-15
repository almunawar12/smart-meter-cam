import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'Jan', value: 10 },
    { name: 'Feb', value: 50 },
    { name: 'Mar', value: 20 },
    { name: 'Apr', value: 60 },
    { name: 'Mei', value: 20 },
    { name: 'Jun', value: 10 },
    { name: 'Jul', value: 40 },
    { name: 'Agu', value: 50 },
    { name: 'Sep', value: 30 },
    { name: 'Okt', value: 60 },
    { name: 'Nov', value: 70 },
    { name: 'Des', value: 30 },
];

export const Visualisasi = () => {
    return (
        <div>
            <h2 className="text-center text-2xl font-bold mb-4 text-[#5189C6]">Data Perangkat Terdaftar</h2>
            <LineChart width={600} height={400} data={data} margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" dot={{ r: 5 }} />
            </LineChart>
        </div>
    );
}
