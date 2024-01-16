import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me2.jpeg'
import HeaderSocial from './HeaserSocials'
import { TypeAnimation } from 'react-type-animation';
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>HOLA GUYS<br></br>This is</h5>
        <h1 className="main__name">Tarun</h1>
        <h4 className="text-light"><TypeAnimation
        sequence={[
          "I'm a Developer",
          1000,
          "I'm a UX Designer",
          1000,
        ]}
        speed={50}
        repeat={Infinity}
        style={{ fontSize: '1.5em' }}
      /></h4>
        <CTA />
        <HeaderSocial/>
        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header