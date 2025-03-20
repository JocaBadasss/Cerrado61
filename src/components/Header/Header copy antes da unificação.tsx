'use client';

import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };
  useEffect(() => {
    const body = document.body;

    if (menuOpen) {
      body.classList.add('menu-open');
    } else {
      body.classList.remove('menu-open');
    }

    return () => {
      body.classList.remove('menu-open');
    };
  }, [menuOpen]);

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
      className={`fixed w-screen z-[999]  px-12 justify-between left-[0.01rem] lg:px-12 rounded-full  lg:left-4 flex lg:justify-between items-center transition-all duration-500 font-poppins lg:w-[calc(100%-2rem)] ${
        isScrolling
          ? 'h-14 lg:h-20 bg-white bg-opacity-10 transform translate-y-6 backdrop-blur-3xl'
          : 'h-28 lg:h-40 transform translate-y-0'
      }  `}
    >
      {/* Menu Hambúrguer - Mobile */}
      <button
        className='lg:hidden z-[9999] w-[1.62rem] h-[1.125rem] flex flex-col justify-around items-center'
        onClick={toggleMenu}
      >
        <div
          className={`w-[1.1875rem] h-[0.125rem] rounded-full bg-gray-100 transition-all duration-300 origin-left ${
            menuOpen ? 'rotate-45' : 'rotate-0'
          }`}
        ></div>
        <div
          className={`w-[1.1875rem] h-[0.125rem] rounded-full bg-gray-100 transition-all duration-300 ${
            menuOpen ? 'opacity-0 translate-x-5' : 'opacity-100 translate-x-0'
          }`}
        ></div>
        <div
          className={`w-[1.1875rem] h-[0.125rem] rounded-full bg-gray-100 transition-all duration-300 origin-left ${
            menuOpen ? '-rotate-45' : 'rotate-0'
          }`}
        ></div>
      </button>

      <a
        href='/
     '
      >
        {' '}
        <div
          role='banner'
          className='flex flex-row gap-3 lg:gap-5 items-center rounded'
        >
          <img
            src='/logo.svg'
            alt='Logotipo Cerrado61: lagartixa preta curvada com ponto laranja'
            className=' w-8 lg:w-12'
          />

          <div className='flex flex-col items-center '>
            <h1
              role='heading'
              className='font-Heading text-xl lg:text-3xl text-white inline-block'
            >
              Cerrado<span className='font-Numbers text-Cerrado_100'>61</span>
            </h1>
            <h2 className='font-Texting text-xs lg:text-base text-Cerrado_100 -mt-[0.70rem] lg:-mt-[0.90rem]'>
              AUDIOVISUAL
            </h2>
          </div>
        </div>
      </a>
      <nav
        role='navigation'
        // className='text-white  rounded-3xl relative '
        className={`hidden lg:block lg:text-white transition-all duration-1000  rounded-3xl relative  `}
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
            <a href='./portfolio'>Portfólio</a>
          </li>

          <li className="flex items-center relative before:content-[''] before:absolute before:-left-4 before:h-5/6 before:w-[1px] before:bg-white">
            <a href='./contato'>Contato</a>
          </li>
          {/* <li className='bg-orange-600 bg-opacity-50 h-fit absolute right-0 l top-0 rounded-r-3xl p-3 '>
            <a href='#'>Contato</a>
          </li> */}
        </ul>
      </nav>

      {/* Menu Overlay Mobile */}
      {menuOpen && (
        <nav className='fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-90 flex flex-col justify-center items-center text-white z-[999]'>
          <ul className='flex flex-col gap-6 text-xl font-poppins'>
            <li>
              <a
                href='#hero-video'
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='#our-expertise'
                onClick={toggleMenu}
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href='./Portfolio'
                onClick={toggleMenu}
              >
                Portfólio
              </a>
            </li>
            <li>
              <a
                href='/Contato'
                onClick={toggleMenu}
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      )}

      <div className=' flex flex-row gap-1 lg:gap-5 lg:items-center lg:justify-end lg:w-[13.375rem]'>
        <a
          href='https://www.instagram.com/cerrado61produtora/
        '
          target='_blank'
        >
          <FaInstagram
            className='lg:text-2xl'
            color='white'
          />
        </a>
        <a
          href='https://whatsa.me/5561999380906/?t=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20reuni%C3%A3o.'
          target='_blank'
        >
          <FaWhatsapp
            className='lg:text-2xl'
            color='white'
          />
        </a>
      </div>
    </header>
  );
}
