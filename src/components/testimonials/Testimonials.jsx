import React from 'react';
import './testimonials.css';
import AVTR1 from './../../assets/me.jpg';

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Okales',
    review: 'Lorem ecolecual'
  },
  {
    avatar: AVTR1,
    name: 'Okales',
    review: 'Lorem ecolecual'
  },
  {
    avatar: AVTR1,
    name: 'Okales',
    review: 'Lorem ecolecual'
  }
]

const Testimonial = () => {
  return (
    <section>
      <h5>Mis Clientes</h5>
      <h2>Testimonios</h2>

      <Swiper className="container testimonial__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5>{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }

        {/* <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar y movidas" />
          </div>
          <h5>Juanito el pillo</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Labore a optio soluta, blanditiis corporis voluptas sunt?
            Ea similique expedita, ducimus cum maxime aspernatur eos
            perspiciatis temporibus, non consequatur delectus provident!
          </small>
        </article> */}
      </Swiper>
    </section>
  )
}

export default Testimonial