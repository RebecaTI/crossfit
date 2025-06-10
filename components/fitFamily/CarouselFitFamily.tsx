import * as React from "react"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { FitFamilyImages } from "./FitFamilyImages"
import Image from "next/image"

export function CarouselFitFamily() {
  return (
    <div className="w-[900px] m-auto d-flex justify-center items-center ">
      <Carousel
        opts={{
          align: "start",

        }}

      >
        <CarouselContent>
          {FitFamilyImages.map((FitFamilyImage, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <div key={FitFamilyImage.image} className="w-full overflow-hidden h-[400px]">
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
