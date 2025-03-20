import Image from "next/image";
import React from "react";
import Xizmat7 from "@/assets/svg/xizmat7.svg";
import Xizmat2 from "@/assets/svg/xizmat2.svg";
import Xizmat3 from "@/assets/svg/xizmat3.svg";
import Xizmat4 from "@/assets/svg/xizmat4.svg";
import Xizmat5 from "@/assets/svg/xizmat5.svg";
import Xizmat6 from "@/assets/svg/xizmat6.svg";

const Hamkorlik = () => {
  return (
    <>
    <div className="container  p-6 max-w-7xl mx-auto">
      <div className="h-[500px] hamkorlik">
        <div className="my-20 title">
          <h2 className="align-middle text-[#2C333D] text-[33px] font-bold leading-[31px] tracking-[0%]">
            Hamkorlik Takliflari
          </h2>
        </div>

        <div className="flex flex-col gap-2">
          <div className="posoitionn relative">
            <div className="absolute left-2 top-10">
              <h1 className="text-[#2C333D] text-[22px] font-medium leading-[26px] tracking-[0%]">
                Santexnika va <br /> maishiy texnika <br /> do‘konlariga
              </h1>
            </div>
          </div>

          <div className="posoitionn2 relative">
            <div className="absolute left-2 top-15">
              <h1 className="text-[#2C333D] text-[22px] font-medium leading-[26px] tracking-[0%]">
                Qurilish <br /> kompaniyalariga
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Hamkorlik;
