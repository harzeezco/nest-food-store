import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link className='flex items-center gap-3' href='/'>
      <Image alt='nest logo icon' height={45} src='/icons/logo.svg' width={45} />
      <Image
        alt='tsr logo'
        height={45}
        src='/icons/logo-text.svg'
        width={75}
      />
    </Link>
  );
}
