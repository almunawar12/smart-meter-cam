import Kamera from "../../assets/img/kamera.png"
export default function Tentang() {
  return (
    <div className="h-96 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="md:flex">
        <div className="">
          <img
            src={Kamera}
            alt="Gambar"
            className="w-96 bg-cover"
          />
        </div>

        <div className="lg:w-1/2 p-4 py-28">
          <h2 className="text-3xl mb-1 font-bold font-poppins text-blue-500">Smart Meter Cam</h2>
          <p className="text-[#1A202C] font-poppins text-sm">
          Smart Meter Cam adalah sebuah inovasi revolusioner dalam pemantauan dan manajemen penggunaan energi listrik. Dengan teknologi kamera cerdas yang canggih, Smart Meter Cam memberikan kemampuan unik untuk mengamati dan menganalisis konsumsi energi secara real-time dengan presisi yang tinggi.
          </p>
        </div>
      </div>
    </div>
  );
}
