// lib imports
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import '../../Styles/home.css'

export const Hero = () => {
  return (
    <motion.div>
      <section className="hero-section">
        <article>
          <span>Hello there, I'm </span>
          <h1>Marucha Johnstone</h1>
          <h2>I build user-friendly web applications.</h2>
        </article>
        <article>
          <p>
            As a junior web developer, I'm on an exhilarating journey to turn my passion for technology into stunning online experiences.
            Leveraging a tech stack that includes Golang, React, Tailwind CSS, and Rails, I craft responsive, user-friendly websites that bring ideas to life and solve problems one algorithm at a time.
            I'm an avid learner and problem solver, embracing challenges as opportunities for growth.
          </p>
          <Link to="/contact">Get in touch </Link>
        </article>
      </section>
    </motion.div>
  )
}