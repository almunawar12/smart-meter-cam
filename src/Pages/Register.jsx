import Form from "../component/Form";
import Logo from "../assets/img/Logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

export default function Register() {
  return (
    <div className="min-h-screen flex font-poppins">
      <div className="flex-1 bg-[#5189C6] p-5">
        <div className="flex h-full flex-col justify-center items-center">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-16 mb-2 cursor-pointer" />
          </Link>
          <p className="text-2xl text-white font-semibold">Smart Meter Cam</p>
        </div>
      </div>

      <div className="flex-1 flex px-5 justify-center items-center font-poppins">
        <div className="w-4/5 p-8 bg-white shadow-lg rounded-lg">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-10 mb-3 cursor-pointer" />
          </Link>
          <h2 className="text-2xl font-semibold">Selamat Datang !</h2>
          <p className="mb-3">Silahkan Registrasi terlebih dahulu</p>
          <form>
            <Form label="Nama Lengkap" placeholder="Contoh: Jhoni smith" />
            <Form label="Email" placeholder="Contoh: jhoni@gmail.com" />
            <Form label="Password" placeholder="" />

            <div className="mb-1">
              <button
                type="submit"
                className="w-full bg-[#5189C6] text-white p-2 rounded-md hover:bg-blue-400 transition duration-300"
              >
                Masuk
              </button>
            </div>
            <p className="text-center mb-1">Atau</p>
            <div className="mb-6">
              <button
                type="submit"
                className="w-full bg-white text-gray-500 p-2 rounded-md hover:bg-gray-200 border border-black"
              >
                <FontAwesomeIcon icon={faGoogle} className="mr-2" />
                Daftar dengan Google
              </button>
            </div>
          </form>
          <p className="text-gray-600 text-sm text-center">
            Sudah punya akun? <span className="text-blue-400 hover:text-blue-500"><Link to="/login">Masuk di sini</Link></span>
          </p>
        </div>
      </div>
    </div>
  );
}