import { Button } from '@shared/elements/button';
import Image from 'next/image';
import { features } from './data';

export function Features() {
  return (
    <section className='clip relative mt-14 bg-[#F5F5F5] py-5'>
      <article className='mx-auto mt-16 flex max-w-[1100px] flex-col gap-y-16'>
        <div className='grid grid-cols-[1fr_1fr] place-items-center gap-10'>
          <Image alt='Step one' height={317} src='/images/banner-24.png' width={412} />

          <div>
            <h2 className='max-w-xs text-2xl font-bold text-gray-700'>Free and easy way to
              bring your ideas to life
            </h2>
            <p className='my-2 mb-5 max-w-sm'>Lorem ipsum det, cowec tetur duis nec fringi det,
              consec t eturlagix adipiscing eliet, cowec tetopak nec
              fringi det adipiscing
            </p>

            <Button size='sm' variant='primary'>
              Get Started
            </Button>
          </div>
        </div>

      </article>

      <div className='mx-auto mt-20 max-w-[1100px]'>
        <h1 className='text-center text-3xl font-bold text-gray-700'>
          T-shirt printing made easy.
        </h1>
        <p className='mx-auto max-w-md text-center'>
          Lorem ipsum det, cowec tetuec tetur duis necgi duis necgi det, consec eturlagix
          adipiscing eliet, cowec tetopak
        </p>

        <div className='mt-16 grid grid-cols-[1fr_1fr] place-items-center gap-10'>
          <div>
            {
              features.map(({ desc, title }) => (
                <div key={title} className='group p-3 transition-all duration-200 hover:bg-white'>
                  <h2 className='text-2xl font-bold text-black transition-all duration-200 group-hover:text-green-500'>{title}</h2>
                  <p className='pointer-events-none h-0 max-w-sm opacity-0 transition-all group-hover:h-auto group-hover:opacity-100'>{desc}</p>
                </div>
              ))
            }

          </div>
          <Image alt='Step one' height={417} src='/images/banner-25.png' width={612} />
        </div>
      </div>

    </section>
  );
}
