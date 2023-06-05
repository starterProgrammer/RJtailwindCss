import React from 'react'
import Advertise from './components/Advertise'
import Banner from './components/Banner'
import Explore from './components/Explore'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Memory from './components/Memory'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import { memory, hero, placesAPI, brands, pricingapi, bannerAPI, footerAPI } from './data/travigodata'

const App = () => {
  const title = "Explore Beauty Things"
  return (
    <>
      <Navbar />
      <Hero hero={hero} />
      <Memory memory={memory} />
      <Explore title={title} placesAPI={placesAPI} />
      <Advertise brands={brands} />
      <Pricing pricingapi={pricingapi} />
      <Banner bannerAPI={bannerAPI} />
      <Footer footerAPI={footerAPI} />
    </>
  )
}

export default App
