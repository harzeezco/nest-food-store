import { Container } from '@user/shared';
import { CATEGORIES } from './data';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@shared/elements/ui/carousel';
import { cn } from '@shared/lib/utils';

export function Categories() {
  return (
    <Container className='mt-14 py-5'>
      <h1 className='text-center text-3xl font-bold text-[#253D4E]'>T-shirt Printing for Everyone</h1>
      <p className='text-center text-lg'>What’s more, we do it right!</p>

      <Carousel
        className='mx-auto mt-10 w-4/5 md:w-[90%]'
        opts={{
        align: 'start',
      }}
      >
        <CarouselContent className='mx-auto'>
          {CATEGORIES.map(({ label, src, total }) => (
            <CarouselItem key={label} className='basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5'>
              <div className='flex flex-col items-center justify-center gap-3'>
                <Image alt={label} className={cn(label === 'Children' && 'rounded-full h-[120px] w-[120px] object-cover')} height={120} src={`/images/${src}`} width={120} />

                <p
                  className='relative'
                >
                  <span className='text-xl font-bold text-black'>{label}</span>

                  <span className='absolute -right-5 top-0 grid size-4 place-items-center rounded-full bg-[#F59758] text-[10px] font-medium text-white'>{ total }</span>
                </p>
              </div>
            </CarouselItem>
        ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Container>
  );
}
