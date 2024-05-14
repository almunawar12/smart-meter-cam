import FormItem from "@/components/atoms/FormItem";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Contact() {
    return (
        <div className="w-4/5 mx-auto bg-white shadow-md rounded-md overflow-hidden mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-blue-400 p-6 flex justify-center items-center">
                    <div className="flex space-x-4">
                        <h1 className="text-semibold text-white">Follow Us</h1>
                        <FaFacebook size={24} color="#fff" />
                        <FaYoutube size={24} color="#fff" />
                        <FaInstagram size={24} color="#fff" />
                    </div>
                </div>

                <div className="px-6 py-4">
                    <form>
                        <FormItem label="Name" type="text" placeholder="Your Name" />
                        <FormItem label="Email" type="email" placeholder="youremail@mail.com" />
                        <div className="mb-6">
                            <label className="block text-gray-600 font-semibold">Pesan</label>
                            <textarea
                                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
                                rows={4}
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
    )
}
