import './AboutContentStyle.css'

import React from 'react'
import { Link } from 'react-router-dom'
import abt1 from '../assets/abt1.jpg'
import abt2 from '../assets/abt2.webp'

const AbouContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who am I?</h1>
            <p>I'm a fullStack developer. I create responsive, secure and fully functional websites for my clients</p>
            <Link to= '/Contact'>
              <button className='btn'>Contacts</button>
            </Link>
        </div>
        

        <div className='right'>
          <div className='img-container'>
            <div className='img-stack top'>
              <img src= {abt1} className='img' alt='true' />
            </div>
            <div className='img-stack bottom'>
              <img src= {abt2} className='img' alt='true' />
            </div>
          </div>
        </div>
    </div>
  )
}

export default AbouContent