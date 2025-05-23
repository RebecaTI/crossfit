import Image from 'next/image'
import React from 'react'
import ClientsForm from './constants/forms/clientsForm'

const JoinUs = () => {
  return (
    <section className="bg-[#131619]">
      <div className=" bg-[url('/background-join-us.svg')] bg-no-repeat bg-cover bg-center h-[300px] sm:h-[500px] flex justify-center items-center ">
        <div className="relative h-[200px] w-[200px] sm:h-[350px] sm:w-[350px]">

          <Image
            src='strong-man-join-us.svg'
            alt='Homem musculoso'
            // height={600}
            // width={900}
            fill
            className='object-cover'
          />
        </div>

      </div>
      <div className=" flex relative justify-center items-center">
        <div className="absolute top-[-15] sm:top-[-50]">

          <h1 className="font-extrabold text-3xl sm:text-8xl lg:text-9xl tracking-wide text-white mr-8 ">Join us</h1>
          <div className="relative h-[40px] w-[40px] left-30 bottom-10 sm:h-[70px] sm:w-[70px] sm:left-90 lg:left-120 lg:bottom-20 sm:bottom-18">
            <Image
              src="arrow.svg"
              alt='Seta'
              fill
              className='object-cover'
            />
          </div>
        </div>
      </div>

      <ClientsForm />
    </section>
  )
}

export default JoinUs
