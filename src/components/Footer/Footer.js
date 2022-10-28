import { Link } from "react-router-dom"

import facebook from "../../images/icon-facebook.svg"
import twitter from "../../images/icon-twitter.svg"
import pinterest from "../../images/icon-pinterest.svg"
import instagram from "../../images/icon-instagram.svg"

import "./Footer.scss"

export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">sunnyside</h2>
      <ul className="footer__links">
        <li className="footer__link">
          <Link to="/">About</Link>
        </li>
        <li className="footer__link">
          <Link to="/">Services</Link>
        </li>
        <li className="footer__link">
          <Link to="/">Projects</Link>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.facebook.com/"
          className="footer__social footer__social--facebook"
        >
          <img src={facebook} alt="facebook" />
        </a>
        <a
          href="https://www.instagram.com/"
          className="footer__social footer__social--instagram"
        >
          <img src={instagram} alt="facebook" />
        </a>
        <a
          href="https://twitter.com/"
          className="footer__social footer__social--twitter"
        >
          <img src={twitter} alt="facebook" />
        </a>
        <a
          href="https://www.pinterest.co.uk/"
          className="footer__social footer__social--pintrest"
        >
          <img src={pinterest} alt="facebook" />
        </a>
      </div>
    </footer>
  )
}
