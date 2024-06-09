import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import PricingCart from '../components/PricingCart'
import WorkCard from '../components/Work'

const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimg2 heading = "PROJECTS." text = "Some of my most recent works!"/>
      <WorkCard />
      <PricingCart />
      <Footer />
    </div>
  )
}

export default Project