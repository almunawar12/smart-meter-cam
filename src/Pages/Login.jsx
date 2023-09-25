import Form from "../component/Form";
import Logo from "../assets/img/Logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


export default function Login() {
  console.log(window.location.pathname);

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 bg-[#5189C6] p-5">
        <div className="flex h-full justify-center items-center">
          <img
            src="/path-to-your-image.jpg"
            alt="Login Image"
            className="max-w-xs"
          />
        </div>
      </div>

      <div className="flex-1 flex px-5 justify-center items-center font-poppins">
        <div className="w-4/5 p-8 bg-white shadow-lg rounded-lg">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-10 mb-5 cursor-pointer" />
          </Link>
          <h2 className="text-2xl font-semibold">Selamat Datang Kembali !</h2>
          <p className="mb-6">Silahkan masuk terlebih dahulu</p>
          <form>
            <Form label="Username" placeholder="Masukan Username" />
            <Form label="Password" placeholder="" />

            <div className="mb-1">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
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
                Masuk dengan Google
              </button>
            </div>
          </form>
          <p className="text-gray-600 text-sm text-center">
            Belum punya akun? <Link to="/register">Daftar disini</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
