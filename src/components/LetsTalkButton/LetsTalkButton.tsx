import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';

export default function LetsTalkButton() {
  return (
    <Link href='./contato'>
      <div
        className={` justify-center items-center text-xs lg:text-base inline-flex align-middle`}
      >
        <button
          className={` text-gray-950 bg-gray-200 py-2 px-4 rounded-3xl shadow-lg font-semibold border-[1px] border-white  transition-opacity   font-robotoMono `}
        >
          VAMOS CONVERSAR{' '}
        </button>
        <button className='bg-gray-200 rounded-full p-[0.3125rem] lg:p-[0.5625rem] ml-[-3px]'>
          <GoArrowUpRight
            size={24}
            className='text-gray-950'
          />{' '}
        </button>
      </div>
    </Link>
  );
}

// Nos fale qual é sua idéia vamos conversar e realiza-la
