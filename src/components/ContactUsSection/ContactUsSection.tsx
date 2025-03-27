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
      <div className='wrapper flex flex-col lg:flex-row w-full gap-8 lg:justify-between'>
        <div className='text-wrapper flex flex-col gap-8'>
          <h1 className='text-sm text-left font-robotoMono'>
            <span className='block mb-1 '> &#40;04&#41; </span> Nos contate
          </h1>
          <div className='lg:text-5xl text-left lg:w-4/6  text-zinc-400'>
            <p className='inline'>
              Nos
              <span className='font-bold text-white'> conte</span> qual é a sua
              <span className='font-bold text-white'> idéia</span>,
            </p>{' '}
            <LetsTalkButton /> !
          </div>
        </div>
        <p className='text-xs lg:text-sm text-right text-zinc-500 lg:w-[20rem] self-end font-robotoMono'>
          <a
            href='https://maps.app.goo.gl/omycA9Q81FEqZbnC8'
            className='hover:text-white'
            target='_blank'
          >
            CLSW 103 Bloco A sala 127,
            <br /> Brasília, DF, 70670-521 <br />
          </a>{' '}
          <a
            href='https://wa.me/61999380906'
            className='hover:text-white'
            target='_blank'
          >
            (61) 99938-0906 <br />{' '}
          </a>{' '}
          <a
            href='mailto:adm@cerrado61.com'
            target='_blank'
            className='hover:text-white'
          >
            adm@cerrado61.com
          </a>
        </p>
      </div>
      <hr className='border-t border-zinc-400 ' />
    </section>
  );
}
