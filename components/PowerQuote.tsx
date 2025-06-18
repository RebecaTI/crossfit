import Image from 'next/image'
import React from 'react'

const PowerQuote = () => {
  return (
    <section >
      <div className="bg-black py-10 ">
        <div className="hidden lg:flex container mx-auto items-center h-[500] justify-center gap-20 text-gray-100">
          <div className="relative">
            <Image
              src="/plus.png"
              alt="plus sign"
              width={20}
              height={20}
              className='left-[-20] top-[0] absolute z-10'
            />
            <h3 className="font-yantramanav absolute top-[-20] left-[-30]  stroke-text font-extrabold text-6xl z-1">STRONG</h3>
            <h2 className="text-4xl font-bold z-10 uppercase relative w-[400]">Be you, just stronger!</h2>
            <h2 className="text-4xl font-bold z-10 uppercase relative w-[400]">Power is in you!</h2>
            <p className="w-[400] text-gray-300 pt-4 tracking-wider font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis delectus, exercitationem.</p>
          </div>

          <Image
            src="/h1-img-1.png"
            alt="dfdfdf"
            width={400}
            height={400}
            className="Homem sentado fazendo exercicio"
          />
        </div>
        <div className=" lg:hidden flex flex-col mx-auto items-center justify-center text-gray-100 ">
          <div className="relative text-center">
            <div className="relative w-[40px] h-[40px] left-13 top-13 sm:top-15">
              <Image
                src="/plus.png"
                alt="sinal de mais"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-yantramanav absolute top-5 left-18 sm:top-0 sm:left-10  stroke-text font-extrabold text-4xl sm:text-8xl z-1">STRONG</h3>
            <h2 className="text-[1.1rem] sm:text-4xl font-bold z-10 uppercase relative">Be you, just stronger! </h2>
            <h2 className="text-2xl sm:text-4xl font-bold z-10 uppercase relative">Power is in you</h2>
            <p className="w-[290px] sm:w-[640px] text-gray-300 pt-4 tracking-wider font-light px-15 text-left pb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis delectus, exercitationem.</p>
          </div>

          <div className="relative w-[290px] h-[400px] ">
            <Image
              src="/h1-img-1.png"
              alt="homem fazendo exercicio"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* <div className="bg-[#131619] py-10">
        <div className="hidden lg:flex container mx-auto items-center h-[500] justify-center gap-20 text-gray-100">

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
        <div className="lg:hidden flex flex-col mx-auto items-center justify-center text-gray-100 ">
          <div className="relative text-center">
            <div className="relative w-[40px] h-[40px] left-13 top-13 sm:top-15">
              <Image
                src="/plus.png"
                alt="sinal de mais"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-yantramanav absolute top-5 left-18 sm:top-0 sm:left-10  stroke-text font-extrabold text-4xl sm:text-8xl z-1">START</h3>
            <h2 className="text-[1.1rem] sm:text-4xl font-bold z-10 uppercase relative">Today is the best day t start! </h2>
            <p className="w-[290px] sm:w-[640px] text-gray-300 pt-4 tracking-wider font-light px-15 text-left pb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis delectus, exercitationem.</p>
          </div>

          <div className="relative w-[290px] h-[400px] ">
            <Image
              src="/h1-img-2.png"
              alt="homem fazendo exercicio"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div> */}
    </section>
  )
}

export default PowerQuote
