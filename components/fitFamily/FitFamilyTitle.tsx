import Image from 'next/image'
import React from 'react'

const FitFamilyTitle = () => {
  return (
    <div className=" flex mx-auto items-center  justify-center   text-gray-100 pt-10">
      <div className="relative">
        <Image
          src="/plus.png"
          alt="plus sign"
          width={20}
          height={20}
          className='left-[-20] top-[0] absolute z-10'
        />
        <h3 className="font-yantramanav absolute top-[-30] left-14 sm:left-30  stroke-text font-extrabold text-6xl z-1">PART</h3>
        <h2 className="text-2xl font-bold z-10 relative text-center">BE A PART OF OUR FIT FAMILY</h2>
        <p className=" text-gray-300 pt-2 pb-5 tracking-wider font-light text-center">TRAINING HELPS YOU THINK AND FEEL BETTER JOIN US!</p>
      </div>
    </div>
  )
}

export default FitFamilyTitle
