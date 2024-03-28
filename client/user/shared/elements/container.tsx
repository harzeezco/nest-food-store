import React from 'react';

import { cn } from '@shared/lib/utils';

interface Props<C extends React.ElementType> {
  as?: C;
  children: React.ReactNode;
  className?: string;
}

type ContainerTypes<C extends React.ElementType> = Props<C> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof Props<C>>;

// Source: www.benmvp.com/blog/polymorphic-react-components-typescript/

export function Container<C extends React.ElementType = 'div'>({
  as,
  children,
  className,
  ...otherProps
}: ContainerTypes<C>) {
  const Component = as ?? 'div';

  return (
    <Component
      {...otherProps}
      className={cn('w-full mx-auto max-w-[1250px] md:px-6 max-md:px-4 xl:max-w-[1420px]', className)}
    >
      {children}
    </Component>
  );
}
