import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaLinkedin,FaMailBulk, FaPhone, FaSearchLocation, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color : '#ffffff', marginRight: '2rem'}}/>
                
                    <div>
                    <p>Imperial Towers, Nibm 411060</p>
                    <h4>Pune, India</h4>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color : '#ffffff', marginRight: '2rem'}}/>+91-7798276953</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color : '#ffffff', marginRight: '2rem'}}/>mhmdpain@gmail.com</h4>

                </div>
            </div>
        <div className='right'>
            <h4>About me - Rayleigh</h4>
            <p>I have a long history of playing competitive CS. I have esea-main and advanced experience, level 10 on faceit and A+ on ESEA.
                I've played on sponsored teams and Intel featured my game-play in two commercials that aired on Dreamhack. Top Radiant player 4 times in a row.
                Current rank: Immortal 3 on solo queues.I hold my own and more.</p>
                <div className='social'>
                    <FaFacebook size={30} style={{color : '#ffffff', marginRight: '1rem'}}/>
                    <FaTwitter size={30} style={{color : '#ffffff', marginRight: '1rem'}}/>
                    <FaLinkedin size={30} style={{color : '#ffffff', marginRight: '1rem'}}/>
                </div>
            
        </div>           
        
        
        
            </div>


    </div>
  )
}

export default Footer