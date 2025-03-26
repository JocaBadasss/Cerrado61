'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import LetsTalkButton from '@/components/LetsTalkButton/LetsTalkButton';

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const portfolioItems = [
    {
      title: 'Vídeos Institucionais',
      category: 'videos',
      image: '/work1.png',
      link: '/portfolio/videos',
    },
    {
      title: 'Cobertura de Eventos',
      category: 'eventos',
      image: '/work2.jpg',
      link: '/portfolio/eventos',
    },
    {
      title: 'Ensaios Fotográficos',
      category: 'ensaios',
      image: '/work3.jpg',
      link: '/portfolio/ensaios',
    },
    {
      title: 'Mídias Digitais',
      category: 'midias',
      image: '/work4.png',
      link: '/portfolio/midias',
    },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <Header differentPage />
      <main className='w-full min-h-screen  text-white font-poppins'>
        {/* Hero Section */}
        <section className='relative w-full h-[50vh] lg:h-[40vh] flex flex-col justify-center items-center text-center px-6 gap-8'>
          <h1 className='text-xs lg:text-sm text-left font-robotoMono'>
            Nosso Portfolio
          </h1>
          <div className='flex justify-end w-full'>
            <p className='text-gray-400 text-lg lg:text-3xl mt-4 max-w-2xl  '>
              <span className='font-bold text-white'>Projetos</span> que
              inspiram e{' '}
              <span className='font-bold text-white'>resultados</span> que falam
              por si. <span className='font-bold text-white'>Conheça</span>{' '}
              nosso trabalho e veja como{' '}
              <span className='font-bold text-white'>transformamos</span> ideias
              em realidade.
            </p>
          </div>
        </section>

        {/* Filtros */}
        <section className='w-full flex flex-wrap justify-center gap-2 sm:gap-4 px-4 my-8'>
          {['all', 'videos', 'eventos', 'ensaios', 'midias'].map((category) => (
            <button
              key={category}
              className={`px-3 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gray-200 text-gray-900'
                  : 'bg-transparent shadow-lg border text-white hover:bg-gray-400'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category === 'all'
                ? 'Todos'
                : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </section>

        {/* Portfolio Grid */}
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 pb-16'>
          {filteredItems.map((item, index) => (
            <a
              key={index}
              href='https://cerrado61.myportfolio.com/'
              target='_blank'
              className='group relative block'
            >
              <div className='w-full h-72 overflow-hidden rounded-lg relative'>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  priority={index === 0}
                  className='object-cover group-hover:scale-105 transition-transform duration-500 rounded-lg'
                />
                <h2 className='absolute bottom-5 left-0 w-full backdrop-blur-sm text-white text-xl font-semibold text-center rounded-3xl'>
                  {item.title}
                </h2>
              </div>
            </a>
          ))}
        </section>

        {/* Call to Action */}
        <section className='text-center py-16 bg-zinc-800 rounded-t-3xl px-9'>
          <h2 className='text-3xl font-bold'>Vamos trabalhar juntos?</h2>
          <p className='text-gray-400 mt-2 mb-6'>
            Entre em contato e traga seu projeto para a realidade.
          </p>

          <LetsTalkButton />
          {/* <Link
            href='/contato'
            className='mt-6 inline-block px-6 py-3 bg-Cerrado_100 text-gray-900 font-medium rounded-full hover:bg-yellow-400 transition-all duration-300'
          >
            Entre em contato
          </Link> */}
          <hr className='border-t border-zinc-400 mt-8' />
        </section>
      </main>
      <Footer />
    </>
  );
}
