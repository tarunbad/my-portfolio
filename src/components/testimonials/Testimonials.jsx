// =============================================================================

import React from 'react'
import './testimonials.css'
import IMG1 from '../../assets/Coursera(full stack).jpg'
import IMG2 from '../../assets/Coursera(UX-Main).jpg'
import IMG3 from '../../assets/Coursera(Google Cloud).jpg'
import IMG4 from '../../assets/Coursera(Big-Data).jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Full-Stack Web Development with React',
    title1: '-By The Hong Kong University Of Science and Technology'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Google UX Design',
    title1: '-By Google',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Google Cloud Fundamentals: Core Infrastructure',
    title1: '-By Google Cloud',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Introduction to Big Data with Spark and Hadoop',
    title1: '-By IBM',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My</h5>
      <h2>Certifications</h2>
      

      <div className="container portfolio__container">
        {
          data.map(({id, image, title,title1, github, demo}) => {
            return (
            <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <h4>{title1}</h4>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio