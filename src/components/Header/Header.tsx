'use client';

import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  differentPage?: boolean;
}

export default function Header({ differentPage = false }: HeaderProps) {
  const [isScrolling, setIsScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleScroll = () => setIsScrolling(window.scrollY > 0);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const headerOffset = 110;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleAnchorClick = (id: string) => {
    if (pathname === '/') {
      scrollToSection(id);
    } else {
      window.location.href = '/' + id;
    }
  };

  return (
    <header
      className={`fixed w-screen z-[999] px-12 justify-between left-[0.01rem] lg:px-12 rounded-full lg:left-4 flex lg:justify-between items-center transition-all duration-500 font-poppins lg:w-[calc(100%-2rem)] ${
        isScrolling
          ? 'h-14 lg:h-20 bg-white bg-opacity-10 transform translate-y-6 backdrop-blur-3xl'
          : differentPage
          ? 'h-20 lg:h-20 transform translate-y-0'
          : 'h-28 lg:h-40 transform translate-y-0'
      }`}
    >
      {/* Menu Mobile */}
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

      {/* Logo */}
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
            <h2 className='font-logo2 text-xs lg:text-base text-Cerrado_100 -mt-[0.70rem] '>
              PRODUTORA
            </h2>
          </div>
        </div>
      </Link>

      {/* Menu Desktop */}
      <nav
        role='navigation'
        className='hidden lg:block lg:text-white transition-all duration-1000 rounded-3xl relative'
      >
        <ul className='flex flex-row gap-7 text-sm relative p-3 font-poppins'>
          <li className='flex items-center'>
            <button onClick={() => handleAnchorClick('#hero-video')}>
              Home
            </button>
          </li>
          <li className='flex items-center relative before:content-[""] before:absolute before:-left-4 before:h-5/6 before:w-[1px] before:bg-white'>
            <button onClick={() => handleAnchorClick('#our-expertise')}>
              Serviços
            </button>
          </li>
          <li className='flex items-center relative before:content-[""] before:absolute before:-left-4 before:h-5/6 before:w-[1px] before:bg-white'>
            <Link href='/portfolio'>Portfólio</Link>
          </li>
          <li className='flex items-center relative before:content-[""] before:absolute before:-left-4 before:h-5/6 before:w-[1px] before:bg-white'>
            <Link href='/contato'>Contato</Link>
          </li>
        </ul>
      </nav>

      {/* Menu Mobile Overlay */}
      {menuOpen && (
        <nav className='fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-90 flex flex-col justify-center items-center text-white z-[999]'>
          <ul className='flex flex-col gap-6 text-xl font-poppins'>
            <li>
              <button
                onClick={() => {
                  handleAnchorClick('#hero-video');
                  toggleMenu();
                }}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleAnchorClick('#our-expertise');
                  toggleMenu();
                }}
              >
                Serviços
              </button>
            </li>
            <li>
              <Link
                href='/portfolio'
                onClick={toggleMenu}
              >
                Portfólio
              </Link>
            </li>
            <li>
              <Link
                href='/contato'
                onClick={toggleMenu}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>
      )}

      {/* Redes Sociais */}
      <div className='flex flex-row gap-2 lg:gap-5 lg:items-center lg:justify-end lg:w-[13.375rem]'>
        <a
          href='https://www.instagram.com/cerrado61produtora/'
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
