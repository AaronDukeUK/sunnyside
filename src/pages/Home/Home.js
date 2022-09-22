// react imports

// internal imports
import { Footer, Gallery, Hero, Main, Testimonials } from '../../components'

// styles


export default function Home() {
  return (
    <>
    <div className="container">
      <Hero />
      <Main />
      <Testimonials />
      <Gallery />
      <Footer />
    </div>
    </>
  )
}
