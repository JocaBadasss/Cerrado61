
export default function Logo() {
    return (
                      <a
                href='/
     '
              >
                {' '}
                <div
                  role='banner'
                  className='flex flex-row gap-3 lg:gap-5 items-center rounded'
                >
                  <img
                    src='/logo.svg'
                    alt='Logotipo Cerrado61: lagartixa preta curvada com ponto laranja'
                    className=' w-8 lg:w-12'
                  />

                  <div className='flex flex-col items-center '>
                    <h1
                      role='heading'
                      className='font-Heading text-xl lg:text-3xl text-white inline-block'
                    >
                      Cerrado
                      <span className='font-Numbers text-Cerrado_100'>61</span>
                    </h1>
                    <h2 className='font-Texting text-xs lg:text-base text-Cerrado_100 -mt-[0.70rem] lg:-mt-[0.90rem]'>
                      AUDIOVISUAL
                    </h2>
                  </div>
                </div>
              </a>
    )
}