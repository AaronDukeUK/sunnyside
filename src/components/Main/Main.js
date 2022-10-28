import "./Main.scss"

import transform from "../../images/desktop/image-transform.jpg"
import standout from "../../images/desktop/image-stand-out.jpg"

export default function Main() {
  return (
    <main id="main" className="main">
      <article className="main__article transform">
        <div className="main__container">
          <h2 className="main__title">Transform your brand</h2>
          <p className="main__body main__body--grey">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a href="/#" className="main__link">
            <span className="main__span">Learn More</span>
            <div className="main__rectangle main__rectangle--yellow"></div>
          </a>
        </div>
      </article>

      <img className="main__picture egg" src={transform} alt="transform" />

      <img className="main__picture glass" src={standout} alt="stand out" />

      <article className="main__article stand">
        <div className="main__container">
          <h2 className="main__title">Stand out to the right audience</h2>
          <p className="main__body main__body--grey">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <a href="/#" className="main__link">
            <span className="main__span">Learn More</span>
            <div className="main__rectangle main__rectangle--red"></div>
          </a>
        </div>
      </article>

      <article className="main__img-article main__img-article--cherry cherry">
        <div className="main__img-container">
          <h2 className="main__img-title">Graphic Design</h2>
          <p className="main__img-body main__img-body">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </article>

      <article className="main__img-article main__img-article--orange orange">
        <div className="main__img-container">
          <h2 className="main__img-title">Photography</h2>
          <p className="main__img-body main__img-body">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </article>
    </main>
  )
}
