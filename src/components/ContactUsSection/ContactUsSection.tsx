import LetsTalkButton from '../LetsTalkButton/LetsTalkButton';

interface ContactUsSectionProps {
  id?: string;
}

export default function ContactUsSection({ id }: ContactUsSectionProps) {
  return (
    <section
      className='flex flex-col gap-11 font-poppins bg-zinc-800 rounded-t-3xl p-9'
      id={id}
    >
      <div className='wrapper flex w-full justify-between'>
        <div className='text-wrapper flex flex-col gap-8'>
          <h1 className='text-sm text-left font-robotoMono'>
            <span className='block mb-1 '> &#40;03&#41; </span> Nos contate
          </h1>
          <div className='text-5xl text-left w-4/6  text-zinc-400'>
            <p className='inline'>
              Nos
              <span className='font-bold text-white'> fale</span> qual é a sua
              <span className='font-bold text-white'> idéia</span>,
            </p>
            <LetsTalkButton /> e{' '}
            <span className='font-bold text-white'>realiza-la</span>
          </div>
        </div>
        <p className='text-sm text-right text-zinc-500 w-[20rem] self-end font-robotoMono'>
          <a
            href='https://maps.app.goo.gl/NhJmVswWLTgsLzPA8'
            className='hover:text-white'
            target='_blank'
          >
            CLSW 103 Bloco A sala 127,
            <br /> Brasília, DF, 70670-521 <br />
          </a>{' '}
          <a
            href='https://whatsa.me/5561999380906/?t=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20reuni%C3%A3o.'
            className='hover:text-white'
            target='_blank'
          >
            (61) 99938-0906 <br />{' '}
          </a>{' '}
          <a
            href='mailto:contato@cerrado61.com'
            target='_blank'
            className='hover:text-white'
          >
            contato@cerrado61.com
          </a>
        </p>
      </div>
      <hr className='border-t border-zinc-400 ' />
    </section>
  );
}
// Nos fale qual é sua idéia vamos conversar e realiza-la
