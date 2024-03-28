/* eslint-disable jsx-a11y/label-has-associated-control */

'use client';

import { Heart, Menu, ShoppingCart } from 'lucide-react';
import { Container, Logo } from '@user/shared';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@shared/elements/button';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@shared/lib/utils';
import { Label } from '@shared/elements/ui/label';
import { Input } from '@shared/elements/input';
import { Popover, PopoverContent, PopoverTrigger } from '@shared/elements/ui/popover';
import { useUser } from 'client/store/use-user';
import UserAvatar from '@shared/elements/user-avatar';
import { GlobalSearch } from '@user/home/elements/global-search';
import useAuthenticated from '@shared/hooks/use-authenticated';

type UserProps = {
  Icon: React.ReactNode,
  href: string,
  label: string
};

const USERICONS: UserProps[] = [
  {
    Icon: <Heart />,
    label: 'WishList',
    href: '/wishlist'
  },
  {
    Icon: <ShoppingCart />,
    label: 'Cart',
    href: '/cart'
  }
];

const NAVBARS = [
  {
    label: 'Home',
    href: '/',
  },
    {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Shop',
    href: '/shop',
  },
    {
    label: 'Vendors',
    href: '/vendors',
  },
];

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const user = useUser((state) => state.user);

  const isLoggedIn = useAuthenticated();

  console.log(isLoggedIn);

  return (
    <header>
      <Container
        className={cn('flex items-center justify-between bg-white fixed inset-x-0 top-0 z-[9999] py-5')}
      >
        <div className='flex items-center gap-7 max-lg:justify-between max-sm:w-full lg:gap-20'>
          <Logo />
          <GlobalSearch className='max-sm:max-w-[350px]' />

          <div className='lg:hidden'>
            <Popover>
              <PopoverTrigger asChild>
                <button aria-label='hamburger' type='button'>
                  <Menu className='size-9 text-[#101010]' />
                </button>
              </PopoverTrigger>
              <PopoverContent className='w-80'>
                <div className='grid gap-4'>
                  <div className='space-y-2'>
                    <h4 className='font-medium leading-none'>Dimensions</h4>
                    <p className='text-sm'>
                      Set the dimensions for the layer.
                    </p>
                  </div>
                  <div className='grid gap-2'>
                    <div className='grid grid-cols-3 items-center gap-4'>
                      <Label htmlFor='width'>Width</Label>
                      <Input
                        className='col-span-2 h-8'
                        defaultValue='100%'
                        id='width'
                      />
                    </div>
                    <div className='grid grid-cols-3 items-center gap-4'>
                      <Label htmlFor='maxWidth'>Max. width</Label>
                      <Input
                        className='col-span-2 h-8'
                        defaultValue='300px'
                        id='maxWidth'
                      />
                    </div>
                    <div className='grid grid-cols-3 items-center gap-4'>
                      <Label htmlFor='height'>Height</Label>
                      <Input
                        className='col-span-2 h-8'
                        defaultValue='25px'
                        id='height'
                      />
                    </div>
                    <div className='grid grid-cols-3 items-center gap-4'>
                      <Label htmlFor='maxHeight'>Max. height</Label>
                      <Input
                        className='col-span-2 h-8'
                        defaultValue='none'
                        id='maxHeight'
                      />
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className='flex gap-4 max-lg:hidden'>
          <div className='flex items-center gap-4'>
            {USERICONS.map(({ href, Icon, label }) => (
              <button key={label} type='button' onClick={() => router.push(href)}>
                <span className='size-9 transition-all hover:text-green-500'>
                  {Icon}
                </span>
              </button>
        ))}
          </div>

          <div className='max-lg:hidden'>
            {
          isLoggedIn ? (
            <UserAvatar />
          ) : (
            <div className='flex items-center gap-3'>
              <Link href='/sign-in'>
                <Button size='sm' variant='primary'>
                  Login
                </Button>
              </Link>

              <Link href='/sign-up'>
                <Button size='sm' variant='orange'>
                  Sign Up
                </Button>
              </Link>
            </div>
            )
        }
          </div>
        </div>

      </Container>

      <hr className='mt-[90px] py-2' />

      <Container className='flex items-center justify-between'>
        <nav>
          <ul className='flex items-center gap-5'>
            {
              NAVBARS.map(({ href, label }) => {
                const active = pathname === 'href' || pathname.includes(href);

                return (
                  <li key={label}>
                    <Link className={cn('font-bold transition-all focus:text-green-500 hover:text-green-500', active ? 'text-green-500' : 'text-[#253D4E]')} href={href}>
                      {label}
                    </Link>
                  </li>
                );
              })
            }
          </ul>
        </nav>

        <div className='flex items-center gap-2 max-sm:hidden'>
          <Image alt='headphone' height={35} src='/icons/headphone.svg' width={35} />
          <div>
            <p className='-mb-2 text-2xl font-bold text-green-500'>1900 - 888</p>
            <span className='text-sm'>24/7 Support Center</span>
          </div>
        </div>
      </Container>

      <hr className='mt-2' />

    </header>

  );
}
