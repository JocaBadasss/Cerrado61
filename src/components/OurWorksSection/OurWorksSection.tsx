'use client';

import { useState, useEffect, useRef } from 'react';
import Card from './components/CardsWorkSection/CardsWorkSection';

interface OurWorksProps {
  id?: string;
}

export default function OurWorksSection({ id }: OurWorksProps) {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Verifica se a largura da tela é maior que 1024px (lg: no Tailwind)
    const isDesktop = window.innerWidth >= 1024;

    if (!isDesktop) return; // Se for mobile, não faz a animação

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true); // Evita que a animação aconteça mais de uma vez

            // Sequência automática dos cards
            setTimeout(() => setActiveCard(2), 800); // Primeiro ativa o card 2
            setTimeout(() => setActiveCard(3), 1600); // Depois ativa o card 3
            setTimeout(() => setActiveCard(1), 2400); // Volta para o card 1 e o usuário assume o controle
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const handleMouseEnter = (index: number) => {
    setActiveCard(index);
  };

  return (
    <section
      ref={sectionRef}
      className='flex flex-col gap-11 font-robotoMono bg-zinc-800 rounded-3xl p-9'
      id={id}
    >
      <div className='wrapper flex flex-col lg:flex-row w-full gap-3 lg:gap-0 justify-between'>
        <div className='text-wrapper flex flex-col gap-8'>
          <h1 className='text-xs lg:text-sm text-left'>
            <span className='block mb-1'> &#40;02&#41; </span> Nossos Trabalhos
          </h1>
          <p className='text-lg lg:text-3xl text-left lg:w-[30rem] font-poppins'>
            Projetos que inspiram e resultados que falam por si. Conheça nosso
            portfólio e veja como transformamos ideias em realidade.
          </p>
        </div>
        <p className='text-xs lg:text-sm text-right lg:w-[20rem] self-center text-zinc-400'>
          Explore nossos trabalhos realizados e descubra como combinamos
          criatividade, técnica e paixão em cada projeto.
        </p>
      </div>

      <div className='flex flex-col lg:flex-row gap-4 w-full lg:h-[30rem]'>
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
          subtitle='Transformamos momentos em imagens que contam histórias.'
        />

        {/* Ensaios fotográficos */}
        <Card
          active={activeCard === 3}
          onMouseEnter={() => handleMouseEnter(3)}
          imageSrc='/work5.png'
          positionBackground='center'
          tags={['Instagram', 'Reels', 'YouTube', 'Criação']}
          title='Mídias Digitais'
          subtitle='Ideias criativas que viram conteúdo e marcam presença nas redes.'
        />
      </div>
    </section>
  );
}
