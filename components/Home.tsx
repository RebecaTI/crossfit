import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <section className="pt-96  h-screen items-end bg-[#131619] ">
      <div className="flex gap-5 items-end">
        <Image
          src="/arrow2.png"
          alt="events arrow"
          width={100}
          height={50}
        />
        <div className="flex-col ">
          <h2 className="">NEW EVENT</h2>
          <h2>COMMING UP / JUNE 7 - 13</h2>
        </div>
      </div>
      <h1 className="text-[16rem] font-heebo font-bold">CROSSFIT</h1>

    </section>
  )
}

export default Home
