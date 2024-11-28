'use client';

import Image from 'next/image';
import FeedBackCard from './components/FeedBackCard';

interface FeedBackSectionProps {
  id?: string;
}

export default function FeedBackSection({ id }: FeedBackSectionProps) {
  // const [activeImage, setActiveImage] = useState<string | StaticImageData>(
  //   '/work2.jpg'
  // );

  // setActiveImage('/work2.jpg');

  const name = 'JocaBadass';
  const paragraph =
    'Gostei muito de tudo, desde a qualidade do trabalho, até a qualidade da equipe. Obrigado pela excelente comunicação e pela dedicação.';

  return (
    <section
      id={id}
      className='flex flex-col gap-11 font-poppins pt-9'
    >
      <div className='.wrapper flex w-full justify-between'>
        <div className='.text-wrapper flex flex-col gap-8 '>
          <h1 className='text-sm text-left font-robotoMono'>
            <span className='block mb-1 text-zinc-400'> &#40;03&#41; </span>{' '}
            Feedbacks
          </h1>
        </div>
        <p className='text-3xl text-left w-[36rem] text-zinc-400'>
          <span className='font-bold text-white'>Feedbacks</span> que
          impulsionam.
          <span className='font-bold text-white'> Conexões</span> que
          fortalecem. Da <span className='font-bold text-white'>escuta</span>{' '}
          atenta à <span className='font-bold text-white'>ação</span>{' '}
          transformadora, cada palavra é um{' '}
          <span className='font-bold text-white'>passo</span> para a excelência.
        </p>
      </div>

      {/* Flex  */}
      <div className='flex w-full justify-between gap-7'>
        {/* Feedbacks */}
        <div className='w-3/5'>
          <FeedBackCard IsActive />
          <FeedBackCard />
          <FeedBackCard />
          <FeedBackCard />
        </div>
        {/* Imagem do trabalho */}
        <div className='w-[32rem] grid gap-4'>
          <Image
            src={'/work2.jpg'}
            alt='Imagem do trabalho'
            width={500} // Define a largura
            height={300} // Define uma altura fixa
            className='rounded-3xl object-cover' // Garante corte proporcional
            style={{ height: '12.5rem', width: '31.25rem' }} // Força a dimensão
            // style={{ height: '18.75rem', width: '31.25rem' }} // Força a dimensão
          />

          <h1 className='font-medium'>{`- ${name}`}</h1>
          <p className='text-zinc-400 font-robotoMono'>{paragraph}</p>
        </div>
      </div>
    </section>
  );
}
