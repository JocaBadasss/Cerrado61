'use client';

import { Card } from './components/CardsExpertiseSection/CardsExpertiseSection';
import { useState, useEffect, useRef } from 'react';

interface OurExpertiseProps {
  id?: string;
}

export default function OurExpertiseSection({ id }: OurExpertiseProps) {
  const [isVisible, setIsVisible] = useState<boolean[]>([false, false, false]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Ativa os cards com delay em sequência
            isVisible.forEach((_, index) => {
              setTimeout(() => {
                setIsVisible((prev) =>
                  prev.map((val, i) => (i === index ? true : val))
                );
              }, index * 300); // Atraso de 300ms entre cada card
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    const sectionElement = sectionRef.current;
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section
      id={id}
      className='flex flex-col gap-11 font-poppins pt-9'
      ref={sectionRef}
    >
      <div className='.wrapper flex w-full justify-between'>
        <div className='.text-wrapper flex flex-col gap-8 '>
          <h1 className='text-sm text-left font-robotoMono'>
            <span className='block mb-1 text-zinc-400'> &#40;01&#41; </span>{' '}
            Nossa Expertise
          </h1>
          <p className='text-3xl text-left w-[480px] text-zinc-400'>
            <span className='font-bold text-white'>Criatividade</span> que
            transforma.
            <span className='font-bold text-white'> Histórias</span> que
            emocionam. Do <span className='font-bold text-white'>detalhe</span>{' '}
            à essência, do planejamento à{' '}
            <span className='font-bold text-white'>ação.</span>
          </p>
        </div>
        <p className='text-sm text-right text-zinc-500 w-[20rem] self-center font-robotoMono'>
          Descubra nossas funcionalidades e como transformamos ideias em
          projetos concretos. Cada detalhe é pensado para criar impacto.
        </p>
      </div>

      <div className='flex justify-between gap-4 w-full'>
        <Card
          title='Vídeos Institucionais'
          description='Produção de vídeos institucionais que comunicam a essência e os valores de sua marca com qualidade e criatividade.'
          iconSrc='/card1.0.svg'
          animationClass={`card ${
            isVisible[0] ? 'animate-slideInBottom' : 'opacity-0'
          }`}
        />
        <Card
          title='Cobertura de Eventos'
          description='Registre os momentos mais importantes dos seus eventos com vídeos e fotografias profissionais que capturam cada detalhe.'
          iconSrc='/card2.0.svg'
          animationClass={`card ${
            isVisible[1] ? 'animate-slideInBottom' : 'opacity-0'
          }`}
        />
        <Card
          title='Ensaios Fotográficos'
          description='Ensaios profissionais para capturar momentos únicos, destacando personalidades e criando memórias inesquecíveis.'
          iconSrc='/card3.0.svg'
          animationClass={`card ${
            isVisible[2] ? 'animate-slideInBottom' : 'opacity-0'
          }`}
        />
      </div>
    </section>
  );
}
