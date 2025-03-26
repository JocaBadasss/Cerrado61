'use client';

import { useEffect, useRef, useState } from 'react';
import LetsTalkButton from '../LetsTalkButton/LetsTalkButton';

interface HeroVideoProps {
  id?: string;
}

export default function HeroVideo({ id }: HeroVideoProps) {
  const [showButton, setShowButton] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVibrating, setIsVibrating] = useState(false);
  const [hasAppeared, setHasAppeared] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Detectar se o usuário está no iPhone/iPad
    const userAgent = typeof window !== 'undefined' ? navigator.userAgent : '';
    setIsIOS(/iPad|iPhone|iPod/.test(userAgent));

    const video = videoRef.current;
    if (video) {
      video.muted = true; // Garante que o autoplay funcione no iOS
      video.setAttribute('playsinline', 'true'); // Evita que o iPhone tente abrir o vídeo em tela cheia

      // Tenta iniciar o vídeo manualmente
      const playVideo = async () => {
        try {
          await video.play();
        } catch (error) {
          console.warn(
            'Autoplay bloqueado no iOS, aguardando interação do usuário.'
          );
        }
      };

      playVideo();
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
      className='relative h-[90dvh] mt-7 rounded-2xl lg:h-[calc(100vh-3.5rem)] overflow-hidden'
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className='w-full h-[90dvh] object-cover rounded-2xl lg:h-[calc(100vh-3.5rem)]'
        onEnded={(e) => e.currentTarget.play()}
        controls={isIOS} // Apenas iOS verá os controles
      >
        <source
          src='/capa.mp4'
          type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
        />
        Seu navegador não suporta a tag de vídeo.
      </video>

      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-2xl pointer-events-none'></div>

      {showButton && (
        <div
          className={`absolute bottom-[10%] left-[5%] flex items-center transition-opacity ${
            hasAppeared ? 'animate-slide-up-fade' : ''
          } ${isVibrating ? 'animate-vibrate' : ''}`}
          onAnimationEnd={() => setHasAppeared(false)}
        >
          <LetsTalkButton />
        </div>
      )}
    </section>
  );
}
