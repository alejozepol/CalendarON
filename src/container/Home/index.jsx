import React from 'react';
import reloj from '../../assets/Reloj.svg';

const Home = () => {
  return (
    <section className='Home'>
      <div className='Home__img'>
        <img src={reloj} alt='Icono Reloj' />
      </div>
      <div className='Home__text'>
        <h2>Organizarnos nunca ha sido tan importante</h2>
      </div>
    </section>
  );
};

export default Home;
