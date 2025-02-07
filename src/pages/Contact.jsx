import React from 'react'
import { Container } from "react-bootstrap";
import Particle from '../components/Particle';
import Social from '../components/Contact/Social';
import ContactInfo from '../components/Contact/ContactInfo'

const Contact = () => {
  return (
    <Container style={{padding: '60px'}}>
      <Particle />
      <ContactInfo />
      {/* <ContactForm /> */}
      <Social />
    </Container>
  )
}

export default Contact