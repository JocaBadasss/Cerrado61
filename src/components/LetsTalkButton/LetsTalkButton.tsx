import { GoArrowUpRight } from 'react-icons/go';

export default function LetsTalkButton() {
  return (
    <a
      href='https://whatsa.me/5561999380906/?t=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20reuni%C3%A3o.'
      target='_blank'
    >
      <div
        className={` justify-center items-center text-base inline-flex align-middle`}
      >
        <button
          className={` text-gray-950 bg-gray-200 py-2 px-4 rounded-3xl shadow-lg font-semibold border-[1px] border-white  transition-opacity   font-robotoMono `}
        >
          VAMOS CONVERSAR{' '}
        </button>
        <button className='bg-gray-200 rounded-full p-[0.5625rem] ml-[-3px]'>
          <GoArrowUpRight
            size={24}
            className='text-gray-950'
          />{' '}
        </button>
      </div>
    </a>
  );
}

// Nos fale qual é sua idéia vamos conversar e realiza-la
