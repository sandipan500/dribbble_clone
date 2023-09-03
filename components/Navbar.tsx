import Image from 'next/image';
import Link from 'next/link';

import { navLinks } from '@/constants';
import AuthProviders from './AuthProviders';

const Navbar = () => {
  const session = {};

  return (
    <nav className='flexBetween navbar'>
      <div className='flex-1 flexStart gap-10'>
        <Link href='/'>
          <Image
            src='/blogo.png'
            width={115}
            height={43}
            alt='logo'
          />
        </Link>
        <ul className='xl:flex hidden text-small gap-7'>
          {navLinks.map((link) => (
            <Link href={link.href} key={link.text}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className='flexCenter gap-4'>
        {session ? (
          <>
            User Photo

            <Link href='/create-project'>
              Share work
            </Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  )
};

export default Navbar;