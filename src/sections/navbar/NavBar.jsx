import data from './data'
import './navbar.css'

const Navbar = () => {

  return (
    <nav>
      <div className="container nav__container">
        
        <ul className='nav__menu'>
          {
            data.map(item => <a href={item.link}>{item.title}</a>)
          }
        </ul>

        <ul className='nav__menu_small'>
          {
            data.map(item => <a href={item.link}>{item.icon}</a>)
          }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar