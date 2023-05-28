import Navbar from './sections/navbar/NavBar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import Contact from './sections/contact/Contact';

import {useRef, useState, useEffect} from 'react'

const App = () => {

  return (
    <main>
        <Navbar/>
        <Header/>
        <About/>
        <Services/>
        <Portfolio/>
        <Contact/>
       
    </main>
  )
}

export default App