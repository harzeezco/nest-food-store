import { Container } from '@user/shared';
import Image from 'next/image';

export function HowToCreate() {
  return (
    <Container className='mt-14 py-5'>
      <h1 className='text-center text-3xl font-bold text-gray-700'>
        How to create custom shirts
      </h1>
      <p className='mx-auto max-w-md text-center'>
        Lorem ipsum det, cowec tetur duis necgi det, consec t eturlagix adipiscing eliet,
        cowec tetopak ec tetur duis necgi
      </p>

      <article className='mx-auto mt-16 flex max-w-[1100px] flex-col gap-y-16'>
        <div className='grid grid-cols-[1fr_auto_1fr] place-items-center gap-10'>
          <Image alt='Step one' height={317} src='/images/how-to1.png' width={412} />

          <div className='-mb-20 flex flex-col items-center gap-5 self-end'>
            <div className='grid size-[54px] place-items-center rounded-full text-xl font-bold shadow-lg'>
              1
            </div>
            <Image alt='Step one' className='h-[150px]' height={100} src='/images/line.png' width={3} />
          </div>

          <div>
            <h2 className='text-2xl font-bold text-gray-700'>Add your shirt design</h2>
            <p className='max-w-sm'>Lorem ipsum det, cowec tetur duis nec fringi det,
              consec t eturlagix adipiscing eliet, cowec tetopak nec
              fringi det adipiscing
            </p>
          </div>
        </div>

        <div className='grid grid-cols-[1fr_auto_1fr] place-items-center gap-10'>
          <div>
            <h2 className='text-2xl font-bold text-gray-700'>Custom artwork & review</h2>
            <p className='max-w-sm'>Lorem ipsum det, cowec tetur duis nec fringi det,
              consec t eturlagix adipiscing eliet, cowec tetopak nec
              fringi det adipiscing
            </p>
          </div>

          <div className='-mb-20 flex flex-col items-center gap-5 self-end'>
            <div className='grid size-[54px] place-items-center rounded-full text-xl font-bold shadow-lg'>
              2
            </div>
            <Image alt='Step one' className='h-[150px]' height={100} src='/images/line.png' width={3} />
          </div>

          <Image alt='Step one' height={317} src='/images/how-to2.png' width={412} />
        </div>

        <div className='grid grid-cols-[1fr_auto_1fr] place-items-center gap-10'>
          <Image alt='Step one' height={317} src='/images/how-to3.png' width={412} />

          <div className='flex flex-col items-center gap-5'>
            <div className='grid size-[54px] place-items-center rounded-full text-xl font-bold shadow-lg'>
              3
            </div>
          </div>

          <div>
            <h2 className='text-2xl font-bold text-gray-700'>Enjoy your product</h2>
            <p className='max-w-sm'>Lorem ipsum det, cowec tetur duis nec fringi det,
              consec t eturlagix adipiscing eliet, cowec tetopak nec
              fringi det adipiscing
            </p>
          </div>
        </div>
      </article>

    </Container>
  );
}
