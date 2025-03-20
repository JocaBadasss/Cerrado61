'use client';
import { PiCaretRightBold } from 'react-icons/pi';
import { useState, useEffect } from 'react';

import Tag from '../../../Tag/Tag';

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (active) {
      const timeout = setTimeout(() => setIsVisible(true), 500); // Delay de 500ms
      return () => clearTimeout(timeout); // Limpa o timeout ao desmontar
    } else {
      setIsVisible(false);
    }
  }, [active]);

  return (
    <div
      role='card'
      className={`${
        active ? 'lg:flex-[2]' : 'lg:flex-1'
      } bg-gray-500 rounded-lg overflow-hidden transition-all duration-1000 ease-in-out p-6 flex flex-col justify-between hover:cursor-pointer`}
      onMouseEnter={onMouseEnter}
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: `${positionBackground}`,
      }}
    >
      {/* Tags */}
      <div className='opacity-0 lg:opacity-100 tags flex w-full justify-end '>
        <div
          className={`flex gap-2 w-72 flex-wrap justify-end transition-opacity duration-1000 ease-in-out ${
            active
              ? 'lg:opacity-100 lg:translate-y-0'
              : 'lg:opacity-0 lg:translate-y-5'
          }`}
        >
          {tags.map((tag, index) => (
            <Tag
              key={index}
              text={tag}
            />
          ))}
        </div>
      </div>

      {/* Conteúdo */}
      <div className='flex flex-col gap-4'>
        <h1 className=' text-xl lg:text-2xl  font-poppins font-medium'>
          {title}
        </h1>
        {/* Subtítulo desktop */}
        <p
          className={`hidden lg:block transition-all duration-500 ease-in-out overflow-hidden font-roboto  ${
            isVisible
              ? 'max-h-[100px] text-xs lg:text-sm opacity-100'
              : 'lg:max-h-0 lg:text-[2px] lg:opacity-0'
          }`}
          style={{
            lineHeight: isVisible ? '1.5rem' : '0',
            padding: isVisible ? '0.5rem 0' : '0',
          }}
        >
          {subtitle}
        </p>

        {/* Subtítulo mobile */}
        <p
          className={`block lg:hidden transition-all duration-500 ease-in-out overflow-hidden font-roboto max-h-[100px] text-xs lg:text-sm opacity-100 `}
          style={{
            lineHeight: isVisible ? '1.5rem' : '1.5rem',
            padding: isVisible ? '0.5rem 0' : '0.5rem 0',
          }}
        >
          {subtitle}
        </p>

        <button
          className={` text-sm lg:text-base text-left flex items-center justify-between border-1 border rounded-full py-1 px-3 lg:py-3 lg:px-5 font-medium transition-all duration-1000 ease-in-out ${
            active
              ? 'text-gray-950 bg-gray-200  '
              : 'text-white bg-transparent  '
          }`}
        >
          MAIS DETALHES <PiCaretRightBold className='text-sm lg:text-2xl' />
        </button>
      </div>
    </div>
  );
}
