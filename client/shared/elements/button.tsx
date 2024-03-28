/* eslint-disable react/button-has-type */
import React, { ReactNode } from 'react';

import { cn } from '@shared/lib/utils';

const Variants = {
  primary:
    'bg-green-500 text-white active:scale-95',
  orange:
    'bg-[#F59758] text-white active:scale-95',
  outline:
    'border size-10 grid place-items-center transition border-gray-300 bg-transparent border-solid hover:border-[#1152A2]',
};

const sizes = {
  sm: 'px-7 py-3 rounded-[10px]',
  md: 'px-7 py-3 font-medium w-fit',
  lg: 'px-16 py-2 font-medium rounded-[100px]',
  full: 'w-full py-3 font-medium',
  slate: 'rounded-[10px] px-10 py-2 font-medium transition-all',
};

type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string | ReactNode;
  className?: string;
  size?: keyof typeof sizes;
  type?: string;
  variant?: keyof typeof Variants;
};

export function Button({
  children = null,
  className = '',
  size,
  type = 'button',
  variant = 'primary',
  ...otherProps
}: ButtonType) {
  return (
    <button
      className={cn(
        'disabled:opacity-70 font-medium whitespace-nowrap transition-all duration-500 ease-out disabled:cursor-not-allowed focus:outline-none',
        Variants[variant],
        sizes[size as keyof typeof sizes],
        className,
      )}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
}
