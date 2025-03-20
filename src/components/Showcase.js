import Image from 'next/image';
import React from 'react'
import Brand2 from '@/assets/svg/brand2.svg'
import Brand3 from '@/assets/svg/brand3.svg'
import Brand4 from '@/assets/svg/brand4.svg'
import Brand5 from '@/assets/svg/brand5.svg'
const Showcase = () => {
  return (
    <div className='showcase p-10'>
      <div className="container max-w-7xl mx-auto p-12 flex flex-col gap-4">
        <div className='flex flex-col gap-8'>
          <h1 className="font-bold text-[48px] leading-[54px] tracking-[0%] align-middle text-[#2C333D]">
            Istalgan qiyinchilikdagi va <br /> masshtabdagi obyektlar
          </h1>
          <h2 className="font-bold text-[28px] leading-[44px] tracking-[0%] align-middle text-[#2C333D]">
            Bizning masterlar ko'plab katta kampaniyalarning <br /> buyurtmalarini
            amalga oshirgan
          </h2>
        </div>

        <div className='flex items-center gap-16'>
            <Image src={Brand2} alt='brand2'/>
            <Image src={Brand3} alt='brand3'/>
            <Image src={Brand4} alt='brand4'/>
            <Image src={Brand5} alt='brand5'/>
            <Image src={Brand2} alt='brand2'/>
            <Image src={Brand3} alt='brand3'/>
        </div>

      </div>
    </div>
  );
}

export default Showcase