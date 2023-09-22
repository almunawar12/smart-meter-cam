import Banner from "../component/Main/Banner"
import TopNavbar from "../component/Navbar/Navbar"
import Tentang from "../component/Main/About"
import Card from "../component/Card"
import Kontak from "../component/Main/Contact"
import Footer from "../component/Footer/Footer"

import Layanan from "../component/Main/Layanan"

export default function Dashboard () {
    return (
        <>
        <TopNavbar />
        <section>
            <Banner />
        </section>
        <section id="layanan" className="mt-5">
            <Tentang />
        </section>
        <section className="mt-7">
            <h1 className="font-poppins text-3xl font-bold text-blue-500 ml-16 mb-5">Layanan</h1>
            <Layanan />
        </section>
        <section>
            <h1 className="font-poppins text-3xl font-semibold text-blue-500 text-center mt-5">Kontak</h1>
            <p className="font-poppins text-sm text-center text-[#717171] mb-6">Butuh Bantuan? hubung kami</p>
            <Kontak />
        </section>
        <Footer />
        </>
    )
}
