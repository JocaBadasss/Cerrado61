'use client';

import { Card } from '../OurExpertiseSection/components/CardsExpertiseSection/CardsExpertiseSection';

interface AboutUsSectionProps {
  id?: string;
}

export default function AboutUsSection({ id }: AboutUsSectionProps) {
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
      <div className='wrapper flex flex-col lg:flex-row gap-3 lg:gap-0 w-full justify-between'>
        <div className='text-wrapper flex flex-col gap-8'>
          <h1 className='text-xs lg:text-sm text-left font-robotoMono'>
            <span className='block mb-1 text-zinc-400'> &#40;03&#41; </span>
            Sobre nós
          </h1>
          <p className='text-lg lg:text-2xl text-left  text-zinc-400'>
            <h2 className='w-full text-3xl'>
              <span className='font-bold text-white'>Criamos</span> conexões
              visuais que contam{' '}
              <span className='font-bold text-white'> histórias</span>
            </h2>
            <br />
            <br />
            Na <span className='font-bold text-white'>Cerrado61</span> ,
            acreditamos que contar sua história exige{' '}
            <span className='font-bold text-white'>cuidado</span> e{' '}
            <span className='font-bold text-white'>profissionalismo</span> .
            Somos uma produtora audiovisual que transforma ideias em{' '}
            <span className='font-bold text-white'>conteúdos digitais</span> de
            alto impacto, combinando criatividade, técnica e um olhar atento aos{' '}
            <span className='font-bold text-white'>detalhes</span>. <br />
            <br />
            <span className='font-bold text-white'>Atendemos</span> desde
            grandes empresas até micro e pequenos negócios, sempre entregando
            conteúdos que{' '}
            <span className='font-bold text-white'>valorizam</span> cada marca e
            cada <span className='font-bold text-white'>momento</span> .
            <br />
            <br />
            Com base em Brasília e o coração no Brasil inteiro, a{' '}
            <span className='font-bold text-white'>Cerrado61</span> é parceira
            de quem entende que{' '}
            <span className='font-bold text-white'>imagem e narrativa</span>{' '}
            caminham juntas — seja para um{' '}
            <span className='font-bold text-white'>evento corporativo</span> ,
            uma <span className='font-bold text-white'>ação cultural</span> ou
            uma <span className='font-bold text-white'>campanha digital</span> .
            <br />
            <br />
            <span className='font-bold text-white'>Vamos criar juntos?</span>
            {/* <span className='font-bold text-white'>Criatividade</span> que
            transforma.
            <span className='font-bold text-white'> Histórias</span> que
            emocionam. Do <span className='font-bold text-white'>detalhe</span>{' '}
            à essência, do planejamento à{' '}
            <span className='font-bold text-white'>ação.</span> */}
          </p>
        </div>
        {/* <p className=' text-xs lg:text-sm text-right text-zinc-500 w-[20rem] self-center font-robotoMono'>
          Na Cerrado61, acreditamos que contar sua história exige cuidado e
          profissionalismo. Somos uma produtora audiovisual que transforma
          ideias em conteúdos digitais de alto impacto, combinando criatividade,
          técnica e um olhar atento aos detalhes.
        </p> */}
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
