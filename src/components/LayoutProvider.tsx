'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function LayoutProvider({ children }: any) {
  const pathName = usePathname();
  const isPublicPage = pathName === '/login' || pathName === '/register';

  return (
    <div>
      {!isPublicPage && (
        <header className='flex justify-between items-center px-6 py-6 bg-slate-200'>
          <Link href='/'>Logo</Link>
          <nav>
            <ul className='flex items-center gap-5'>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/login'>Login</Link>
              </li>
              <li>
                <Link href='/register'>Register</Link>
              </li>
              <li>
                <Link href='/profile'>Profile</Link>
              </li>
            </ul>
          </nav>
        </header>
      )}
      {children}
    </div>
  );
}
