'use client';

import Header from '@/components/Header/Header';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className='w-full  pt-16'>
        <div className='min-h-screen flex items-center justify-center  bg-gray-200  p-6'>
          <div className='max-w-4xl w-full shadow  rounded-lg flex overflow-hidden'>
            {/* Sidebar */}
            <div className='w-1/3 bg-gray-200 p-6 flex flex-col gap-6  '>
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
                    src='/logo-black.svg'
                    alt='Logotipo Cerrado61: lagartixa preta curvada com ponto laranja'
                    className=' w-8 lg:w-12'
                  />

                  <div className='flex flex-col items-center '>
                    <h1
                      role='heading'
                      className='font-Heading text-xl lg:text-3xl text-black inline-block'
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
              <div>
                <h3 className='font-medium'>Chat to us</h3>
                <p className='text-gray-600 text-sm'>
                  Our friendly team is here to help.
                </p>
                <p className='text-blue-600 text-sm'>hi@untitledui.com</p>
              </div>
              <div>
                <h3 className='font-medium'>Visit us</h3>
                <p className='text-gray-600 text-sm'>
                  Come say hello at our office HQ.
                </p>
                <p className='text-gray-800 text-sm'>
                  100 Smith Street
                  <br />
                  Collingwood VIC 3066 AU
                </p>
              </div>
              <div>
                <h3 className='font-medium'>Call us</h3>
                <p className='text-gray-600 text-sm'>
                  Mon-Fri from 8am to 5pm.
                </p>
                <p className='text-gray-800 text-sm'>+1 (555) 000-0000</p>
              </div>
              <div className='flex gap-3 mt-auto'>
                <a
                  href='#'
                  className='text-gray-600 hover:text-gray-900'
                >
                  🔗
                </a>
                <a
                  href='#'
                  className='text-gray-600 hover:text-gray-900'
                >
                  🔗
                </a>
                <a
                  href='#'
                  className='text-gray-600 hover:text-gray-900'
                >
                  🔗
                </a>
                <a
                  href='#'
                  className='text-gray-600 hover:text-gray-900'
                >
                  🔗
                </a>
              </div>
            </div>

            {/* Form */}
            <div className='w-2/3 bg-zinc-800 p-10 flex flex-col gap-6'>
              <h1 className='text-2xl font-bold text-gray-900'>
                Got ideas? We've got the skills. Let's team up.
              </h1>
              <p className='text-gray-700 text-sm'>
                Tell us more about yourself and what you’ve got in mind.
              </p>

              <form className='flex flex-col gap-4'>
                <input
                  type='text'
                  placeholder='Your name'
                  className='p-3 border-b border-gray-700 bg-transparent outline-none'
                  required
                />
                <input
                  type='email'
                  placeholder='you@company.com'
                  className='p-3 border-b border-gray-700 bg-transparent outline-none'
                  required
                />
                <textarea
                  placeholder='Tell us a little about the project...'
                  className='p-3 border-b border-gray-700 bg-transparent outline-none h-20'
                  required
                ></textarea>

                <fieldset className='flex flex-wrap gap-3 text-sm text-gray-900'>
                  <label className='flex items-center gap-2'>
                    <input
                      type='checkbox'
                      className='accent-gray-900'
                    />{' '}
                    Website design
                  </label>
                  <label className='flex items-center gap-2'>
                    <input
                      type='checkbox'
                      className='accent-gray-900'
                    />{' '}
                    UX design
                  </label>
                  <label className='flex items-center gap-2'>
                    <input
                      type='checkbox'
                      className='accent-gray-900'
                    />{' '}
                    User research
                  </label>
                  <label className='flex items-center gap-2'>
                    <input
                      type='checkbox'
                      className='accent-gray-900'
                    />{' '}
                    Content creation
                  </label>
                  <label className='flex items-center gap-2'>
                    <input
                      type='checkbox'
                      className='accent-gray-900'
                    />{' '}
                    Strategy & consulting
                  </label>
                  <label className='flex items-center gap-2'>
                    <input
                      type='checkbox'
                      className='accent-gray-900'
                    />{' '}
                    Other
                  </label>
                </fieldset>

                <button
                  type='submit'
                  className='bg-gray-900 text-white py-3 px-6 rounded-md mt-4 hover:bg-gray-800'
                >
                  Let's get started!
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
