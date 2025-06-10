import React from 'react'
import FitFamilyTitle from './FitFamilyTitle'
import { CarouselFitFamily } from './CarouselFitFamily'
import ImcSection from './ImcSection'

const FitFamilySection = () => {
  return (
    <section className='bg-[rgb(19,22,25)] m-auto'>
      <FitFamilyTitle />
      <CarouselFitFamily />
      <ImcSection />
    </section>
  )
}

export default FitFamilySection
