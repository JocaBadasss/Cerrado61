'use client';

import { useState } from 'react';

export default function OurWorksSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setActiveCard(index);
  };

  return (
    <section className='flex flex-col gap-11 font-robotoMono bg-zinc-800 rounded-3xl p-9'>
      {/* Cabeçalho da Seção */}
      <div className='wrapper flex w-full justify-between'>
        <div className='text-wrapper flex flex-col gap-8'>
          <h1 className='text-sm text-left'>
            <span className='block mb-1'> &#40;02&#41; </span> Nossos Trabalhos
          </h1>
          <p className='text-3xl text-left w-[480px] font-poppins'>
            Projetos que inspiram e resultados que falam por si. Conheça nosso
            portfólio e veja como transformamos ideias em realidade.
          </p>
        </div>
        <p className='text-sm text-right w-[20rem] self-center'>
          Explore nossos trabalhos realizados e descubra como combinamos
          criatividade, técnica e paixão em cada projeto.
        </p>
      </div>

      {/* Grid de Portfólios */}
      <div className='grid grid-rows-2 grid-cols-4 gap-4 w-full min-h-[30rem]'>
        {/* Card 1 */}
        <div
          className={`${
            activeCard === 1 || activeCard === null
              ? 'col-span-2 row-span-2'
              : 'row-span-2'
          } bg-gray-700 rounded-lg overflow-hidden transition-all duration-700 ease-in-out`}
          onMouseEnter={() => handleMouseEnter(1)}
        >
          <img
            src='/card-large.jpg'
            alt='Imagem do trabalho maior'
            className='w-full h-full object-cover'
          />
        </div>

        {/* Card 2 */}
        <div
          className={`${
            activeCard === 2 ? 'col-span-2 row-span-2' : 'row-span-2'
          } bg-gray-500 rounded-lg overflow-hidden transition-all duration-700 ease-in-out`}
          onMouseEnter={() => handleMouseEnter(2)}
        >
          <img
            src='/card-small-1.jpg'
            alt='Imagem do trabalho menor 1'
            className='w-full h-full object-cover'
          />
        </div>

        {/* Card 3 */}
        <div
          className={`${
            activeCard === 3 ? 'col-span-2 row-span-2' : 'row-span-2'
          } bg-gray-500 rounded-lg overflow-hidden transition-all duration-700 ease-in-out`}
          onMouseEnter={() => handleMouseEnter(3)}
        >
          <img
            src='/card-small-2.jpg'
            alt='Imagem do trabalho menor 2'
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </section>
  );
}
