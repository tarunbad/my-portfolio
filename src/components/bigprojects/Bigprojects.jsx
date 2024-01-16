import React from 'react'
import './bigprojects.css'
import BP from '../../assets/bigpro.png'
import BP1 from '../../assets/bigpro-1.png'
import {GiArrowScope} from 'react-icons/gi'
import { GiArchiveResearch } from "react-icons/gi";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Major projects</h5>
      <h2>My Research Work</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Context Aware Recommendation System</h3>
          <img src={BP} alt="" />
          <p><GiArchiveResearch />  Developing an engine that recommends travel destination points with music playlist's based on the contextual factors as well as facial emotion.</p>
          <div className="button">
          <a href="https://github.com/tarunbad/Context-Aware-Recommendation" className='btn'>Research Work</a>
          </div>
        </div>
        <div className="experience__frontend">
          <h3>Infection propagation through SEIR model</h3>
          <img src={BP1} alt="" />
          <p><GiArchiveResearch />  This study could be a starting point for developing a more realistic model about the online propagation dynamics of multiple messages.</p>
          <div className="button">
          <a href="https://github.com/tarunbad/extended-SEIR-model" className='btn'>Research Work</a>
          </div>
        </div>
        {/* ----- */}
        {/* end of frontend */}
        {/* <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <GiArrowScope className='experience__details-icon'/>
              <div>
              <h4>NodeJS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <GiArrowScope className='experience__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <GiArrowScope className='experience__details-icon'/>
              <div>
              <h4>Express JS</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <GiArrowScope className='experience__details-icon'/>
              <div>
              <h4>Python</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <GiArrowScope className='experience__details-icon'/>
              <div>
              <h4>My SQL</h4>
              <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <GiArrowScope className='experience__details-icon'/>
              <div>
              <h4>JAVA</h4>
              <small className="text-light">Intermediate</small>
              </div>
            </article>
            
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Experience