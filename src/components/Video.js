import React from 'react'
import './VideoStyles.css'
import spaceVideo from '../assets/valorant.mp4'
import { Link } from 'react-router-dom'

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={spaceVideo} type='video/mp4' />
        </video>
        <div className='content'>
            <h1>ValoTop. Fragger.</h1>
            <p>World's best valorant flutter.</p>
        
        <div>
            <Link to='/training' className='btn'>Training</Link>
            <Link to='/contact' className='btn btn-light'>Launch</Link>
        </div>

    </div>
    </div>
  )
}

export default Video