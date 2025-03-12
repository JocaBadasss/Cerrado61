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
        active ? 'flex-[2]' : 'flex-1'
      } bg-gray-500 rounded-lg overflow-hidden transition-all duration-1000 ease-in-out p-6 flex flex-col justify-between hover:cursor-pointer`}
      onMouseEnter={onMouseEnter}
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: `${positionBackground}`,
      }}
    >
      {/* Tags */}
      <div className='tags flex w-full justify-end'>
        <div
          className={`flex gap-2 w-72 flex-wrap justify-end transition-opacity duration-1000 ease-in-out ${
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
      </div>

      {/* Conteúdo */}
      <div className='flex flex-col gap-4'>
        <h1 className='text-2xl  font-poppins font-medium'>{title}</h1>
        <p
          className={`transition-all duration-500 ease-in-out overflow-hidden font-roboto ${
            isVisible
              ? 'max-h-[100px] text-sm opacity-100'
              : 'max-h-0 text-[2px] opacity-0'
          }`}
          style={{
            lineHeight: isVisible ? '1.5rem' : '0',
            padding: isVisible ? '0.5rem 0' : '0',
          }}
        >
          {subtitle}
        </p>

        <button
          className={`text-left flex items-center justify-between border-1 border rounded-full py-3 px-5 font-medium transition-all duration-1000 ease-in-out ${
            active
              ? 'text-gray-950 bg-gray-200  '
              : 'text-white bg-transparent  '
          }`}
        >
          MAIS DETALHES{' '}
          <PiCaretRightBold
            size={24}
            // weight='bold'
          />
        </button>
      </div>
    </div>
  );
}
