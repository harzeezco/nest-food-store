'use client';

import { Button } from '@shared/elements/button';
import { Input } from '@shared/elements/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@shared/elements/ui/form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { Container } from '@user/shared';
import Link from 'next/link';
import axios from 'axios';
import { toast } from 'react-toastify';
import { saveUserDataToLocal, useUser } from 'client/store/use-user';

const formSchema = z
  .object({
    name: z.string().regex(/^[\s'A-Za-z-]{4,50}$/, {
      message: 'Specify your full name',
    }),
    email: z
      .string()
      .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
        message: 'Please Enter a valid email address',
      })
      .min(5),
    number: z
      .string()
      .min(6, 'Please enter your mobile number')
      .refine(
        (value) => {
          // Regular expression to match common phone number formats
          const phoneNumberRegex =
            /^\+?(\d{1,3})?[ .-]?\(?\d{3}\)?[ .-]?\d{3}[ .-]?\d{4}$/;

          return phoneNumberRegex.test(value);
        },
        {
          message: 'Please enter a valid phone number',
          path: ['number'],
        },
    ),
    password: z
    .string()
    .min(6)
    .max(15)
  });

export default function SignUpPage() {
  const setUser = useUser((state) => state.setUser);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      number: '',
      password: '',
    },
  });

  // 2. Define a submit handler.
 async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await axios.post('http://localhost:8000/api/users/signup', values, {
          withCredentials: true
      });

      if (res.status === 201) {
           setUser(res.data?.user);
        saveUserDataToLocal(res.data?.user);

        toast.success('Account created successfully');
         form.reset();
         window.location.assign('/');
      }
    } catch (error: any) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }

  return (
    <Container className='mt-10 grid grid-cols-[0.8fr_1.2fr] place-items-center'>
      <div className='self-start'>
        <Image alt='Signing' height={333} src='/images/sign-image.png' width={401} />
      </div>

      <Form {...form}>
        <form className='w-full max-w-md space-y-3 pb-10' onSubmit={form.handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <h3 className='text-3xl font-bold text-green-500'>Register</h3>
            <p className='[#999999] text-xl font-medium capitalize'>Join us now</p>
          </div>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel className="after:ml-0.5 after:text-red-500 after:content-['*']">Full Name</FormLabel>
                <FormControl>
                  <Input placeholder='e.g John Doe' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
          )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel className="after:ml-0.5 after:text-red-500 after:content-['*']">Email Address</FormLabel>
                <FormControl>
                  <Input placeholder='e.g johndoe@gmail.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
          )}
          />

          <FormField
            control={form.control}
            name='number'
            render={({ field }) => (
              <FormItem>
                <FormLabel className="after:ml-0.5 after:text-red-500 after:content-['*']">Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder='+123' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
          )}
          />

          <FormField
            control={form.control}
            name='password'
            render={({ field }) => (
              <FormItem>
                <FormLabel className="after:ml-0.5 after:text-red-500 after:content-['*']">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder='Enter your password'
                    type='password'
                    {...field}
                  />
                </FormControl>
                <FormMessage className='text-orange-700' />
              </FormItem>
          )}
          />

          <p className='text-[#999]'>Your personal data will be used to support your experience throughout this
            website, to manage access to your account, and for other purposes described in
            our privacy policy.
          </p>

          <div className='pt-3'>
            <Button className='uppercase' size='sm' type='submit'>Register</Button>
          </div>
          <div className='flex items-center gap-1'>
            <p className='text-[#999999]'>Already have an account?</p>
            <Link className='text-green-500' href='/sign-in'>Login</Link>
          </div>
        </form>
      </Form>

    </Container>
  );
}
