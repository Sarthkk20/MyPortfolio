import React from 'react'

import AbouContent from '../components/AbouContent'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'

const About = () => {
  return (
    <div>
        <Navbar />
        <Heroimg2 heading = 'ABOUT' text = 'Friendly Full Stack Developer' />
        <AbouContent />
        <Footer />
    </div>
  )
}

export default About