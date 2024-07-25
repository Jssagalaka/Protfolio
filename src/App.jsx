import { useState } from 'react'

import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'

import Skills from './Components/Skills'
import Fotter from './Components/Fotter'
import Contact from './Components/Contact'
import { Toaster } from 'react-hot-toast'
import Projects from './Components/Projects'

function App() {


  return (
    <>
    <div>
    <Navbar/>
     <Home/>
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
     <Fotter/>
    </div>
    <Toaster/>
    </>
  )
}

export default App
