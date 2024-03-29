import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>User Research</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Wireframing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Prototyping</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>User Interface Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Usability Testing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Designing the prototype that essential in real world</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Full Stack Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Server-side Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Front-end Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Database Design and Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Application Architecture</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Testing and Deployment</p>
            </li>
          </ul>
        </article>
        {/* End of Web dev */}
        <article className="service">
          <div className="service__head">
            <h3>Software Engineering</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>RESTful API Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Version Control</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Deployment and DevOps</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Agile Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Software Architecture</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Testing and Documentation</p>
            </li>
          </ul>
        </article>
        {/* End of Content creation */}
      </div>
    </section>
  )
}

export default Services