'use client';

import { Input } from '@shared/elements/input';
import { cn } from '@shared/lib/utils';
import { Search } from 'lucide-react';
import * as React from 'react';
import { usePathname } from 'next/navigation';

interface GlobalSearchProps {
  className?: string;
  inputClassName?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  value?: string;
}

export function GlobalSearch({
  className = '',
  inputClassName,
  placeholder = 'Search for items...',
  type = 'text',
  value,
  ...otherProps
}: GlobalSearchProps) {
  const pathname = usePathname();
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [pathname]);

  return (
    <div
      className={cn(
        'relative flex rounded-[4px] border-[1.5px] w-[350px] global-search lg:w-[500px] border-[#BCE3C9] bg-transparent',
        className,
      )}
    >
      <Input
        className={cn(
          'no-focus border-none outline-0  active:outline-0 focus:outline-0 bg-transparent shadow-none placeholder:text-[#7C7C7C]',
          inputClassName,
        )}
        placeholder={placeholder}
        type={type}
        value={value}
        {...otherProps}
        ref={inputRef}
      />

      <button
        aria-label='Search Products'
        className='absolute right-3 top-2'
        type='submit'
      >
        <Search className='text-[#838383]' />
      </button>
    </div>
  );
}
