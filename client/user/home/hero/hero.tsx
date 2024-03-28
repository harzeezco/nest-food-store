'use client';

import { Button } from '@shared/elements/ui/button';
import { Container } from '@user/shared';
import useCounter from '@user/shared/hooks/use-counter';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  const { counter1, counter2, observe } = useCounter();

  return (
    <Container className='mt-10 flex justify-between gap-10 max-md:flex-col'>
      <div className='mt-7'>
        <button disabled className='mb-5 cursor-not-allowed  rounded-[100px] bg-green-500/20 px-6 py-2  font-semibold text-green-500' type='button'>
          Make an order
        </button>

        <h1 className='mb-2 text-4xl font-bold text-gray-700'>
          Discover Limitless Possibilities: Your One-Stop Shop for Everything You Need!
        </h1>
        <p className='text-[#999]'>Experience Seamless Shopping, Unmatched Convenience, and Endless Choices with Our Cutting-Edge E-Commerce Platform.</p>

        <Button className='mt-5 !py-4 text-lg font-semibold' size='lg'>
          Shop Now
          <span><ArrowUpRight color='#fff' size='20' /></span>
        </Button>

        <div ref={observe} className='mt-10 flex gap-8'>
          <div className='border-r border-solid border-[#CCCCCC] pr-8'>
            <p className='-mb-2 text-3xl font-semibold text-gray-700 md:text-4xl lg:text-5xl'>
              <span ref={counter1} data-value='4'>
                4
              </span>
              K
            </p>
            <span className='text-[#7e7e7e]'>Collections</span>
          </div>

          <div>
            <p className='-mb-2 text-3xl font-semibold text-gray-700 md:text-4xl lg:text-5xl'>
              <span ref={counter2} data-value='9'>
                9
              </span>
              K
            </p>
            <span className='text-[#7e7e7e]'>items trusted to deliver</span>
          </div>
        </div>
      </div>

      <Image
        alt='A lady feeling happy'
        height={500}
        src='/images/hero-image.png'
        width={600}
      />
    </Container>
  );
}
