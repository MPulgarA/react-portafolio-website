import React from 'react';
import './portafolio.css';
import IMG from './../../assets/me.jpg';

// TODO Rellenar con proyectos
const data = [
  {
    id: 1,
    image: IMG,
    title: 'Titulo',
    github: '',
    demo: ''
  }
]

const Portafolio = () => {
  return (
    <section id="portafolio">
      <h5>Trabajo reciente</h5>
      <h2>Portafolio</h2>
      <div className="container portafolio__container">

        <article className="portafolio__item">
          <div className="portafolio__item-image">
            <img src={IMG} alt="" />
          </div>
          <h3>Titulo</h3>
          <div className="portafolio__item-cta">
            <a href="" className="btn" target="_blank">Hola</a>
            <a href="" className="btn btn-primary" target="_blank">Hola</a>
          </div>
        </article>

        {/* {
          data.map(({ id, image, title, github, demo }) => {

            <article key={id} className="portafolio__item">
              <div className="portafolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{titulo}}</h3>
              <div className="portafolio__item-cta">
                <a href={github} className="btn" target="_blank">Hola</a>
                <a href={demo} className="btn btn-primary" target="_blank">Hola</a>
              </div>
            </article>
          })
          
        } */}

      </div>
    </section>
  )
}

export default Portafolio