import './about.css'
import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import {HIDownload, HiDownload} from 'react-icons/hi'

const About = () => {
    return (
        <section id="about">
            <div className="container about__container">
                <div className="about__left">
                    <div className="about__protrait">
                        <img src={AboutImage} alt="About image" />
                    </div>
                </div>
                <div className="about__right">
                    <h2>About me</h2>
                    <div className="about__cards"></div>
                    <p>
                        Otra parrafada sobre lo mucho que me gusta hacer webs y los muchos clientes satisfechos que tengo.
                    </p>

                    <p>
                        Más parafadas. de verdad la gente se lee todo esto? Menudo tostón.
                    </p>
                    <a href={CV} download className='btn primary'>Download CV<HiDownload/></a>
                </div>
            </div>
        </section>
    )
}

export default About 