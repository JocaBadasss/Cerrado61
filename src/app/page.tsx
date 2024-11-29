'use client';

import OurExpertise from '../components/OurExpertiseSection/OurExpertiseSection';
import Header from '../components/Header/Header';
import HeroVideo from '../components/HeroVideo/HeroVideo';
import OurWorksSection from '../components/OurWorksSection/OurWorksSection';
import { useEffect } from 'react';
import FeedBackSection from '../components/FeedBackSection/FeedBackSection';
import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';

export default function Home() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    const headerHeight = 110; // Ajuste para a altura do seu header quando fixado

    const smoothScroll = (event: Event) => {
      event.preventDefault();
      const targetId = (event.currentTarget as HTMLAnchorElement).getAttribute(
        'href'
      );
      if (targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          const offsetPosition =
            targetElement.getBoundingClientRect().top +
            window.scrollY -
            headerHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }
    };

    links.forEach((link) => link.addEventListener('click', smoothScroll));

    return () => {
      links.forEach((link) => link.removeEventListener('click', smoothScroll));
    };
  }, []);

  return (
    <>
      <Header />
      <main className='w-full   flex gap-16 flex-col '>
        <HeroVideo id='hero-video' />
        <OurExpertise id='our-expertise' />
        <OurWorksSection id='our-works' />
        <FeedBackSection id='feedbacks' />
        <ContactUsSection id='contact-us' />
      </main>

      <footer className='  gap-11 font-poppins bg-zinc-800 rounded-b-3xl p-9 flex justify-between items-center  '>
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
          className={`text-white transition-all duration-1000  rounded-3xl relative text-zinc-400  `}
        >
          <ul className='flex flex-row gap-7 text-sm relative p-3 font-poppins'>
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
    </>
  );
}
