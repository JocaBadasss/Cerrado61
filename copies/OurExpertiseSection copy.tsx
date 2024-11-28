export default function OurExpertiseSection() {
  return (
    <section className='flex flex-col gap-11 font-poppins  '>
      <div className='.wrapper flex w-full justify-between'>
        <div className='.text-wrapper flex flex-col gap-8 '>
          <h1 className='text-sm text-left font-robotoMono '>
            <span className='block mb-1  text-zinc-400 '> &#40;01&#41; </span>{' '}
            Nossa Expertise
          </h1>
          <p className='text-3xl text-left w-[480px]  text-zinc-400'>
            <span className='font-bold text-white'>Criatividade</span> que
            transforma.
            <span className='font-bold text-white'> Histórias</span> que
            emocionam. Do <span className='font-bold text-white'>detalhe </span>{' '}
            à<span className='font-bold text-white'> essência</span>, do
            planejamento à<span className='font-bold text-white'> ação.</span>
          </p>
        </div>
        <p className='text-sm text-right text-zinc-500 w-[20rem] self-center font-robotoMono'>
          Descubra nossas funcionalidades e como transformamos ideias em
          projetos concretos. Cada detalhe é pensado para criar impacto.
        </p>
      </div>

      <div className='flex justify-between gap-4 w-full'>
        {/* Card 1 - Vídeos Institucionais */}
        <div className='w-1/3 border border-zinc-600 bg-gray-200 rounded-lg p-6 flex flex-col items-center gap-4'>
          <img
            src='/card4.svg'
            alt='Ícone de vídeo institucional'
            className='w-20 h-20'
          />
          <div className='flex items-center gap-4 mb-4'>
            <h3 className='text-xl font-bold text-gray-800'>
              Vídeos Institucionais
            </h3>
          </div>
          <p className='text-sm text-zinc-700 text-center font-roboto'>
            Produção de vídeos institucionais que comunicam a essência e os
            valores de sua marca com qualidade e criatividade.
          </p>
        </div>

        <div className='w-1/3 border border-zinc-600 bg-gray-200 rounded-lg p-6 flex flex-col items-center gap-4'>
          <img
            src='/card2.0.svg' 
            className='w-20 h-20'
          />
          <div className='flex items-center gap-4 mb-4'>
            <h3 className='text-xl font-bold text-gray-800'>
              Cobertura de Eventos
            </h3>
          </div>
          <p className='text-sm text-zinc-700 text-center font-roboto'>
            Registre os momentos mais importantes dos seus eventos com vídeos e
            fotografias profissionais que capturam cada detalhe.
          </p>
        </div>

        {/* Card 3 - Ensaios Fotográficos */}
        <div className='w-1/3 border border-zinc-600 bg-gray-200 rounded-lg p-6 flex flex-col items-center gap-4'>
          <img
            src='/card3.0.svg' // Substitua pelo caminho do ícone real
            alt='Ícone de ensaio fotográfico'
            className='w-20 h-20'
          />
          <div className='flex items-center gap-4 mb-4'>
            <h3 className='text-xl font-bold text-gray-800'>
              Ensaios Fotográficos
            </h3>
          </div>
          <p className='text-sm text-zinc-700 text-center font-roboto'>
            Ensaios profissionais para capturar momentos únicos, destacando
            personalidades e criando memórias inesquecíveis.
          </p>
        </div>
      </div>
    </section>
  );
}
