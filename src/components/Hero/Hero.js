import './Hero.sass'

import arrow from '../../images/icon-arrow-down.svg'

export default function Hero() {
  return (
    <header className='hero'>
      <h1 className="hero__title">WE ARE CREATIVES</h1>
      <a href="#main" className="hero__arrow">
        <img src={arrow} alt="move down" />
      </a>
    </header>
  )
}
