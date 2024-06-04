'use client'
import Image from 'next/image'
import React, { useState } from 'react'

export default function HistoryCard({ history }: any) {
  const [imgError, setImgError] = useState(false);

  const handleError = () => {
    setImgError(true);
  };

  return (
    <div className="p-3 m-8 w-2/1 xl:w-80 md:w-80 bg-white shadow-md rounded-xl">
      
      <div className="rounded-lg block overflow-hidden">
        {imgError ? (
          <div className="flex items-center justify-center h-72 bg-gray-200">
            <span className="text-gray-500">Image not available</span>
          </div>
        ) : (
          <Image
            alt={history.guid_device}
            width={700}
            height={300}
            className="hover:scale-125"
            src={`https://power-cam.pptik.id/api/v1/images/${history.value}`}
            onError={handleError}
          />
          // <Image alt={history.guid_device} width={700} height={300} className="hover:scale-125" src="/assets/images/" />
        )}
      </div>
      <h1 className="mt-4 mb-2 text-xl font-bold">{history.guid_device}</h1>
      <p className="text-sm text-gray-600">{history.dateTime}</p>
      <p className="text-sm text-gray-600">{history.description}</p>
      <p className="text-sm text-gray-600">{history.location}</p>
    </div>
  )
}
