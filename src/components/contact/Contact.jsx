import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Hablemos</h5>
      <h2>Contactame</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>matipulgar@gmail.com</h5>
            <a href="mailto:correo@corre.cl">Enviame un mensaje</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>matipulgar@gmail.com</h5>
            <a href="mailto:correo@corre.cl">Enviame un mensaje</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+09123981983</h5>
            <a href="mailto:correo@corre.cl">Enviame un mensaje</a>
          </article>
        </div>
        {/* TODO Formik o EmailJS*/}
        <form action="">
          <input type="text" name="name" placeholder="Nombre" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" rows="7" placeholder="Mensaje" required></textarea>
          <button type="submit" className="btn btn-primary">Enviar Mensaje</button>
        </form>

      </div>
    </section>
  )
}

export default Contact