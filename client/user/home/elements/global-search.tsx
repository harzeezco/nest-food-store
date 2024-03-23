'use client';

import { Input } from '@shared/elements/input';
import { Form, FormControl, FormField, FormItem } from '@shared/elements/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@shared/elements/ui/select';
import { cn } from '@shared/lib/utils';
import { Search } from 'lucide-react';
import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { usePathname } from 'next/navigation';

interface GlobalSearchProps {
  className?: string;
  inputClassName?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  value?: string;
}

const FormSchema = z.object({
  email: z
    .string({
      required_error: 'Please select an email to display.',
    })
    .email(),
});

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
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [pathname]);

  return (
    <div
      className={cn(
        'relative flex rounded-[4px] border-[1.5px] w-[500px] border-[#BCE3C9] bg-transparent',
        className,
      )}
    >
      <Form {...form}>
        <form
          className='w-2/3 space-y-6'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <Select
                  defaultValue={field.value}
                  onValueChange={field.onChange}
                >
                  <FormControl>
                    <SelectTrigger className="!border-0 after:text-[#CACACA] after:content-['|'] ">
                      <SelectValue placeholder='All Categories' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='m@example.com'>
                      m@example.com
                    </SelectItem>
                    <SelectItem value='m@google.com'>
                      m@google.com
                    </SelectItem>
                    <SelectItem value='m@support.com'>
                      m@support.com
                    </SelectItem>
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </form>
      </Form>
      <Input
        className={cn(
          'no-focus border-none outline-0  active:outline-0 focus:outline-0 bg-transparent pl-5 shadow-none placeholder:text-[#7C7C7C]',
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
