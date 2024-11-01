import { Header } from '@/components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className='w-full '>
        <div className='relative h-screen overflow-hidden'>
          <video
            autoPlay
            loop
            muted
            className='absolute top-0 left-0 w-full h-screen object-cover'
          >
            <source
              src='/video.mp4'
              type='video/mp4'
            />
            Seu navegador não suporta a tag de vídeo.
          </video>
        </div>
        <div>Olá</div>
      </main>
    </>
  );
}
