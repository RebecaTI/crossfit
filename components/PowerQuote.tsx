import Image from 'next/image'
import React from 'react'

const PowerQuote = () => {
  return (
    <section>
      <div className="flex relative container mx-auto items-center">
        <h3 className="font-yantramanav absolute top-[-20] left-[-20] text-black stroke-text font-extrabold text-6xl z-0">STRONG</h3>
        <Image
          src="/plus.png"
          alt="plus sign"
          width={25}
          height={25}
          className='relative bottom-5 '
        />
        <div className="z-10">
          <h2 className="text-4xl font-bold ">Be you, just stronger! Power is in you</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis delectus, exercitationem ipsum  doloremque.</p>
        </div>

        <Image
          src="/h1-img-1.png"
          alt="h1-img-1"
          width={400}
          height={400}
          className="absolute right-0 top-[-80]"
        />
      </div>
    </section>
  )
}

export default PowerQuote
