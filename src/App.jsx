import { useState } from 'react'
import React, { useEffect } from "react";
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import AOS from "aos";


function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  const [count, setCount] = useState(0)

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Navbar/>
      <HeroSection />
      <FeaturesSection />
    </>
  )
}

export default App
