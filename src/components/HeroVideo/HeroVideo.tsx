'use client';

import { useEffect, useRef, useState } from 'react';
import { GoArrowUpRight } from "react-icons/go";

interface HeroVideoProps {
  id?: string;
}

export default function HeroVideo({ id }: HeroVideoProps) {
  const [showButton, setShowButton] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVibrating, setIsVibrating] = useState(false);
  const [hasAppeared, setHasAppeared] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const checkVideoEnded = () => {
        if (video.ended) {
          video.play();
        }
      };

      const intervalId = setInterval(checkVideoEnded, 500); // Verifica a cada 500ms

      return () => clearInterval(intervalId);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
      setHasAppeared(true);
    }, 2000);
    setTimeout(() => setHasAppeared(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showButton) {
      const vibrateInterval = setInterval(() => {
        setIsVibrating(true);
        setTimeout(() => setIsVibrating(false), 300);
      }, 5000);

      return () => clearInterval(vibrateInterval);
    }
  }, [showButton]);

  return (
    <section
      id={id}
      className='relative  mt-7 rounded-2xl h-[calc(100vh-3.5rem)] overflow-hidden  '
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className=' w-full  object-cover  rounded-2xl h-[calc(100vh-3.5rem)] '
        onEnded={(e) => e.currentTarget.play()}
      >
        <source
          src='/video.webm'
          type='video/webm'
        />
        {/* <source
          src='/video.ogv'
          type='video/ogg'
        />
        <source
          src='/video.mp4'
          type='video/mp4'
        /> */}
        Seu navegador não suporta a tag de vídeo.
      </video>
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-2xl'></div>

      {showButton && (
        // <button
        //   className={`absolute bottom-[10%] left-[5%] bg-zinc-500 bg-opacity-50 text-white py-2 px-4 rounded-3xl shadow-lg font-semibold border-[1px] border-white  transition-opacity  text-[12px] ${
        //     hasAppeared ? 'animate-slide-up-fade' : ''
        //   } ${isVibrating ? 'animate-vibrate' : ''}`}
        //   onAnimationEnd={() => setHasAppeared(false)}
        // >
        //   Fala com a gente!
        // </button>

        <div
          className={`absolute bottom-[10%] left-[5%] flex items-center transition-opacity ${
            hasAppeared ? 'animate-slide-up-fade' : ''
          } ${isVibrating ? 'animate-vibrate' : ''}`}
          onAnimationEnd={() => setHasAppeared(false)}
        >
          <button
            className={` text-gray-950 bg-gray-200 py-2 px-4 rounded-3xl shadow-lg font-semibold border-[1px] border-white     font-robotoMono `}
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
      )}
    </section>
  );
}
