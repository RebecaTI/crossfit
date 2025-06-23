import Image from 'next/image'
import React from 'react'
import { healthGoalImages } from './constants'
// import Marquee from "react-fast-marquee";
import { Marquee } from "@/components/magicui/marquee";

export const HealthGoal = () => {

  return (
    <section className="flex bg-black relative z-10">

      <Marquee className='w-full h-full'>
        <div className='flex flex-row' >
          {healthGoalImages.map((healthGoalImage) => (
            <div key={healthGoalImage.image} className="flex flex-col justify-center items-center relative h-[300px] w-full max-w-xs mr-25 lg:mr-40" >
              <div className='absolute top-14 -right-5  w-10 h-[40px] sm:w-[50px] sm:h-[50px] sm:top-12'>
                <Image
                  src='/images/arrow.svg'
                  alt='Arrow'
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex items-center justify-center mb-30 w-[20px] h-[20px] sm:w-[80px] sm:h-[80px]">
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
