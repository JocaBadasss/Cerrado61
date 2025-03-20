'use client';

import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';

import Link from 'next/link';
import Header from '@/components/Header/Header';

export default function ContactPage() {
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

  return (
    <>
      <Header differentPage={true} />
      <main className='w-full  lg:pt-8 pt-10'>
        <div className='min-h-screen flex items-center justify-center      p-6'>
          <div className='max-w-4xl w-full   rounded-lg flex overflow-hidden  flex-col-reverse lg:flex-row '>
            {/* Sidebar */}
            <div className='lg:w-1/3 bg-gray-200 p-6 flex flex-col gap-6 font-poppins'>
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
            <div className='lg:w-2/3 bg-zinc-800 p-10 flex flex-col gap-6'>
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
              <a href='./contato'>Contato</a>
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
