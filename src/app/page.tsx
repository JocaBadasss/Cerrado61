'use client';

import OurExpertise from '../components/OurExpertiseSection/OurExpertiseSection';
import Header from '../components/Header/Header';
import HeroVideo from '../components/HeroVideo/HeroVideo';
import OurWorksSection from '../components/OurWorksSection/OurWorksSection';
import { useEffect } from 'react';
// import FeedBackSection from '../components/FeedBackSection/FeedBackSection';
import ContactUsSection from '@/components/ContactUsSection/ContactUsSection';
import Footer from '@/components/Footer/Footer';
import AboutUsSection from '@/components/AboutUsSection/AboutUs';

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
        {/* <FeedBackSection id='feedbacks' /> */}
        <AboutUsSection id='about-us' />
        <ContactUsSection id='contact-us' />
      </main>

      <Footer />
    </>
  );
}
