import React from 'react'
import Appointment from '../../components/sections/ForHome/Appointment'
import Banner from '../../components/sections/ForHome/Banner'
import Card from '../../components/sections/ForHome/Card'
import Contact from '../../components/sections/ForHome/Contact'
import Service from '../../components/sections/ForHome/Service'
import Testimonials from '../../components/sections/ForHome/Testimonials'

const Home = () => {
  return (
    <>
      <Banner />
      <Card />
      <Service />
      <Appointment/>
      <Testimonials />
      <Contact />
    </>
  )
}

export default Home