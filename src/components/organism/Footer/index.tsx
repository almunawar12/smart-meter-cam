import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import Image from "next/image";

function Footer() {
  const iconsTab = [
    { icon: <FaFacebookF /> },
    { icon: <AiOutlineTwitter /> },
    { icon: <AiFillYoutube /> },
  ];

  return (
    <>
      <footer className="bg-blue-400">
        <div className="container mx-auto  py-10">
          {/* footer div all */}
          <div className="flex justify-between flex-col md:flex-row  items-center md:items-start  md:gap-[5rem] text-left">
            {/* logo side */}
            <div className="flex flex-col w-1/2 md:p-0 py-4 gap-8">
              <Image
                src="/assets/images/Logo.png"
                alt="footer_logo"
                width={80}
                height={80}
              />
              <p className="text-[15px] font-medium text-white">
              Jl. Pelajar Pejuang 45 No.65 Lkr. Sel.,Lengkong, Kota Bandung, Jawa Barat 40263
              </p>
              {/* socials */}
              <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start">
                {iconsTab.map(({ icon }, index) => {
                  return (
                    <div
                      key={index}
                      className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-[#FFAA4D] hover:text-white"
                      style={{ transition: "all 0.3s" }}
                    >
                      {icon}
                    </div>
                  );
                })}
              </div>
              <p className="text-[16px] font-medium text-white">
                Privacy Policy | © {new Date().getFullYear()} <br />
                Design by{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="pt.lskk@gmail.com"
                >
                  PT. LSKK
                </a>
              </p>
            </div>
            <div className="flex flex-col gap-8 relative">
              <p className="text-[22px] text-white font-bold footer-main">Working Hours</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-[#FFAA4D]"></span>

              <p className="text-[16px]  text-white font-bold">
                Monday - Friday:
              </p>
              <p className="text-[16px] text-white font-medium">
                8:00am - 5:00pm
              </p>
              <p className="text-[16px] text-white font-bold ">
                Saturday - Sunday : Closed
              </p>
            </div>

            {/* middle div */}
            <span></span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;