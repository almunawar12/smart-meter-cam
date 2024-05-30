'use client'
import HistoryCard from '@/components/molecules/HistoryCard';
import React, { useState, useEffect } from 'react';
import { getHistory } from '@/services/user';
import Navbar from '@/components/organism/NavbarAdmin';
import { useRouter } from 'next/navigation';

interface HistoryProps {
  params: { id: string },
  data: any;
}

export default function History(params: HistoryProps) {
  const [historyData, setHistoryData] = useState([]) as any;
  const router = useRouter();

  const handleCancel = () => {
    router.push('/admin/devices');
  };

  useEffect(() => {
    // console.log(params.params.id)
    const fetchHistoryData = async () => {
      const token: any = localStorage.getItem('token');
      try {
        const response = await getHistory(token, params.params.id);
        // console.log('Response:',response.data.data);

        setHistoryData(response.data.data);
      } catch (error) {
        console.error('Error fetching history data:', error);
      }
    };

    fetchHistoryData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="mb-6">
        <div className='pt-5'>
          <h1 className='text-center text-2xl font-semibold'>Riwayat Device</h1>
        </div>
        <div className="flex flex-wrap justify-center">
          {historyData.length === 0 ? (
            <>
              <div className="text-center w-full">
                <div className="text-gray-500 mb-4">Data kosong</div>
                <button className="bg-blue-400 hover:bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleCancel}>Back</button>
              </div>
            </>
          ) : (
            <>
              {historyData.map((historyItem: any, index: any) => (
                <HistoryCard key={index} history={historyItem} />
              ))}
              <div className="flex justify-center mt-5 w-full">
                <button className="bg-blue-400 hover:bg-[#FFAA4D] text-white px-4 py-2 rounded-md mr-2">Prev</button>
                <button className="bg-blue-400 hover:bg-[#FFAA4D] text-white px-4 py-2 rounded-md">Next</button>
              </div>
            </>
          )}
        </div>

      </div>
    </>
  )
}
