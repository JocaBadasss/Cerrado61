'use client';

import { InstagramLogo, WhatsappLogo } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';

export default function Header() {
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
    // <header
    //   className={`w-full  flex justify-between items-center px-20  transition-all duration-1000 fixed z-[999] font-poppins ${
    //     isScrolling ? 'h-20 bg-gray-200 bg-opacity-15' : 'h-40'
    //   }`}
    // >
    <header
      className={`fixed z-[999] w-[calc(100%-2rem)] px-12 rounded-full left-4 flex justify-between items-center transition-all duration-500 font-poppins ${
        isScrolling
          ? 'h-20 bg-white bg-opacity-10 transform translate-y-6 backdrop-blur-3xl'
          : 'h-40 transform translate-y-0'
      }`}
    >
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
        className={`text-white transition-all duration-1000  rounded-3xl relative  `}
      >
        <ul className='flex flex-row gap-7 text-sm relative p-3 font-poppins'>
          <li className={`flex items-center `}>
            <a href='#hero-video'>Home</a>
          </li>
          <li
            className={`flex items-center relative before:content-[''] before:absolute before:-left-4 before:h-5/6 before:w-[1px] before:bg-white `}
          >
            <a href='#our-expertise'>Serviços</a>
          </li>
          <li
            className={`flex items-center relative before:content-[''] before:absolute before:-left-4 before:h-5/6 before:w-[1px] before:bg-white `}
          >
            <a href='#our-works'>Portfólio</a>
          </li>

          <li className="flex items-center relative before:content-[''] before:absolute before:-left-4 before:h-5/6 before:w-[1px] before:bg-white">
            <a href='#'>Contato</a>
          </li>
          {/* <li className='bg-orange-600 bg-opacity-50 h-fit absolute right-0 l top-0 rounded-r-3xl p-3 '>
            <a href='#'>Contato</a>
          </li> */}
        </ul>
      </nav>

      <div className='flex flex-row gap-5  items-center justify-end w-[13.375rem]'>
        <a
          href='#
        '
        >
          <InstagramLogo
            size={22}
            color='white'
          />
        </a>
        <a href='#'>
          <WhatsappLogo
            size={22}
            color='white'
          />
        </a>
      </div>
    </header>
  );
}
