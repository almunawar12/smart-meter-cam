import React from "react";
import backgroundImage from "../../assets/img/banner.jpg";

export default function Banner() {
  const bannerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  };

  const buttonStyle = {
    position: 'absolute',
    top: '66%', 
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={bannerStyle}>
      <h1 className="text-white text-4xl font-poppins font-bold text-center">
        Kamera Cerdas untuk Deteksi <br /> Konsumsi Energi Listrik (kWh)
      </h1>
      <p className="font-poppins text-center mt-3 text-white text-sm">
        Kini hadir kamera cerdas untuk mendeteksi <br /> penggunaan listrik (kWh)
      </p>
      <a
        href="#"
        className="bg-[#FFAA4D] hover:bg-amber-500 text-white px-4 py-2 rounded-md font-poppins font-semibold drop-shadow-md"
        style={buttonStyle}
      >
        Cek Sekarang
      </a>
    </div>
  );
}
