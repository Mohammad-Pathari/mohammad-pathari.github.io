import React from 'react'
import './TrainingStyles.css'
import { Link } from 'react-router-dom'

import Pod from '../assets/aimlab.png'
import Moon from '../assets/training.jpg'

const Training = () => {
  return (
    <div className='training'>
        <div className='left'>
            <h1>Training</h1>
            <p>Valorant needs a whole lot of tactics and strategies. Without that you might be a hardstuck gold. Here I can train you to be the best among all your friends.
Accurate crosshair placement and perfect peeking can help make you the MVP in all your games.</p>
            <Link to='/contact'><button className='btn'>Contact</button></Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='image-stack top'>
                    <img src={Pod} className='img' alt=''/>
                </div>
                <div className='image-stack bottom'>
                    <img src={Moon} className='img' alt=''/>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Training