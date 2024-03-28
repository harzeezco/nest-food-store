import { Button } from '@shared/elements/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@shared/elements/ui/carousel';
import { Container } from '@user/shared';
import Image from 'next/image';

const PRODUCTS = [
  {
    src: 'product1.png',
    name: 'Zone Sweatshirt',
    priceRate: '$19.95 – $159.95',
  },
  {
    src: 'product2.png',
    name: 'Zone Sweatshirt',
    priceRate: '$19.95 – $159.95',
  },
  {
    src: 'product3.png',
    name: 'Zone Sweatshirt',
    priceRate: '$19.95 – $159.95',
  },
  {
    src: 'product4.png',
    name: 'Zone Sweatshirt',
    priceRate: '$19.95 – $159.95',
  },
  {
    src: 'product5.png',
    name: 'Zone Sweatshirt',
    priceRate: '$19.95 – $159.95',
  },
  {
    src: 'product6.png',
    name: 'Zone Sweatshirt',
    priceRate: '$19.95 – $159.95',
  },
  {
    src: 'product7.png',
    name: 'Zone Sweatshirt',
    priceRate: '$19.95 – $159.95',
  },
  {
    src: 'product8.png',
    name: 'Zone Sweatshirt',
    priceRate: '$19.95 – $159.95',
  },
];

const PRODUCTS_CATEGORIES = [
  'New Arrival', 'Best Seller', 'Sale', 'Popular',
];

export function OurPicks() {
  return (
    <Container className='mt-14 py-5'>
      <h1 className='text-center text-3xl font-bold text-[#253D4E]'>Explore designs picked for you</h1>
      <p className='text-center text-lg'>What’s more, we do it right!</p>

      <div className='mx-auto mt-10 flex max-w-[1050px] items-center gap-3'>
        {
          PRODUCTS_CATEGORIES.map((label) => (
            <Button key={label} className='bg-none font-medium'>
              {label}
            </Button>
          ))
        }
      </div>

      <Carousel
        className='mx-auto mt-5 w-4/5 md:w-[90%]'
        opts={{
        align: 'start',
      }}
      >
        <CarouselContent className='mx-auto'>
          {PRODUCTS.map(({ name, priceRate, src }) => (
            <CarouselItem key={name} className='basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5'>
              <div className='flex flex-col items-center'>
                <Image
                  alt={name}
                  height={440}
                  src={`/images/${src}`}
                  width={330}
                />
                <p className='mt-3 text-lg font-semibold text-black'>{name}</p>
                <p className='font-medium'>{priceRate}</p>
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
