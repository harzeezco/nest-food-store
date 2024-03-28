import Link from 'next/link';
import { CTA_DETAILS } from './data';
import { Container } from '@user/shared';
import { Button } from '@shared/elements/button';

export function CTA() {
  return (
    <Container className='mt-16'>
      <div className='mx-auto grid max-w-[1050px] grid-cols-2 place-items-center gap-7'>
        {
        CTA_DETAILS.map(({ btn, desc, href, src, title }) => (
          <div className='flex flex-col justify-center rounded-[12px]' style={{ background: `url(/images/${src})`, maxWidth: '520px', width: '600px', maxHeight: '280px', height: '360px', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
            <div className='ml-4 max-w-[250px]'>
              <h2 className='text-3xl font-bold text-gray-700'>{title}</h2>
              <p className='mb-4 max-w-[230px]'>{desc}</p>

              <Link href={href}>
                <Button size='sm'>
                  {btn}
                </Button>
              </Link>
            </div>

          </div>
        ))
      }
      </div>
    </Container>
  );
}
