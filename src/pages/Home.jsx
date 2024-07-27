// eslint-disable-next-line no-unused-vars
import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Qualities from '../components/Qualities'
import OurDishes from '../components/Ourdishes'
import WhoWeAre from '../components/WhoWeAre'
import Team from '../components/Team'
import Reservation from '../components/Reservation'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Qualities/>
        <OurDishes/>
        <WhoWeAre/>
        <Team/>
        <Reservation/>
        <Footer/>
    </div>
  )
}

export default Home