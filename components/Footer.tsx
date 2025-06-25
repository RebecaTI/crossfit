import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <section className="flex flex-col pt-10 align-items-center px-10 text-gray-400">
      <div className="flex flex-col">
        <Image
          src="kropp-footer-logo.svg"
          alt="Kropp Logo"
          width={100}
          height={100}
          className=" mx-auto mb-4"
        />
        <h2 className="text-center">please feel free to send us an e-mail at  For any additional inquiries</h2>
      </div>
      <div className="pt-10">

        <div className=" pb-5">
          <h1 className="text-center font-bold text-white font-mono">ABOUT</h1>
          <p>Shape up yur site with Kropp, a theme especially made for fitness & gym websites.</p>
        </div>

        <div className="py-5">
          <h1 className="text-center font-bold text-white font-mono">WORKING HOURS</h1>
          <ul className="flex flex-col gap-3">
            <li>
              <h2>Monday - Friday</h2>
              <p>05:30 - 24:00</p>
            </li>
            <li>
              <h2>Weekdays</h2>
              <p>00:00 - 24:00</p>
            </li>
          </ul>
        </div>

        <div className="py-5">
          <h1 className="text-center font-bold text-white font-mono">LOCATION</h1>
          <p>1234 Street Name, City, State, 12345</p>
          <p>crosfit@fit.com</p>
          <p>+1 234 567 890</p>
        </div>

        <div className="py-5">
          <h1 className="flex font-bold text-white font-mono">
            START NOW
            <Image
              src="cabeica-p-baixo-seta.svg"
              alt="Arrow Down"
              width={20}
              height={20}
              className="ml-2"
            />
          </h1>


          <ul className="flex gap-4">
            <li>
              <Image
                src="tiktok.svg"
                alt="tiktok"
                width={20}
                height={20}
              />
            </li>
            <li>
              <Image
                src="youtube.svg"
                alt="youtube"
                width={20}
                height={20}
              />
            </li>
            <li>
              <Image
                src="facebook.svg"
                alt="facebook"
                width={20}
                height={20}
              />
            </li>
            <li>
              <Image
                src="instagram.svg"
                alt="instagram"
                width={20}
                height={20}
              />
            </li>
            <li>
              <Image
                src="twitter.svg"
                alt="twitter"
                width={20}
                height={20}
              />
            </li>
          </ul>
        </div>
      </div>

    </section>
  )
}

export default Footer
