import Image from 'next/image'
import React from 'react'
import { healthGoalImages } from './constants'
import Marquee from "react-fast-marquee";

export const HealthGoal = () => {

  return (
    <section className="flex bg-black py-16">


      <Marquee className='w-full h-full'>
        <div className='flex flex-row' style={{ gap: 'calc(100vh / 6)' }}>
          {healthGoalImages.map((healthGoalImage) => (
            <div key={healthGoalImage.image} className="flex flex-col justify-center items-center relative h-[300px] w-full max-w-xs" >
              <div className='absolute -top-6 -right-16'>
                <Image
                  src='/images/arrow.svg'
                  alt='Arrow'
                  width={80}
                  height={80}
                />
              </div>

              <div className="flex items-center justify-center mb-6">
                <Image
                  src={healthGoalImage.image}
                  alt={healthGoalImage.alt}
                  width={140}
                  height={121}
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
