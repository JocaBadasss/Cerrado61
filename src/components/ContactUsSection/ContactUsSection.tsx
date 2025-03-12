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
          Rua X, 123, Centro, <br /> Cidade Y - Estado Z <br /> (61) 99999-9999{' '}
          <br /> contato@cerrado61.com
        </p>
      </div>
      <hr className='border-t border-zinc-400 ' />
    </section>
  );
}
// Nos fale qual é sua idéia vamos conversar e realiza-la
