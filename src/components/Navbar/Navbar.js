// react imports
import { Link } from "react-router-dom"

// styles
import "./Navbar.sass"

export default function Navbar() {
  const handleClick = () => {
    const nav = document.querySelector(".navbar__links")
    nav.classList.toggle("navbar__links--active")
  }
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/">
          <h2 className="navbar__logo">sunnyside</h2>
        </Link>

        <svg
          onClick={handleClick}
          className="navbar__hamburger"
          width="24"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z"
            fill="#FFF"
            fillRule="evenodd"
          />
        </svg>

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
