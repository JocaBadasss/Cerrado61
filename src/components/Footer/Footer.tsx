export default function Footer() {
  return (
    <footer className='  gap-11 font-poppins bg-zinc-800 rounded-b-3xl p-9 lg:flex   justify-between items-center  '>
      <div
        role='banner'
        className='flex flex-row gap-5 items-center rounded'
      >
        <img
          src='/logo.svg'
          alt='Logotipo Cerrado61: lagartixa preta curvada com ponto laranja'
          className='w-12'
        />

        <div className='flex flex-col items-center '>
          <h1
            role='heading'
            className='font-Heading text-3xl text-white inline-block'
          >
            Cerrado<span className='font-Numbers text-Cerrado_100'>61</span>
          </h1>
          <h2 className='font-Texting text- text-Cerrado_100 -mt-[0.90rem]'>
            AUDIOVISUAL
          </h2>
        </div>
      </div>

      <nav
        role='navigation'
        // className='text-white  rounded-3xl relative '
        className={` transition-all duration-1000  rounded-3xl relative text-zinc-400  `}
      >
        <ul className='flex flex-col lg:flex-row gap-7 text-sm relative p-3 font-poppins'>
          <li className={`flex items-center relative  `}>
            <a href='#our-expertise'>Serviços</a>
          </li>
          <li className={`flex items-center relative  `}>
            <a href='#our-works'>Portfólio</a>
          </li>

          <li className='flex items-center relative '>
            <a href='#'>Contato</a>
          </li>
          <li className='flex items-center relative '>
            <a href='#'>Termos e condições</a>
          </li>
          {/* <li className='bg-orange-600 bg-opacity-50 h-fit absolute right-0 l top-0 rounded-r-3xl p-3 '>
            <a href='#'>Contato</a>
          </li> */}
        </ul>
      </nav>

      <div className='text-zinc-400 text-sm'>
        @Cerrado61 2024. Todos os direitos reservados
      </div>
    </footer>
  );
}
