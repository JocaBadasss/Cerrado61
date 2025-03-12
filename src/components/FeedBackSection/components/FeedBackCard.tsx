import { GoArrowRight, GoArrowUpRight } from 'react-icons/go';
import Image from 'next/image';

export interface FeedBackCardProps {
  IsActive?: boolean;
}

export default function FeedBackCard({ IsActive }: FeedBackCardProps) {
  return (
    <article
      className={`${
        IsActive ? 'bg-zinc-800 rounded-lg' : 'border-b border-zinc-400'
      } py-4 px-3  w-full flex items-center justify-between  gap-3
      `}
    >
      <Image
        src='https://github.com/JocaBadasss.png'
        alt='Joca Badasss'
        width={50}
        height={50}
        className='rounded-full'
      />
      <h1
        className={` ${
          IsActive ? 'text-white' : 'text-zinc-400'
        } max-w-60 font-medium text-xl`}
      >
        Ensaio fotográfico do JocaBadass
      </h1>
      <button
        className={` invisible ${
          IsActive ? 'bg-gray-200 ' : ' border border-zinc-400 text-zinc-400'
        } rounded-full p-2 `}
      >
        {IsActive ? (
          <GoArrowUpRight
            size={24}
            className='text-zinc-800'
          />
        ) : (
          <GoArrowRight size={24} />
        )}
      </button>
    </article>
  );
}
