import './Footerstyle.css'

import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'

const footer = () => {
    return (
      <div className='footer'> 
          <div className='footer-container'>
              <div className='left'>
                  <div className='location'>
                      <FaHome size={20} style={{color: 'white', marginRight: '2rem'}}  />
                      <div>
                        <p>Falcon Valley Colony.</p>
                        <p>Hyderabad.</p>
                      </div>
                  </div>
                  <div className='phone'>
                    <h4> <FaPhone size={20} style={{color: 'white', marginRight: '2rem'}}  />+91 8341506377</h4>
                  </div>
                  <div className='email'>
                    <h4> <FaMailBulk size={20} style={{color: 'white', marginRight: '2rem'}}  />anandsarthak652@gmail.com</h4>
                  </div>
              </div>

              <div className='right'>
                <h4>About the website.</h4>
                <p>This is my portfolio website, some of the contents of this site don't work. But don't worry that won't be a problem if the website was for you :D</p>
                <div className='social'>
                <FaFacebook size={20} style={{color: 'white', marginRight: '1rem'}}  />
                <FaTwitter size={20} style={{color: 'white', marginRight: '1rem'}}  />
                <FaLinkedin size={20} style={{color: 'white', marginRight: '1rem'}}  />
                </div>
              </div>
          </div>
      </div>
    )
  }

export default footer