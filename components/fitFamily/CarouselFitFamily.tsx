"use client"

import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { FitFamilyImages } from "./FitFamilyImages"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

export function CarouselFitFamily() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )

  return (
    <div className="w-[290px] sm:w-[550px] md:w-[800px] lg:w-[1100px] m-auto d-flex justify-center items-center ">
      <Carousel
        plugins={[plugin.current]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {FitFamilyImages.map((FitFamilyImage, index) => (
            <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
              <div className="p-1">
                <div key={FitFamilyImage.image} className="w-full overflow-hidden h-[150px] sm:h-[200px]">
                  <Image
                    src={FitFamilyImage.image}
                    alt={FitFamilyImage.alt}
                    height={400}
                    width={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
