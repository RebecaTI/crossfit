"use client"

import Image from 'next/image'
import React from 'react'
import FormFitFamily from './FormFitFamily'
import TabelaImc from './TabelaImc'

const ImcSection = () => {

  return (
    <div className="pt-10 sm:grid sm:grid-rows-1 lg:grid-cols-2 mx-auto justify-center lg:px-10 text-gray-100">
      <div className="container-pai">
        <div className="relative">
          <Image
            src="/plus.png"
            alt="plus sign"
            width={20}
            height={20}
            className='left-10 sm:left-42 md:left-62 lg:left-[-22] top-[0] absolute z-10'
          />
          <h3 className="font-yantramanav absolute bottom-20 left-35 sm:bottom-20 md:bottom-14 lg:bottom-19 sm:left-60 md:left-78 lg:left-[-40] stroke-text font-extrabold text-6xl z-1">BMI</h3>
          <h2 className="text-2xl font-bold z-10 relative pl-5 left-20 sm:pl-50 lg:pl-0 md:left-20 lg:left-0">INPUT YOUT BMI</h2>
          <p className=" text-gray-300 pt-2 pb-5 tracking-wider font-light text-center ">Duo graece ponderum ne, ei mel aliquando. Pro te tamquam nonumes, nam no nemore epicurei</p>
        </div>

        <FormFitFamily />
      </div>

      <div>
        <div className="flex justify-center items-center ">
          <TabelaImc />
        </div>
      </div>
    </div>
  )
}

export default ImcSection
