import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link className='flex items-center gap-3' href='/'>
      <Image alt='nest logo icon' height={35} src='/images/logo.png' width={150} />
    </Link>
  );
}
