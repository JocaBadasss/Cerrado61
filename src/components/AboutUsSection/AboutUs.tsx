// 'use client';

// import { useState } from 'react';
import { Card } from './components/CardsAboutUsSection/CardsAboutUsSection';

interface AboutUsSectionProps {
  id?: string;
}

export default function AboutUsSection({ id }: AboutUsSectionProps) {
  // const [isExpanded, setIsExpanded] = useState(false);

  // const toggleText = () => {
  //   setIsExpanded(!isExpanded);
  // };

  const cards = [
    {
      title: 'Missão',
      description:
        'Criar conteúdos significativos. Captamos mais que momentos, eternizamos emoções e sentimentos  de forma criativa e autêntica.',
      iconSrc: '/card5.0.svg',
    },
    {
      title: 'Visão',
      description:
        'Ser referência no mercado de comunicação, entregando excelência com um olhar sensível a cada história contada.',
      iconSrc: '/card2.0.svg',
    },
    {
      title: 'Valores',
      description:
        'Autenticidade, Comprometimento, Humanidade, Parceria e Inspiração.',
      iconSrc: '/card9.0.svg',
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
          <div className='text-lg lg:text-2xl text-left text-zinc-200'>
            <h2 className='w-full text-3xl'>
              <span className='font-bold text-white'>Criamos</span> conexões
              visuais que contam{' '}
              <span className='font-bold text-white'> histórias</span>
            </h2>
            <br />
            <br />
            Na <span className='font-bold text-white'>Cerrado61</span>,
            acreditamos que contar sua história exige cuidado e
            profissionalismo. Somos uma produtora audiovisual que transforma
            ideias em conteúdos digitais de alto impacto, combinando
            criatividade, técnica e um olhar atento aos detalhes.
            <br />
            <br />
            Atendemos desde grandes empresas até micro e pequenos negócios,
            sempre entregando conteúdos que valorizam cada marca e cada momento.
            <br />
            <br />
            Com base em Brasília e o coração no Brasil inteiro, a{' '}
            <span className='font-bold text-white'>Cerrado61</span> é parceira
            de quem entende que imagem e narrativa caminham juntas — seja para
            um evento corporativo, uma ação cultural ou uma campanha digital.
            <br />
            <br />
            <div className='flex flex-col w-full gap-2'>
              {/* Card alinhado à esquerda */}
              <div className='flex justify-center'>
                <Card
                  key={cards[0].title}
                  title={cards[0].title}
                  description={cards[0].description}
                  iconSrc={cards[0].iconSrc}
                  index={0}
                />
              </div>

              {/* Card alinhado à direita */}
              <div className='flex justify-center'>
                <Card
                  key={cards[1].title}
                  title={cards[1].title}
                  description={cards[1].description}
                  iconSrc={cards[1].iconSrc}
                  index={1}
                />
              </div>

              {/* Card alinhado à esquerda novamente */}
              <div className='flex justify-center'>
                <Card
                  key={cards[2].title}
                  title={cards[2].title}
                  description={cards[2].description}
                  iconSrc={cards[2].iconSrc}
                  index={2}
                />
              </div>
            </div>
            <br />
            <span className='font-bold text-white'>Vamos criar juntos?</span>
          </div>
        </div>
      </div>
    </section>
  );
}
