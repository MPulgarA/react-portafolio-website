import React from 'react';
import './footer.css';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">MPulgarA</a>
      <ul className="permalinks">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Sobre Mi</a></li>
        <li><a href="#">Experiencia</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Portafolio</a></li>
        <li><a href="#">Testimonios</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>

      <div className="footer__socials">
        <a href="Facebook" ><FaFacebookF /></a>
        <a href="Instagram"><FiInstagram /></a>
        <a href="Twitter"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; MPulgar. Todos lo derechos reservados</small>
      </div>
    </footer>
  )
}

export default Footer;