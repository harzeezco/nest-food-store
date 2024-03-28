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

export function FeatureProducts() {
  return (
    <Container className='mt-14 py-5'>
      <h1 className='text-center text-3xl font-bold text-gray-700'>
        Featured products
      </h1>
      <p className='text-center text-lg'>
        What’s more, we do it right!
      </p>

      <div className='mx-auto mt-7 grid max-w-[1000px] grid-cols-4 gap-4 gap-y-10'>
        {PRODUCTS.map((product) => (
          <div className='flex flex-col items-center'>
            <Image
              alt={product.name}
              height={440}
              src={`/images/${product.src}`}
              width={330}
            />
            <p className='mt-3 text-lg font-semibold text-black'>{product.name}</p>
            <p className='font-medium'>{product.priceRate}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
