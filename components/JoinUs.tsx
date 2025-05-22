import Image from 'next/image'
import React from 'react'
import ClientsForm from './constants/forms/clientsForm'


const JoinUs = () => {
  return (
    <section className="bg-[#131619]">
      <div className=" bg-[url('/background-join-us.svg')] bg-no-repeat bg-cover h-[900px] flex justify-center items-center relative">
        <Image
          src='strong-man-join-us.svg'
          alt='Homem musculoso'
          height={600}
          width={900}
          className=' '
        />

        <div className=" flex absolute bottom-[-50] justify-center items-center">
          <h1 className="font-extrabold text-9xl tracking-wide text-white mr-8">Join us</h1>
          <Image
            src="arrow.svg"
            alt="Seta"
            height={100}
            width={100}
          />
        </div>
      </div>

      <ClientsForm />
    </section>
  )
}

export default JoinUs
