'use client';

import { Card } from './components/CardsExpertiseSection/CardsExpertiseSection';

interface OurExpertiseProps {
  id?: string;
}

export default function OurExpertiseSection({ id }: OurExpertiseProps) {
  const cards = [
    {
      title: 'Vídeos Institucionais',
      description:
        'Produção de vídeos institucionais que comunicam a essência e os valores de sua marca com qualidade e criatividade.',
      iconSrc: '/card1.0.svg',
    },
    {
      title: 'Cobertura de Eventos',
      description:
        'Registre os momentos mais importantes dos seus eventos com vídeos e fotografias profissionais que capturam cada detalhe.',
      iconSrc: '/card2.0.svg',
    },
    {
      title: 'Fotografias Profissionais',
      description:
        'Fotografias profissionais que valorizam detalhes, destacam qualidades e comunicam com clareza a essência de pessoas, marcas ou produtos.',
      iconSrc: '/card3.0.svg',
    },
    {
      title: 'Mídias Digitais',
      description:
        'Criação de conteúdos digitais estratégicos, planejados para engajar, comunicar e fortalecer sua presença online.',
      iconSrc: '/card4.0.svg',
    },
  ];

  return (
    <section
      id={id}
      className='flex flex-col gap-11 font-poppins pt-9'
    >
      <div className='wrapper flex flex-col lg:flex-row  w-full justify-between'>
        <div className='text-wrapper flex flex-col gap-8'>
          <h1 className='text-xs lg:text-sm text-left font-robotoMono'>
            <span className='block mb-1 text-zinc-400'> &#40;01&#41; </span>
            Nossa Expertise
          </h1>
          <p className='text-lg lg:text-3xl text-left lg:w-[30rem] text-zinc-400'>
            <span className='font-bold text-white'>Criatividade</span> que
            transforma.
            <span className='font-bold text-white'> Histórias</span> que
            emocionam. Do <span className='font-bold text-white'>detalhe</span>{' '}
            à essência, do planejamento à{' '}
            <span className='font-bold text-white'>ação.</span>
          </p>
        </div>
        <p className=' text-xs lg:text-sm text-right text-zinc-500 w-[20rem] self-center font-robotoMono'>
          Descubra nossas funcionalidades e como transformamos ideias em
          projetos concretos. Cada detalhe é pensado para criar impacto.
        </p>
      </div>

      <div className='flex flex-col lg:flex-row justify-between gap-4 w-full items-stretch text-center'>
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            iconSrc={card.iconSrc}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
