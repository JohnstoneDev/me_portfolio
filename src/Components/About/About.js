// Assets
import me from '../../Assets/Images/darth_vader.png'
import '../../Styles/home.css'

// lib imports
import { v4 as uuid } from 'uuid'

import {
  SiRubyonrails,
  SiRubysinatra
} from 'react-icons/si'

import {
  BiLogoJavascript, BiLogoHtml5,
  BiLogoGoLang, BiLogoTailwindCss
} from 'react-icons/bi'

import {
  DiRuby
} from 'react-icons/di'

export function About (){
  return (
    <div className='about-comp'>
      <section className='about-section'>
        <article>
          <h2> About me </h2>
          <p>
            Hello! I'm Marucha. I'm a Software Engineer who enjoys solving problems through code.
            I develop and deploy scalable and maintainable web applications using React and JavaScript.
            I also  design and develop RESTful APIs using Golang & Rails.
          </p>
        </article>

        <article>
          <p> Here's a few technologies I've been working with recently: </p>
          <div className='techlist'>
            <div className='list'>
              {[
                [<BiLogoJavascript />, 'Javascript',],
                [<DiRuby />, 'Ruby'],
                [<BiLogoHtml5 />, 'HTML & CSS',],
                [<BiLogoTailwindCss />, 'Tailwind CSS'],
                [<SiRubyonrails />, 'Ruby on Rails'],
                [<SiRubysinatra />, 'Sinatra'],
                [<BiLogoGoLang />, 'Golang'],
              ].map((text) => {
                 return (
                    <div key={uuid()} className='icon-text'>
                      <span>{text}</span>
                    </div>
                 )
              })}
            </div>
          </div>
        </article>
      </section>

      {/* <img src={me} alt={"Marucha"} loading='lazy' /> */}
    </div>
  )
}