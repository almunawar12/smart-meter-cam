'use client'
import HistoryCard from '@/components/molecules/HistoryCard';
import React, { useState, useEffect } from 'react';
import { getHistory } from '@/services/user';

interface HistoryProps {
  data: any;
}

export default function History() {
  const [historyData, setHistoryData] = useState([]) as any;
  
  useEffect(() => {
    const fetchHistoryData = async () => {
      const token: any = localStorage.getItem('token');
      try {
        const response = await getHistory(token);
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
      <div className="mb-6">
        <div className='pt-5'>
          <h1 className='text-center text-2xl font-semibold'>Riwayat Device</h1>
        </div>
        <div className="flex flex-wrap justify-center">
          {historyData.map((historyItem: any, index: any) => (
            <HistoryCard key={index} history={historyItem} />
          ))}
        </div>
        <div className='flex justify-center mt-5'>
          <button className='bg-blue-400 hover:bg-[#FFAA4D] text-white px-4 py-2 rounded-md mr-2'>Prev</button>
          <button className='bg-blue-400 hover:bg-[#FFAA4D] text-white px-4 py-2 rounded-md'>Next</button>
        </div>
      </div>
    </>
  )
}
