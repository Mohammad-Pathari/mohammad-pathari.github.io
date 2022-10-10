import React from 'react'
import { Link } from 'react-router-dom'
import './PricingStyles.css'

const Pricing = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3>- Ascendant -</h3>
                <span className='bar'></span>
                <p className='btc'>₹5000</p>
                <p>- 5 days duration -</p>
                <p>- No refund -</p>
                <p>- Solo Queue -</p>
                <p>- Ascendant 2 -</p>
                <Link to ='/contact' className='btn'>Book</Link>
            </div>
            <div className='card'>
                <h3>- Immortal -</h3>
                <span className='bar'></span>
                <p className='btc'>₹9000</p>
                <p>- 8 days duration -</p>
                <p>- No refund -</p>
                <p>- Solo Queue -</p>
                <p>- Immortal 2 -</p>
                <Link to ='/contact' className='btn'>Book</Link>
            </div>
            <div className='card'>
                <h3>- Radiant -</h3>
                <span className='bar'></span>
                <p className='btc'>₹15000</p>
                <p>- 12 days duration -</p>
                <p>- No refund -</p>
                <p>- Solo Queue -</p>
                <p>- Radiant 450  -</p>
                <Link to ='/contact' className='btn'>Book</Link>
            </div>
        </div>


    </div>
  )
}

export default Pricing