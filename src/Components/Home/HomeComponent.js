// Assets
import '../../Styles/home.css'

// Components
import { Hero } from './Hero'
import { About } from '../About/About'

export const HomeComponent = () => {
  return (
    <div className='homepage'>
      <Hero />
      <About />
    </div>
  )
}