import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Spinner from "./Spinner";

import React from "react";
import { Link } from 'react-router-dom';
import Carrusel from "./Carrusel";

function Box() {
  const styles = {
    width: 200,
    height: 150,
    backgroundColor: 'gray'
  }

  return <div style={styles}></div>;
}

function Home(props) {
  const welcome = 'Texto de bienvenida';

  return (
    <div className="Home flex flex-col justify-center items-center text-center">

        <Carrusel />

        <h1 className='text-2xl'>{welcome}</h1>

        <section className='mt-16'>
          <h2 className='pb-10 text-xl'>Últimas novedades</h2>
          <div className='flex gap-9'>
            <div className='flex gap-9 flex-col md:flex-row'>
              <Box />
              <Box />
            </div>
            <div className='flex gap-9 flex-col md:flex-row'>
              <Box />
              <Box />
            </div>
          </div>
          <div className='flex mt-12 items-center'>
            <div className='pl-6'>
              <Link className='text-sky-500 pr-5' to='/testimonios'>Testimonios</Link>
              <Link className='text-sky-500' to='/contacto'>Contacto</Link>
            </div>
            <button className='bg-transparent hover:bg-sky-500 text-sky-500 font-semibold hover:text-white py-1.5 px-6 border border-sky-500 hover:border-transparent rounded m-auto'>Ver todas</button>
          </div>
        </section>

        <section className='mt-24'>
          <h2 className='pb-10 text-xl'>Testimonios</h2>
          <div className='flex gap-9'>
            <div className='flex gap-9 flex-col md:flex-row'>
              <Box />
              <Box />
            </div>
            <div className='flex gap-9 flex-col md:flex-row'>
              <Box />
              <Box />
            </div>
          </div>
        </section>

    </div>
  );
}

export default Home;
