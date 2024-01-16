import React from 'react'
import './about.css'
import CLG from '../../assets/amrita.jpg'
import ME from '../../assets/me-about1.jpg'
import UNDERGRAD from '../../assets/undergrad.jpg'
import {FaAward} from  'react-icons/fa'
import { GiSilverBullet } from "react-icons/gi";
import {FaUsers, FiUsers} from 'react-icons/fi'
import {BsCodeSlash} from 'react-icons/bs'
import {VscFolderLibrary} from 'react-icons/vsc'
import { CiCircleChevRight } from "react-icons/ci";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={UNDERGRAD} alt="About Image"/>              
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className = "about__card">
                  <FaAward className="about__icon"/>
                  <h3>UNDERGRADUATION</h3>
                  <small className='text__content'>Computer Science <br />in Amrita Vishwa Vidyapeetham</small>
              </article>

              <article className = "about__card">
                  <BsCodeSlash className="about__icon"/>
                  <h3>Code Base</h3>
                  <small>App Development,<br />Data Science,<br />UX Design</small>

              </article>

              <article className = "about__card">
                  <VscFolderLibrary className="about__icon"/>
                  <h3>PROJECTS</h3>
                  <small>20+ completed projects</small>
              </article>
            </div>

            <p>
            A prospective Computer Science Engineer, proficient in Javascript ,C++ and Python with the ability to
            solve problems and interpersonal skills, seeking a position to contribute my skills and grow with the
            organisation.            </p>
            <div className="myphilosophy">
            <p>my Philosophy : <a><i>If it's working, Don't touch it 😜</i></a></p>
            </div>
            <div className="personal_skills">
            <h3><GiSilverBullet /> My Intrests</h3>
            <a><CiCircleChevRight /> Passionate towards developing applications </a><br />
            <a><CiCircleChevRight /> Driven by a passion for extracting insights from data to inform decision-making. </a><br />
            <a><CiCircleChevRight /> Intrigued by the challenges of machine learning and the potential for data-driven innovation. </a><br />
            <a><CiCircleChevRight /> Interested in user psychology, empathy-driven design, and staying abreast of design trends.</a>
            </div>
            <div className="personal_skills_1">
            <h3><GiSilverBullet /> My Undergraduation</h3>
            <img src={CLG} alt="" />
            <a><CiCircleChevRight />Amrita Vishwa Vidyapeetham</a><br />
            <a><CiCircleChevRight />Bachelor of Technology in Computer Science Engineering</a><br />
            <em>Ranked top 45% in the program. Took courses about Software Engineering, Computer Security, Operating Systems, Data Science, Machine Learning, etc...</em>
            </div>
            <div className="lets_talk">
            <a href="#contact" className="btn btn-primary">Lets talk</a>
            </div>
          </div>
      </div>

    </section>
  )
}

export default About