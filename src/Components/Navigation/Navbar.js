// lib imports
import { Link } from 'react-router-dom'

// local imports
import '../../Styles/Navbar.css'

// Function that scrolls element into view
export const handleScroll = (element_id) => {
	const element = document.getElementById(element_id);

  if (element) {
		console.log(`${element_id} has been clicked`);
		element.scrollIntoView({ behavior: 'smooth' });
	}
};

export const NavBar = () => {

  return (
    <nav>
      <div className="main-nav">
        <Link to="/">
          <h1>{ "</> Marucha.dev" }</h1>
        </Link>
        <div className='links'>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/work">Work</Link>
        </div>
      </div>
    </nav>
  )
}