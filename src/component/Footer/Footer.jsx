
import logo from "../../assets/img/logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#5189C6] text-white py-8 font-poppins">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/3 px-10 flex items-center">
          <img src={logo} alt="Logo" className="w-12 h-12 mr-7" /> {/* Tambahkan gambar logo */}
          <div>
            <h3 className="text-2xl font-semibold">Informasi Kontak</h3>
            
            <p>Email: example@example.com</p>
            <p>Telepon: (123) 456-7890</p>
          </div>
        </div>

        <div className="md:w-1/3 mt-8 md:mt-0 px-4">
          <h3 className="text-2xl font-semibold">Alamat</h3>
          <p className="mt-4">Jl. Pelajar Pejuang 45 No.65</p>
          <p>Lkr. Sel.,Lengkong, </p>
          <p>Kota Bandung, Jawa Barat 40263</p>
        </div>

        <div className="mt-8 md:mt-0 px-4">
          <p>
            &copy; {new Date().getFullYear()} PPTIK
          </p>
        </div>
      </div>
    </footer>
  );
}
