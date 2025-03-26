'use client';

import Link from 'next/link';

interface FooterProps {
  differentPage?: boolean;
}

export default function Footer({ differentPage = false }: FooterProps) {
  return (
    <footer
      className={`gap-11 font-poppins bg-zinc-800 p-9 flex flex-col lg:flex-row lg:justify-between items-center ${
        differentPage ? 'rounded-3xl' : 'mt-[-1px] lg:mt-[0px] rounded-b-3xl'
      }`}
    >
      <Link href='/'>
        <div
          role='banner'
          className='flex flex-row gap-3 lg:gap-5 items-center rounded'
        >
          <img
            src='/logo.svg'
            alt='Logotipo Cerrado61'
            className='w-8 lg:w-12'
          />
          <div className='flex flex-col items-center'>
            <h1 className='font-logo1 text-xl lg:text-3xl text-white inline-block'>
              Cerrado<span className='font-logo2 text-Cerrado_100'>61</span>
            </h1>
            <h2 className='font-logo2 text-xs lg:text-base text-Cerrado_100 -mt-[0.70rem]'>
              PRODUTORA
            </h2>
          </div>
        </div>
      </Link>

      <nav
        role='navigation'
        className='transition-all duration-1000 rounded-3xl relative text-zinc-400'
      >
        <ul className='flex flex-col items-center lg:flex-row gap-3 lg:gap-7 text-sm relative p-3 font-poppins'>
          <li className='flex items-center relative hover:text-white'>
            <Link href='/#our-expertise'>Serviços</Link>
          </li>
          <li className='flex items-center relative hover:text-white'>
            <Link href='/portfolio'>Portfólio</Link>
          </li>
          <li className='flex items-center relative hover:text-white'>
            <Link href='/contato'>Contato</Link>
          </li>
        </ul>
      </nav>

      <div className='text-zinc-400 text-xs lg:text-sm'>
        @Cerrado61 2024. Todos os direitos reservados
      </div>
    </footer>
  );
}
