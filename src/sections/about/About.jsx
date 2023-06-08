import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
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
                I began my academic journey studying Fine Arts at UPV, where I discovered a deep appreciation 
                for art and aesthetics. However, as I continued to explore my passions, I realized the immense 
                potential of coding and web development. Seeking to expand my skills and knowledge, I decided 
                to pursue coding at ESAT.</p>
                <p>Through dedicated learning and hands-on projects, I've developed a 
                solid foundation in HTML, CSS, and JavaScript, allowing me to create visually appealing websites. 
                I'm constantly eager to learn and grow in this field, and I'm excited to collaborate and 
                contribute to bringing your digital vision to life.</p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About