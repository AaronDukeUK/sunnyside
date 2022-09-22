import './Testimonials.scss'

import emily from '../../images/image-emily.jpg'
import thomas from '../../images/image-thomas.jpg'
import jennie from '../../images/image-jennie.jpg'

export default function Testimonials() {
  return (
    <div className='testimonials'>
      <h2 className="testimonials__title">Client Testimonials</h2>
      <div className="testimonials__container">
        <article className="testimonials__content">
          <img className="testimonials__img" src={emily} alt="client photo" />
          <p className="testimonials__text">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
          <div className="testimonials__name">
            <span>Emily R.</span>
            <span>Marketing Director</span>
          </div>
        </article>
        <article className="testimonials__content">
          <img className="testimonials__img" src={thomas} alt="client photo" />
          <p className="testimonials__text">Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
          <div className="testimonials__name">
            <span>Thomas S.</span>
            <span>Chief Operating Officer</span>
          </div>
        </article>
        <article className="testimonials__content">
          <img className="testimonials__img" src={jennie} alt="client photo" />
          <p className="testimonials__text">Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
          <div className="testimonials__name">
            <span>Jennie F.</span>
            <span>Business Owner</span>
          </div>
        </article>
      </div>

    </div>
  )
}
