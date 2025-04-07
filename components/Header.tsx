import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className=" mx-auto flex items-center justify-between p-4 text-white fixed top-0 left-0 right-0 background-page z-10 h-20 bg-[#131619">
      <Image
        className="cursor-pointer"
        src="/header-logo.png"
        alt="Crossfit Logo"
        width={100}
        height={50}
      />

      <ul className="flex gap-4">
        <li><Link href="/#home">Home</Link></li>
        <li>Events</li>
        <li>Find Us</li>
        <li>Join Us</li>
      </ul>

      <button className="cursor-pointer uppercase text-black bg-white px-4 py-2 rounded-full hover:bg-gray-200 transition duration-300 ease-in-out font-bold">
        Book Now
      </button>
    </header>

  )
}

export default Header
