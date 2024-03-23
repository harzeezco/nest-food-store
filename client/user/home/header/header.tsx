'use client';

import { GlobalSearch } from '../elements/global-search';
import { Heart, ShoppingCart, User } from 'lucide-react';
import { Container, Logo } from '@user/shared';
import { useRouter } from 'next/navigation';

const USERICONS = [
  {
    Icon: <Heart />,
    label: 'WishList',
    href: '/wishlist'
  },
  {
    Icon: <ShoppingCart />,
    label: 'Cart',
    href: '/cart'
  },
    {
    Icon: <User />,
    label: 'User',
    href: '/user'
  },
];

export function Header() {
  const router = useRouter();

  return (
    <Container as='header' className='flex items-center justify-between py-6'>
      <div className='flex items-center gap-20'>
        <Logo />
        <GlobalSearch />
      </div>

      <div className='flex items-center gap-4'>
        {USERICONS.map(({ href, Icon, label }) => (
          <button key={label} className='group flex' type='button' onClick={() => router.push(href)}>
            <span className='size-7 transition-all group-hover:text-green-500'>
              {Icon}
            </span>
            <span className='self-end text-[#7E7E7E] transition-all group-hover:text-green-500'>
              {label}
            </span>
          </button>
        ))}
      </div>
    </Container>
  );
}
