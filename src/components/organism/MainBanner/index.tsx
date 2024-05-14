import Image from "next/image";

export default function MainBanner() {
    return (
        <div className="relative text-white py-40 px-4 sm:px-6 lg:px-8">
            <div className="absolute inset-0">
                <Image
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover"
                    src="/assets/images/banner.jpg"
                    alt="Banner Image"
                />
                <div className="absolute inset-0 opacity-50"></div>
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="lg:text-center">
                    <h2 className="text-lg font-semibold tracking-wider uppercase">Smart Meter Cam</h2>
                    <p className="mt-2 text-3xl font-bold leading-8 tracking-tight sm:text-4xl text-[#FFAA4D]">Monitoring Energy, Maximizing Savings</p>
                </div>
            </div>
        </div>
    )
}
