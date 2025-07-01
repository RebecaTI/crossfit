import React from 'react'

import Image from 'next/image'
import HeroParticles from './HeroParticles'

export default function HeroSection() {
  return (
    <div className="relative">
      <div className="absolute top-0 w-full ">
        <section className="py-40 sm:flex sm:flex-col sm:justify-center sm:items-center bg-[#131619]  text-gray-200 h-[400px] sm:h-[700px]">
          <div className="flex justify-center items-center">
            <div className="relative w-[100px] h-[50px] sm:w-[80px] lg:w-[120px] text-center">
              <Image
                src="/arrow.svg"
                alt="events arrow"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex-col font-bold text-sm sm:text-[1.5rem] lg:text-[2.5rem] lg:pl-2">
              <h2 className="">NEW EVENT</h2>
              <h2>COMMING UP / JUNE 7 - 13</h2>
            </div>
          </div>
          {/* text-[15rem] */}
          <h1 className="text-[3rem] sm:text-[8rem] lg:text-[12rem] font-heebo font-bold text-center relative  pt-3">CROSSFIT</h1>

          {/* <Button /> */}

        </section >
      </div>
      <HeroParticles />
    </div>
  )
}
