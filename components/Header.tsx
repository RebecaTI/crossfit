"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {

  const [isClick, setIsClick] = useState(false);
  const toggleNavbar = (): void => {
    setIsClick(!isClick)
  }

  return (
    <nav className="bg-black fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/#home">
                <Image
                  className="cursor-pointer"
                  src="/header-logo.png"
                  alt="Crossfit Logo"
                  width={100}
                  height={50}
                />
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <Link href="/#home" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                Home
              </Link>
              <Link href="/#events" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                Events
              </Link>
              <Link href="/#find-us" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                Find Us
              </Link>
              <Link href="/#join-us" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                Join Us
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleNavbar}>
              {isClick ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isClick && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="ml-4 flex items-center space-x-4">
              <Link href="/#home" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                Home
              </Link>
              <Link href="/#events" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                Events
              </Link>
              <Link href="/#find-us" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                Find Us
              </Link>
              <Link href="/#join-us" className="text-white hover:bg-white hover:text-black rounded-lg p-2">
                Join Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>


  )
}

export default Header
