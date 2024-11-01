'use client';
import { useEffect, useState } from 'react';

export const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`w-full h-28 flex justify-between items-center fixed z-[999] ${
        isScrolling ? 'bg-Cerrado_200' : 'bg-transparent'
      } px-24 py-4 transition-all duration-700`}
    >
      <div
        role='banner'
        className='flex flex-row gap-5 items-center'
      >
        <img
          src='/logo.svg'
          alt='Logotipo Cerrado61: lagartixa preta curvada com ponto laranja'
        />
        <div className='flex flex-col items-center '>
          <h1
            role='heading'
            className='font-Heading text-[2.5rem] text-white inline-block'
          >
            Cerrado<span className='font-Numbers text-Cerrado_100'>61</span>
          </h1>
          <h2 className='font-Texting text-lg text-Cerrado_100 -mt-[1.4rem]'>
            AUDIOVISUAL
          </h2>
        </div>
      </div>
      <nav
        role='navigation'
        className='text-Cerrado_300'
      >
        <ul className='flex flex-row gap-7'>
          <li>
            <a href='#'>HOME</a>
          </li>
          <li>
            <a href='#'>A PRODUTORA</a>
          </li>
          <li>
            <a href='#'>PORTFÓLIO</a>
          </li>
          <li>
            <a href='#'>CONTATO</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
