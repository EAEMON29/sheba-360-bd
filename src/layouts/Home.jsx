import React from 'react'; 
import ImageCarousel from "../components/ImageCarousel"; 
import ServiceGallary from '../components/ServiceGallary'; 
import HowItWorks from '../components/HowItWorks'; 
import WhyChooseUs from '../components/WhyChooseUs'; 
import MeetProfessionals from '../components/MeetProfessionals'; 
import OurServiceAreas from '../components/OurServiceAreas'; 
import FAQSection from '../components/FAQSection'; 
import Testimonials from '../components/Testimonials'; 
import Footer from '../components/Footer'; 
function Home() 
{ return ( <> 
<>  

</> <ImageCarousel /> 
<main> 
  <ServiceGallary /> 
<HowItWorks /> 
<MeetProfessionals /> 
<OurServiceAreas /> 
<FAQSection /> 
<Testimonials /> 
</main> <Footer /> </> ); } 
export default Home;