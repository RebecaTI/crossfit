"use client"

import Image from 'next/image'
import React from 'react'
import FormFitFamily from './FormFitFamily'
import TabelaImc from './TabelaImc'

const ImcSection = () => {

  return (
    <div className="pt-4 sm:grid sm:grid-rows-2 lg:grid-cols-2 mx-auto justify-center text-gray-100">
      <div>
        <div className="relative">
          <Image
            src="/plus.png"
            alt="plus sign"
            width={20}
            height={20}
            className='left-[-20] top-[0] absolute z-10'
          />
          <h3 className="font-yantramanav absolute bottom-12 left-0  stroke-text font-extrabold text-8xl z-1">BMI</h3>
          <h2 className="text-4xl font-bold z-10 relative">INPUT YOUT BMI</h2>
          <p className=" text-gray-300 pt-2 pb-5 tracking-wider font-light text-center w-[350px]">Duo graece ponderum ne, ei mel aliquando. Pro te tamquam nonumes, nam no nemore epicurei</p>
        </div>

        <FormFitFamily />
      </div>

      <div>
        <div className="h-[600px] w-[600px] bg-black rounded-[100%]">
          <TabelaImc />
        </div>
      </div>
    </div>
  )
}

export default ImcSection
