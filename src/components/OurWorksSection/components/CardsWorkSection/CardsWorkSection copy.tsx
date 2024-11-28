'use client';
import { CaretRight } from '@phosphor-icons/react';

import Tag from '@/components/Tag/Tag';

interface CardProps {
  active: boolean;
  onMouseEnter: () => void;
  imageSrc: string;
  positionBackground: string;
  tags: string[];
  title: string;
  subtitle: string;
}

export default function Card({
  active,
  onMouseEnter,
  imageSrc,
  positionBackground,
  tags,
  title,
  subtitle,
}: CardProps) {
  return (
    <div
      role='card'
      className={`${
        active ? 'flex-[2]' : 'flex-1'
      } bg-gray-500 rounded-lg overflow-hidden transition-all duration-1000 ease-in-out p-6 flex flex-col justify-between`}
      onMouseEnter={onMouseEnter}
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: `${positionBackground}`,
      }}
    >
      <div className='tags flex w-full justify-end '>
        {active && (
          <div
            className={`flex gap-2 w-72 flex-wrap justify-end transition-opacity duration-700 ease-in-out ${
              active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            {tags.map((tag, index) => (
              <Tag
                key={index}
                text={tag}
              />
            ))}
          </div>
        )}
      </div>

      <div className='flex flex-col gap-4'>
        <h1 className='text-2xl  font-poppins font-medium'>{title}</h1>
        {active && (
          <p className='text-sm font-roboto text-gray-200 transition-all duration-700 ease-in-out'>
            {subtitle}
          </p>
        )}
        <button
          className={`text-left flex items-center justify-between border-1 border rounded-full py-3 px-5 font-medium ${
            active ? 'text-gray-950' : 'text-white'
          } ${active ? 'bg-gray-200' : 'transparent'}`}
        >
          MAIS DETALHES{' '}
          <CaretRight
            size={24}
            weight='bold'
          />
        </button>
      </div>
    </div>
  );
}
