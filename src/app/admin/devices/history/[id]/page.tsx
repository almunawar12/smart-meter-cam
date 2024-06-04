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
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();

  const handleCancel = () => {
    router.push('/admin/devices');
  };

  const fetchHistoryData = async (page: number) => {
    const token: any = localStorage.getItem('token');
    try {
      const response = await getHistory(token, params.params.id, page);
      setHistoryData(response.data.data);
      setTotalPages(response.data.totalPages || 1);
    } catch (error) {
      console.error('Error fetching history data:', error);
    }
  };

  useEffect(() => {
    fetchHistoryData(currentPage);
  }, [params.params.id, currentPage]);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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
                <button
                  className={`bg-blue-400 hover:bg-[#FFAA4D] text-white px-4 py-2 rounded-md mr-2 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={handlePrev}
                  disabled={currentPage === 1}
                >
                  Prev
                </button>
                <button
                  className={`bg-blue-400 hover:bg-[#FFAA4D] text-white px-4 py-2 rounded-md ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={handleNext}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </div>
              <div className="flex justify-center mt-2 w-full">
                <span className="text-gray-700">Page {currentPage} of {totalPages}</span>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
