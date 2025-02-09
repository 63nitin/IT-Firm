import './App.css'
import { BrowserRouter } from 'react-router-dom'

//importing Components

import Service from './Components/Services'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Footer from './Components/Footer'
import HowItWorks from './Components/HowItWorks'
import WhyChooseUs from './Components/WhyChooseUs'
import ContactUs from './Components/Contact'


function App() {

  return (
    <>
    <Navbar />
   <div>
      {/* Navbar */}

      {/* Sections */}
      <section id="home">
      <Hero/>
      </section>

      <section id="about">
      <About/>
      </section>

      <section id="HowItWorks">
      <HowItWorks />
      </section>

      <section id="Services">
      <Service/>
      </section>

      <section id="WhyChooseUs">
      <WhyChooseUs/>
      </section>

      <section id="contact">
      <ContactUs/>
      </section>
    </div>
    
    <Footer/>
    </>
  )
}

export default App
