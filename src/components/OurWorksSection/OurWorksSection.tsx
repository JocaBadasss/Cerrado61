'use client';

import { useState } from 'react';
import Card from './components/CardsWorkSection/CardsWorkSection';

interface OurWorksProps {
  id?: string;
}

export default function OurWorksSection({ id }: OurWorksProps) {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setActiveCard(index);
  };

  return (
    <section
      className='flex flex-col gap-11 font-robotoMono bg-zinc-800 rounded-3xl p-9'
      id={id}
    >
      <div className='wrapper flex w-full justify-between'>
        <div className='text-wrapper flex flex-col gap-8'>
          <h1 className='text-sm text-left'>
            <span className='block mb-1'> &#40;02&#41; </span> Nossos Trabalhos
          </h1>
          <p className='text-3xl text-left w-[30rem] font-poppins'>
            Projetos que inspiram e resultados que falam por si. Conheça nosso
            portfólio e veja como transformamos ideias em realidade.
          </p>
        </div>
        <p className='text-sm text-right w-[20rem] self-center'>
          Explore nossos trabalhos realizados e descubra como combinamos
          criatividade, técnica e paixão em cada projeto.
        </p>
      </div>

      <div className='flex gap-4 w-full h-[30rem]'>
        {/* Videos Institucionais */}
        <Card
          active={activeCard === 1 || activeCard === null}
          onMouseEnter={() => handleMouseEnter(1)}
          imageSrc='/work1.png'
          positionBackground='right'
          tags={['Empresas', 'Drones', 'Eventos', 'Apresentações']}
          title='Videos Institucionais'
          subtitle='Capturamos momentos que contam histórias.'
        />

        {/* Cobertura de eventos */}
        <Card
          active={activeCard === 2}
          onMouseEnter={() => handleMouseEnter(2)}
          imageSrc='/work2.jpg'
          positionBackground='center'
          tags={['Acompanhamento', 'Fotografias', 'Filmagem', 'Qualidade 4K']}
          title='Cobertura de Eventos'
          subtitle='Transformamos momentos em imagens que contam historias.'
        />

        {/* Ensaios fotográficos */}
        <Card
          active={activeCard === 3}
          onMouseEnter={() => handleMouseEnter(3)}
          imageSrc='/work3.jpg'
          positionBackground='center'
          tags={['Aniversários', 'Influencer', 'Casamento', 'Religião']}
          title='Ensaios Fotográficos'
          subtitle='Capturamos momentos que contam histórias.'
        />
      </div>
    </section>
  );
}
