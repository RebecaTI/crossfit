import Image from 'next/image'
import React from 'react'
import { healthGoalImages } from './constants'
import Marquee from "react-fast-marquee";

export const HealthGoal = () => {

  return (
    <section className="flex bg-black relative z-10">

      <Marquee className='w-full h-full'>
        {/* <div className='flex flex-row' style={{ gap: 'calc(100vh / 6)' }}> */}
        <div className='flex flex-row' >
          {healthGoalImages.map((healthGoalImage) => (
            <div key={healthGoalImage.image} className="flex flex-col justify-center items-center relative h-[300px] w-full max-w-xs mr-25 lg:mr-40" >
              <div className='absolute top-6 -right-16  w-[60px] h-[60px]'>
                <Image
                  src='/images/arrow.svg'
                  alt='Arrow'
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex items-center justify-center mb-10 w-[110px] h-[110px] ">
                <Image
                  src={healthGoalImage.image}
                  alt={healthGoalImage.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-white">{healthGoalImage.alt}</p>
            </div>

          ))}
        </div>
      </Marquee>
    </section>
  )
}
