import React, { Component } from 'react'
import  Form  from '../components/Form'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'

export class Contact extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <HeroImage heading='CONTACT.' text='Contact Rayleigh.' />
        <Form />
        <Footer />

      </div>
    )
  }
}

export default Contact