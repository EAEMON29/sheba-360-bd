import React from 'react'
import Navbar from '../components/Navbar'
import ImageCarousel from "../components/ImageCarousel";
import ServiceGallary from '../components/ServiceGallary';
import HowItWorks from '../components/HowItWorks';

function Home() {
  return (
    <>
      <Navbar />

      <ImageCarousel />

      <main>
        <ServiceGallary />
        <HowItWorks/>
      </main>
    </>
  )
}

export default Home
