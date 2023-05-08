import HeaderImage from '../../assets/header.jpg'
import './header.css'
import data from './data'

const Header = () => {
    return (
        <header id="header" >
            <div className="container header__container">
                <div className="header__profile">
                    <img src={HeaderImage} alt="Header portrait" />
                </div>
            <h3>Nombre</h3>
            <p>Parrafada sobre lo guay que soy como programadora, que soy tan buena que si me da la gana te programo la nevera para hacerte unas lentejas</p>
            <div className="header__cta">
                <a href="#contact">Contact</a>
                <a href="#portfolio">Portfolio</a>
            </div>
            <div className="header__socials">
                {
                    data.map(item => <a key={item.id} href={item.link} target='_blank' rel='noopener noreferrer'>{item.icon}</a>)
                }
            </div>
            </div>
        </header>
    )
}

export default Header