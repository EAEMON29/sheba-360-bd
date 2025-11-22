import React from 'react'
import Navbar from '../components/Navbar'
import ImageCarousel from "../components/ImageCarousel";
import ServiceGallary from '../components/ServiceGallary';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import MeetProfessionals from '../components/MeetProfessionals';





function Home() {
  return (
    <>
      <Navbar />

      <ImageCarousel />

      <main>
        <ServiceGallary />
        <HowItWorks/>
        <MeetProfessionals/>
        <WhyChooseUs/>
      </main>
    </>
  )
}

export default Home
