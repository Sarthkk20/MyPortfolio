import './HeroimgStyle.css'
import React from 'react'
import HomeImg from '../assets/bg-img1.jpg'
import { Link } from 'react-router-dom'

function Heroimg() {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src= { HomeImg } alt='homeimg' />
        </div>
        <div className='content'>
            <p>HI! WELCOME TO MY PORTFOLIO.</p>
            <h1>Full Stack developer.</h1>
            <div>
                <Link to = '/project' className = 'btn'>Projects</Link>
                <Link to = '/Contact' className = 'btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg