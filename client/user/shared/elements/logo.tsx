import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link className='flex items-center gap-3' href='/'>
      <Image alt='nest logo icon' height={35} src='/icons/logo.svg' width={35} />
      <Image
        alt='tsr logo'
        height={35}
        src='/icons/logo-text.svg'
        width={75}
      />
    </Link>
  );
}
