// react imports
import { Link } from 'react-router-dom'


// styles
import './Navbar.sass'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">

        <Link to="/">
          <h2 className="navbar__logo">sunnyside</h2>
        </Link>

        <ul className="navbar__links">

          <li className="navbar__link navbar__link--normal">
            <Link to="/">About</Link>
          </li>

          <li className="navbar__link navbar__link--normal">
            <Link to="/">Services</Link>
          </li>

          <li className="navbar__link navbar__link--normal">
            <Link to="/">Projects</Link>
          </li>

          <li className="navbar__link navbar__link--btn">
            <Link to="/">Contact</Link>
          </li> 

        </ul>
      </div>
    </nav>
  )
}
