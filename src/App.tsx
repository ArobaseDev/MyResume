
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-icons/font/bootstrap-icons.css'

import Swiper from 'swiper/bundle';


import PureCounter from '@srexi/purecounterjs'
import AOS from 'aos/dist/aos.js'
import 'aos/dist/aos.css'


//import 'glightbox/dist/css/glightbox.min.css'

import { useEffect } from 'react'

import Header from './components/Header'
import Hero from './components/Hero'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
 
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, []);

  useEffect(() => {
    new PureCounter();
},[])



  return (
    <>
    <i className="bi bi-list mobile-nav-toggle d-lg-none"></i>
      <Header/>
      <Hero/>
      <Main />
      <Footer/>
      {/* <div id="preloader"></div> */}
      <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
    </>
  )
}

export default App
