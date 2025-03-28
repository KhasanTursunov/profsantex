import Image from "next/image";
import React from "react";
import Logo from "@/assets/img/logo.png";
import { IoIosMenu } from "react-icons/io";
const Header = () => {
  return (
    <div className="bg-[#E6EDF4] header top-0 left-0 z-50 sticky shadow-lg">
      <div className="container p-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <a href="/">
            <Image src={Logo} alt="logo" width={50} height={50} />
            </a>
          </div>
          <div className="flex gap-8 items-center">
            <h3
              className="font-bold text-[20px] leading-[18px] tracking-[0%] 
align-bottom text-black"
            >
              Uz
            </h3>
            <a href="https://t.me/khasan_nt">
              <button
                className="cursor-pointer w-[124px] h-[42px]  gap-[17px] 
bg-[#186FD4] rounded-[8px] font-bold text-[13px] leading-[18px] tracking-[0%] 
align-bottom text-white hover:text-[#186FD4] hover:bg-white hover:border-2 transition"
              >
                Bog'lanish
              </button>
            </a>
            <IoIosMenu className="cursor-pointer" size={32} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
