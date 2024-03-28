import Link from 'next/link';
import {
  User as UserIcon,
  ShoppingBag,
  XCircle,
  Star,
  LogOut,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import * as React from 'react';

const user = [
  {
    Icon: UserIcon,
    label: 'Manage My Account',
    href: '',
  },
  {
    Icon: ShoppingBag,
    label: 'My Order',
    href: '',
  },
  {
    Icon: XCircle,
    label: 'My Cancellations',
    href: '',
  },
  {
    Icon: Star,
    label: 'My Reviews',
    href: '',
  },
  {
    Icon: LogOut,
    label: 'Logout',
    href: '',
  },
];

function User({ children }: { children: React.ReactNode }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent className='mr-6 grid gap-1 bg-gray-100'>
        {user.map(({ href, Icon, label }) => (
          <DropdownMenuItem
            key={label}
            asChild
            className='hover:!bg-primary focus:!bg-primary flex cursor-pointer items-center gap-2 px-3 text-gray-400 hover:!text-gray-50 focus:!text-gray-50'
          >
            {label === 'Logout' ? (
              <button
                className='w-full'
                type='submit'
              >
                <Icon />
                <span>Logout</span>
              </button>
            ) : (
              <Link href={href}>
                <Icon className='text-inherit' />
                <span>{label}</span>
              </Link>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default User;
