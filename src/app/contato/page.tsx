'use client';

import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const formatPhoneNumber = (value: string) => {
    let cleaned = value.replace(/\D/g, '');
    if (cleaned.length > 11) cleaned = cleaned.slice(0, 11);
    if (cleaned.length <= 10) {
      return cleaned.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
    } else {
      return cleaned.replace(/^(\d{2})(\d{5})(\d{0,4})$/, '($1) $2-$3');
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'phone' ? formatPhoneNumber(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Erro ao enviar');
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <>
      <Header differentPage />
      <main className='w-full lg:pt-8 pt-10'>
        <div className='min-h-screen flex items-center justify-center p-6'>
          <div className='max-w-4xl w-full rounded-lg flex overflow-hidden flex-col-reverse lg:flex-row'>
            {/* Sidebar */}
            <div className='lg:w-1/3 bg-gray-200 p-6 flex flex-col gap-6 font-poppins'>
              <Link href='/'>
                <div className='flex flex-row gap-3 lg:gap-5 items-center rounded'>
                  <img
                    src='/logo-black.svg'
                    alt='Logotipo Cerrado61'
                    className='w-8 lg:w-12'
                  />
                  <div className='flex flex-col items-center'>
                    <h1 className='font-logo1 text-xl lg:text-3xl text-black'>
                      Cerrado
                      <span className='font-logo2 text-Cerrado_100'>61</span>
                    </h1>
                    <h2 className='font-logo2 text-xs lg:text-base text-Cerrado_100 -mt-[0.70rem]'>
                      PRODUTORA
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
                <h3 className='font-bold text-gray-800'>Nos visite</h3>
                <p className='text-gray-600 text-sm'>
                  Venha tomar um café na nossa sede
                </p>
                <p className='text-gray-800 hover:text-gray-400 text-sm'>
                  <a
                    href='https://maps.app.goo.gl/NhJmVswWLTgsLzPA8'
                    target='_blank'
                  >
                    CLSW 103 Bloco A sala 127,
                    <br />
                    Brasília, DF, 70670-521
                  </a>
                </p>
              </div>

              <div>
                <h3 className='font-bold text-gray-800'>Liga pra gente</h3>
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
                  href='https://www.instagram.com/cerrado61produtora/'
                  className='text-gray-600 hover:text-gray-900'
                >
                  <FaInstagram className='text-2xl' />
                </a>
                <a
                  href='https://whatsa.me/5561999380906/?t=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20reuni%C3%A3o.'
                  className='text-gray-600 hover:text-gray-900'
                >
                  <FaWhatsapp className='text-2xl' />
                </a>
              </div>
            </div>

            {/* Formulário */}
            <div className='lg:w-2/3 bg-zinc-800 p-10 flex flex-col gap-6'>
              <h1 className='text-2xl font-bold text-gray-200'>
                Uma ideia forte precisa do time certo. Vamos criar!
              </h1>
              <p className='text-gray-300 text-sm font-robotoMono'>
                Nos conta um pouco melhor sobre você e o que você tem em mente.
              </p>

              <form
                onSubmit={handleSubmit}
                className='flex flex-col gap-4'
              >
                <input
                  name='name'
                  type='text'
                  placeholder='Seu nome'
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={status !== 'idle'}
                  className='p-3 border-b border-gray-700 bg-transparent outline-none placeholder-gray-300 font-poppins'
                  required
                />
                <input
                  name='email'
                  type='email'
                  placeholder='exemplo@exemplo.com'
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={status !== 'idle'}
                  className='p-3 border-b border-gray-700 bg-transparent outline-none placeholder-gray-300 font-poppins'
                  required
                />
                <input
                  name='phone'
                  type='tel'
                  placeholder='(12) 34567-8910'
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={status !== 'idle'}
                  className='p-3 border-b border-gray-700 bg-transparent outline-none placeholder-gray-300 font-poppins'
                  required
                />
                <textarea
                  name='message'
                  placeholder='Nos conte um pouco mais sobre o projeto...'
                  value={formData.message}
                  onChange={handleInputChange}
                  disabled={status !== 'idle'}
                  className='p-3 border-b border-gray-700 bg-transparent outline-none h-20 placeholder-gray-300 font-poppins'
                  required
                />

                {/* Alertas */}
                {status === 'success' && (
                  <div className='bg-green-600 text-white text-sm px-4 py-2 rounded'>
                    Mensagem enviada com sucesso! Em breve entraremos em
                    contato.
                  </div>
                )}
                {status === 'error' && (
                  <div className='bg-red-500 text-white text-sm px-4 py-2 rounded'>
                    Erro ao enviar. Tente novamente mais tarde.
                  </div>
                )}

                <button
                  type='submit'
                  disabled={status === 'loading' || status === 'success'}
                  className='text-white py-3 px-6 rounded-md mt-4 hover:bg-gray-200 hover:text-gray-950 border font-poppins disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  {status === 'loading'
                    ? 'Enviando...'
                    : status === 'success'
                    ? 'Enviado!'
                    : 'Vamos começar!'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer differentPage />
    </>
  );
}
