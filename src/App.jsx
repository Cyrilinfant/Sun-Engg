import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Mission from './components/Mission/Mission'
import Title from './components/Title/Title'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

const App = () => {

  const [palyState ,setPlayState] =useState(false);



  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle = 'Our Values' title= 'Why Choose Us'/>
        <Mission/>
        <About setPlayState={setPlayState}/>
        <Title subTitle = '100+ projects done' title= 'Our Projects'/>
        <Projects/> 
        <Title subTitle = 'Contact Us' title= 'Get in Touch'/>
        <Contact/>  
        <Footer/>
      </div>
      <VideoPlayer palyState={palyState}  setPlayState={setPlayState}/>
      
    </div>
  )
}

export default App