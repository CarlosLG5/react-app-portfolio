import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                Building impactful and innovative software has been a driving force throughout my academic and professional journey. With a background in engineering and a Bachelor’s in Computer Science from the University of Massachusetts Dartmouth (May 2025), I’ve led teams, shipped full-stack applications, and implemented machine learning models to solve real-world problems. Whether I’m developing mobile apps in Flutter or deploying backend services with Node.js, I’m always focused on writing clean, scalable code that delivers results.
                </p>
                <p>
                I’m Carlos Lazcano — a builder, problem solver, and soon-to-be software engineer who’s ready to contribute to forward-thinking development teams.
                </p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About