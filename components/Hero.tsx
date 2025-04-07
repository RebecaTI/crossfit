import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className="pt-50 h-screen items-end bg-[#131619] ">
      <div className="flex gap-5 items-end pl-40 ">
        <Image
          src="/arrow2.png"
          alt="events arrow"
          width={100}
          height={50}
        />
        <div className="flex-col font-bold">
          <h2 className="">NEW EVENT</h2>
          <h2>COMMING UP / JUNE 7 - 13</h2>
        </div>
      </div>
      <h1 className="text-[16rem] font-heebo font-bold text-center relative bottom-20">CROSSFIT</h1>

    </section>
  )
}

export default Hero
