import React from 'react'
import FitFamilyTitle from './FitFamilyTitle'
import { CarouselFitFamily } from './CarouselFitFamily'
import ImcSection from './ImcSection'

const FitFamilySection = () => {
  return (
    <section className='bg-[rgb(19,22,25)] m-auto px-10 pb-10'>
      <FitFamilyTitle />
      <CarouselFitFamily />
      <ImcSection />
    </section>
  )
}

export default FitFamilySection
