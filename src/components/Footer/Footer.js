import { Link } from 'react-router-dom'

import './Footer.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">sunnyside</h2>
      <ul className="footer__links">
        <li className="footer__link"><Link to="/">About</Link></li>
        <li className="footer__link"><Link to="/">Services</Link></li>
        <li className="footer__link"><Link to="/">Projects</Link></li>
      </ul>
      <div className="footer__socials">
        <a href="#" className="footer__social footer__social--facebook"></a>
        <a href="#" className="footer__social footer__social--instagram"></a>
        <a href="#" className="footer__social footer__social--twitter"></a>
        <a href="#" className="footer__social footer__social--pintrest"></a>
      </div>
    </footer>
  )
}
