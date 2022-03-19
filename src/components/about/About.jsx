import React from 'react';
import './about.css';
import ME from './../../assets/me.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Conoce más de mi</h5>
      <h2>Sobre mi</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiencia</h5>
              <small>1 Año de Experiencia</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clientes</h5>
              <small>1+ cliente</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Proyectos</h5>
              <small>Muchos Proyectos</small>
            </article>

          </div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum inventore itaque illo, tempore cupiditate veniam quos quasi nostrum, officiis voluptates, ex et nihil numquam. Molestias exercitationem sed quibusdam quo doloremque.</p>
          <a href="#contact" className="btn btn-primary">Hablemos</a>
        </div>
      </div>
    </section>
  )
}

export default About