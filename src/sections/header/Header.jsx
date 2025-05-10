import { useEffect } from 'react'
import HeaderImage from '../../assets/header1.jpg'
import data from './data'
import './header.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Header = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3 data-aos="fade-up">Carlos Lazcano</h3>
        <p data-aos="fade-up">
       I'm an aspiring Software Engineer with a B.S. in Computer Science (May 2025) and hands-on experience in full-stack development, machine learning, and Agile project leadership. Proven ability to deliver high-impact mobile and web applications using modern frameworks like Flutter and MERN. Eager to contribute to innovative engineering teams in real-world environments.
        </p>
        <div className="header__cta" data-aos="fade-in">
          <a href="#contact" className='btn primary'>Let's Talk</a>
          <a href="#portfolio" className='btn light'>My Work</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header