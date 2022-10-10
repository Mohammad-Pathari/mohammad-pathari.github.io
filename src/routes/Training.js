import React, { Component } from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import TrainingSection from '../components/Training'
export class Training extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <HeroImage heading='TRAINING.' text='Let me help you with some tips & tricks.' />
        <TrainingSection />
        <Footer />
      </div>
    )
  }
}

export default Training