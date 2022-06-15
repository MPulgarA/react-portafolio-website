import React from 'react'

import {
  Header,
  Nav,
  About,
  Experience,
  Services,
  Portafolio,
  Testimonials,
  Contact,
  Footer
} from './components/index';


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Contact />
      {/* <Services /> */}
      <Portafolio />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App