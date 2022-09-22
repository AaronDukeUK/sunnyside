import './Gallery.scss'

import cone from '../../images/desktop/image-gallery-cone.jpg'
import milk from '../../images/desktop/image-gallery-milkbottles.jpg'
import orange from '../../images/desktop/image-gallery-orange.jpg'
import sugar from '../../images/desktop/image-gallery-sugarcubes.jpg'

export default function Gallery() {
  return (
    <div className='gallery'>
      <img src={milk} alt="milk bottles" className="gallery__img" />
      <img src={orange} alt="orange slice" className="gallery__img" />
      <img src={cone} alt="icecream cone" className="gallery__img" />
      <img src={sugar} alt="sugar cubes" className="gallery__img" />
    </div>
  )
}
