'use client';

import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useEffect, useState } from 'react';

import Link from 'next/link';
import { PiCaretRightBold } from 'react-icons/pi';

export default function ContactPage() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [phone, setPhone] = useState('');

  const formatPhoneNumber = (value: string) => {
    // Remove tudo que não for número
    let cleaned = value.replace(/\D/g, '');

    // Limita a 11 dígitos (DDD + 9 dígitos do telefone)
    if (cleaned.length > 11) {
      cleaned = cleaned.slice(0, 11);
    }

    // Aplica a formatação dinâmica (com ou sem nono dígito)
    if (cleaned.length <= 10) {
      return cleaned.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
    } else {
      return cleaned.replace(/^(\d{2})(\d{5})(\d{0,4})$/, '($1) $2-$3');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhoneNumber(event.target.value));
  };

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
    <>
      <header
        className={`fixed w-screen z-[999]  px-12 justify-between left-[0.01rem] lg:px-12 rounded-full  lg:left-4 flex lg:justify-between items-center transition-all duration-500 font-poppins lg:w-[calc(100%-2rem)] ${
          isScrolling
            ? 'h-14 lg:h-20 bg-white bg-opacity-10 transform translate-y-6 backdrop-blur-3xl'
            : 'h-28 lg:h-20 transform translate-y-0'
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
              <a href='#our-works'>Portfólio</a>
            </li>

            <li className="flex items-center relative before:content-[''] before:absolute before:-left-4 before:h-5/6 before:w-[1px] before:bg-white">
              <a href='./Contato'>Contato</a>
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
                  href='#our-works'
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
      <main className='w-full  pt-8 '>
        <div className='min-h-screen flex items-center justify-center     p-6'>
          <div className='max-w-4xl w-full   rounded-lg flex overflow-hidden'>
            {/* Sidebar */}
            <div className='w-1/3 bg-gray-200 p-6 flex flex-col gap-6 font-poppins'>
              <Link href='/'>
                <div
                  role='banner'
                  className='flex flex-row gap-3 lg:gap-5 items-center rounded'
                >
                  <img
                    src='/logo-black.svg'
                    alt='Logotipo Cerrado61: lagartixa preta curvada com ponto laranja'
                    className='w-8 lg:w-12'
                  />
                  <div className='flex flex-col items-center'>
                    <h1
                      role='heading'
                      className='font-Heading text-xl lg:text-3xl text-black inline-block'
                    >
                      Cerrado
                      <span className='font-Numbers text-Cerrado_100'>61</span>
                    </h1>
                    <h2 className='font-Texting text-xs lg:text-base text-Cerrado_100 -mt-[0.70rem] lg:-mt-[0.90rem]'>
                      AUDIOVISUAL
                    </h2>
                  </div>
                </div>
              </Link>

              <div>
                <h3 className='font-bold text-gray-800'>Fala com a gente</h3>
                <p className='text-gray-600 text-sm'>
                  Nosso time está aqui para ajudar.
                </p>
                <p className='text-gray-800 hover:text-gray-400 text-sm'>
                  <a
                    href='mailto:contato@cerrado61.com'
                    target='_blank'
                  >
                    contato@cerrado61.com
                  </a>
                </p>
              </div>

              <div>
                <h3 className='font-bold font-poppins text-gray-800'>
                  Nos visite
                </h3>
                <p className='text-gray-600 text-sm'>
                  Venha tomar um café na nossa sede
                </p>
                <p className='text-gray-800 hover:text-gray-400 text-sm'>
                  <a
                    href='https://maps.app.goo.gl/NhJmVswWLTgsLzPA8'
                    target='_blank'
                  >
                    CLSW 103 Bloco A sala 127,
                    <br /> Brasília, DF, 70670-521
                  </a>
                </p>
              </div>

              <div>
                <h3 className='font-bold font-poppins text-gray-800'>
                  Liga pra gente
                </h3>
                <p className='text-gray-600 text-sm'>Seg-Sáb, das 8h às 18h.</p>
                <p className='text-gray-800 text-sm'>
                  <a
                    href='https://whatsa.me/5561999380906/?t=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20reuni%C3%A3o.'
                    className='hover:text-white'
                    target='_blank'
                  >
                    (61) 99938-0906
                  </a>
                </p>
              </div>

              {/* Botão do WhatsApp */}
              <div className='flex justify-center mt-4'>
                <a
                  href='https://whatsa.me/5561999380906/?t=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20reuni%C3%A3o.'
                  target='_blank'
                  className='flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-md transition text-xs'
                >
                  <FaWhatsapp className='text-5xl' />
                  Se preferir, manda uma mensagem no WhatsApp
                </a>
              </div>

              <div className='flex gap-3 mt-auto'>
                <a
                  href='#'
                  className='text-gray-600 hover:text-gray-900'
                >
                  <FaInstagram className='text-2xl' />
                </a>
                <a
                  href='#'
                  className='text-gray-600 hover:text-gray-900'
                >
                  <FaWhatsapp className='text-2xl' />
                </a>
              </div>
            </div>

            {/* Form */}
            <div className='w-2/3 bg-zinc-800 p-10 flex flex-col gap-6'>
              <h1 className='text-2xl font-bold text-gray-200 font-poppins'>
                Uma ideia forte precisa do time certo. Vamos criar!
              </h1>
              <p className='text-gray-300 text-sm font-robotoMono'>
                Nos conta um pouco melhor sobre você e o que você tem em mente.
              </p>

              <form className='flex flex-col gap-4 '>
                <input
                  type='text'
                  placeholder='Seu nome'
                  className='p-3 border-b border-gray-700 bg-transparent outline-none  placeholder-gray-300 font-poppins'
                  required
                />
                <input
                  type='email'
                  placeholder='exemplo@exemplo.com'
                  className='p-3 border-b border-gray-700 bg-transparent outline-none placeholder-gray-300 font-poppins'
                  required
                />
                <input
                  type='tel'
                  placeholder='(12) 34567-8910'
                  className='p-3 border-b border-gray-700 bg-transparent outline-none placeholder-gray-300 font-poppins'
                  value={phone}
                  onChange={handleChange}
                  required
                />
                <textarea
                  placeholder='Nos conte um pouco mais sobre o projeto...'
                  className='p-3 border-b border-gray-700 bg-transparent outline-none h-20 placeholder-gray-300 font-poppins'
                  required
                ></textarea>

                <button
                  type='submit'
                  className=' text-white py-3 px-6 rounded-md mt-4 hover:bg-gray-200 hover:text-gray-950 border-1 border font-poppins'
                >
                  Vamos começar!
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <footer className='  gap-11 font-poppins bg-zinc-800  rounded-3xl p-9 flex  flex-col lg:flex-row  lg:justify-between items-center  '>
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
          className={` transition-all duration-1000  rounded-3xl relative text-zinc-400  `}
        >
          <ul className='flex flex-col items-center lg:flex-row gap-3 lg:gap-7 text-sm relative p-3 font-poppins'>
            <li className={`flex items-center relative  hover:text-white`}>
              <a href='#our-expertise'>Serviços</a>
            </li>
            <li className={`flex items-center relative  hover:text-white`}>
              <a href='#our-works'>Portfólio</a>
            </li>

            <li className='flex items-center relative hover:text-white'>
              <a href='#'>Contato</a>
            </li>
            <li className='flex items-center relative hover:text-white'>
              <a href='#'>Termos e condições</a>
            </li>
          </ul>
        </nav>

        <div className='text-zinc-400 text-xs lg:text-sm'>
          @Cerrado61 2024. Todos os direitos reservados
        </div>
      </footer>
    </>
  );
}
