import Image from 'next/image'
import React from 'react'

const PowerQuote = () => {
  return (
    <section >
      <div className="bg-black">
        <div className="flex container mx-auto items-center h-[500] justify-center gap-20 text-gray-100">
          <div className="relative">
            <Image
              src="/plus.png"
              alt="plus sign"
              width={20}
              height={20}
              className='left-[-20] top-[0] absolute z-10'
            />
            <h3 className="font-yantramanav absolute top-[-20] left-[-30]  stroke-text font-extrabold text-6xl z-1">STRONG</h3>
            <h2 className="text-4xl font-bold z-10 uppercase relative">Be you, just stronger! </h2>
            <h2 className="text-4xl font-bold z-10 uppercase relative">Power is in you</h2>
            <p className="w-[400] text-gray-300 pt-4 tracking-wider font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis delectus, exercitationem.</p>
          </div>

          <Image
            src="/h1-img-1.png"
            alt="h1-img-1"
            width={400}
            height={400}
            className="Homem fazendo exercicio"
          />
        </div>
      </div>

      <div className="bg-[#131619]">
        <div className="flex container mx-auto items-center h-[500] justify-center gap-20 text-gray-100">

          <Image
            src="/h1-img-2.png"
            alt="dfdfdf"
            width={400}
            height={400}
            className="Homem sentado fazendo exercicio"
          />

          <div className="relative">
            <Image
              src="/plus.png"
              alt="plus sign"
              width={20}
              height={20}
              className='left-[-20] top-[0] absolute z-10'
            />
            <h3 className="font-yantramanav absolute top-[-20] left-[-30]  stroke-text font-extrabold text-6xl z-1">START</h3>
            <h2 className="text-4xl font-bold z-10 uppercase relative w-[400]">Today is the best day t start! </h2>
            <p className="w-[400] text-gray-300 pt-4 tracking-wider font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis delectus, exercitationem.</p>
          </div>


        </div>
      </div>
    </section>
  )
}

export default PowerQuote
