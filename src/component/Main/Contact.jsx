import Form from "../Form";

export default function Contact() {
  return (
    <div className="w-4/5 mx-auto bg-white shadow-md rounded-md overflow-hidden mb-8">
      <div className="flex">
        <div className="w-2/4 bg-[#5189C6] p-6">
          <div className="mt-28 mx-32">
          <h3 className="text-white font-semibold mb-2">
            Temui Kami di Sosial Media
          </h3>
          <ul className="text-white">
            <li className="mb-1">
              <a href="https://facebook.com">Facebook</a>
            </li>
            <li className="mb-1">
              <a href="https://twitter.com">Twitter</a>
            </li>
            <li className="mb-1">
              <a href="https://linkedin.com">LinkedIn</a>
            </li>
          </ul>
          </div>
          
        </div>

        <div className="w-2/4 px-6 py-4">
          <form>
            <Form label="Nama" placeholder="masukan nama"/>
            <Form label="Email" placeholder="Masukan Email"/>
            <div className="mb-6">
              <label className="block text-gray-600 font-semibold">Pesan</label>
              <textarea
                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
                rows="4"
                placeholder="Tulis pesan Anda di sini"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full font-poppins text-xl bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
