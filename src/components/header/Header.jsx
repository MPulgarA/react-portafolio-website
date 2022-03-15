import React from 'react';
import './header.css';
import CTA from './CTA';
import ME from './../../assets/me.jpg';
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hola a todos que tal</h5>
        <h1>Holaaa</h1>
        <h5 className="text-light">FullStack</h5>
        <CTA />
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">Bajar</a>
      </div>
    </header>
  )
}

export default Header