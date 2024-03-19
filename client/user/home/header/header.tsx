import { GlobalSearch } from '../elements/global-search';
import Image from 'next/image';
import { User } from 'lucide-react';
import { Container, Logo } from '@user/shared';

export function Header() {
  return (
    <Container className='flex items-center justify-between'>

      <div className='flex items-center gap-20'>
        <Logo />
        <GlobalSearch />
      </div>

      <div className='flex items-center gap-4'>
        <div className='flex items-center gap-1'>
          <Image alt='cart' height={35} src='/icons/favourite.svg' width={35} />
          <span className='self-end text-[#7E7E7E]'>Wishlist</span>
        </div>
        <div className='flex items-center gap-1'>
          <Image alt='cart' height={35} src='/icons/cart.svg' width={35} />
          <span className='self-end text-[#7E7E7E]'>Cart</span>
        </div>
        <div className='flex gap-1'>
          <User className='size-9' />
          <span className='self-end text-[#7E7E7E]'>Account</span>
        </div>
      </div>
    </Container>
  );
}
