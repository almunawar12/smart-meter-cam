import Image from "next/image";

const AboutUsCard = () => {
    return (
        <div className="bg-white shadow-md rounded-md overflow-hidden mt-3 grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 order-2 md:order-1">
                <Image src="/assets/images/about_us_image.jpg" layout="fill" objectFit="cover" alt="About Us" />
            </div>
            <div className="p-4 order-1 md:order-2">
                <h2 className="text-xl sm:text-2xl font-bold mb-2 text-blue-500">About Us</h2>
                <p className="text-gray-600 text-justify">Smart Meter Cam adalah inovasi terbaru dalam industri meteran energi yang mengintegrasikan teknologi kamera pintar dengan meteran energi tradisional. Sistem ini memanfaatkan kemajuan dalam bidang kecerdasan buatan dan pemrosesan gambar untuk memberikan solusi yang canggih dan efisien dalam pengukuran dan manajemen konsumsi energi.Dengan menggunakan teknologi kamera yang terpasang pada meteran energi, Smart Meter Cam dapat melakukan pengukuran konsumsi energi secara akurat dan real-time, sambil juga memberikan data visual tentang pola penggunaan energi. Ini memungkinkan pengguna untuk memantau dan menganalisis penggunaan energi mereka dengan lebih detail, serta mengidentifikasi sumber pemborosan energi dan peluang untuk meningkatkan efisiensi. </p>
            </div>
        </div>
    );
};

export default AboutUsCard;
