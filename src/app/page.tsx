import About from "@/components/organism/About";
import Contact from "@/components/organism/Contact";
import Footer from "@/components/organism/Footer";
import Layanan from "@/components/organism/Layanan";
import MainBanner from "@/components/organism/MainBanner";
import Navbar from "@/components/organism/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <MainBanner />
      <section className="lg:px-5 px-3">
        <About />
      </section>
      <section className="mt-5 flex flex-wrap justify-center xl:px-5 md:px-3 px-2">
        <h1 className="font-poppins text-3xl font-bold text-blue-500 text-center mb-2 w-full">Service</h1>
        <div className="flex flex-col md:flex-row justify-center md:justify-start gap-8">
          <Layanan title="Monitoring" content="monitoring listrik adalah solusi yang memungkinkan pengguna untuk mengawasi dan menganalisis konsumsi energi listrik mereka secara real-time. Melalui penggunaan perangkat keras dan perangkat lunak khusus, layanan ini memungkinkan pengguna untuk memantau penggunaan listrik mereka di berbagai titik dalam sistem listrik mereka" thumbnail="/assets/images/analytics.png" />
          <Layanan title="Monitoring" content="monitoring listrik adalah solusi yang memungkinkan pengguna untuk mengawasi dan menganalisis konsumsi energi listrik mereka secara real-time. Melalui penggunaan perangkat keras dan perangkat lunak khusus, layanan ini memungkinkan pengguna untuk memantau penggunaan listrik mereka di berbagai titik dalam sistem listrik mereka" thumbnail="/assets/images/analytics.png" />
        </div>
      </section>
      <section>
        <h1 className="font-poppins text-3xl font-bold text-blue-500 text-center mb-2 w-full">Contact</h1>
        <p className="font-poppins text-sm text-center text-[#717171] mb-1">Butuh Bantuan? hubung kami</p>
        <div className="flex flex-col md:flex-row justify-center md:justify-start gap-8">
          <Contact />
        </div>
      </section>
      <Footer />
    </>
  );
}
