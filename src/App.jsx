import Navbar from './sections/navbar/Navbar'
import Header from './sections/header/Header'
import About from './sections/about/About'
import Services from './sections/services/Services'
import Portfolio from './sections/portfolio/Portfolio'

import Contact from './sections/contact/Contact'
import Footer from './sections/footer/Footer'
import FloatingNavBar from './sections/floating-nav/FloatingNav'
import Theme from './theme/Theme'
import { useThemeContext } from './context/theme-context'
import {useRef, useState, useEffect} from 'react'


const App = () => {
  

  const {themeState} = useThemeContext();
  const mainRef = useRef();
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const[siteYPosition, useSiteYPosition] = useState(0);

  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  }

  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  }

  // Check if floating nav should be shown or hidden

  const floatingNavToggleHandler = () => {
    // Check if we scrolled up or down at least 20px
    if(siteYPosition < (mainRef?.current?.getBoundingClientRect().y -20) || siteYPosition > (mainRef?.current?.getBoundingClientRect().y +20)){
      showFloatingNavHandler();
    }else{
      hideFloatingNavHandler();
    }

    setShowFloatingNav(mainRef?.current?.getBoundingClientRect().y);

  }

  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 2000);

    // Cleanup Function
    return() => clearInterval(checkYPosition);
  }, [siteYPosition])



  return (
    <main className={`${themeState.primary} ${themeState.background}`} ref={mainRef}>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Portfolio/>
      
      <Contact/>
      <Footer/>
      <Theme/>

      {showFloatingNav && <FloatingNavBar/>}



    </main>
  )
}

export default App