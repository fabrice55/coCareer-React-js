import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Program from './Components/Program/Program'
import Pricing from './Components/Pricing/Pricing'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero/>
      <About setPlayState={setPlayState}/>
      <Program/>
      <Pricing/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
      
    </div>
  )
}

export default App
