import { Input } from '@shared/elements/input';
import { cn } from '@shared/lib/utils';
import { Search } from 'lucide-react';
import * as React from 'react';

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
  placeholder = 'e.g Introduction',
  type = 'text',
  value,
  ...otherProps
}: GlobalSearchProps) {
  return (
    <div
      className={cn(
        'relative mt-5 rounded-[4px] border-[1.5px] w-[500px] border-[#BCE3C9] bg-transparent',
        className,
      )}
    >
      <Input
        className={cn(
          'no-focus border-none bg-transparent pl-5 shadow-none outline-0 placeholder:text-[#7C7C7C]',
          inputClassName,
        )}
        placeholder={placeholder}
        type={type}
        value={value}
        {...otherProps}
      />

      <button aria-label='Search Products' className='absolute right-3 top-2' type='submit'>
        <Search />
      </button>
    </div>
  );
}
