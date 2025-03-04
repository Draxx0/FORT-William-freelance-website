'use client';

import Drawer from '@/components/drawer';
import { Icons } from '@/components/icons';
import Menu from '@/components/menu';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [addBorder, setAddBorder] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setAddBorder(true);
      } else {
        setAddBorder(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={'sticky top-0 z-50 py-2 bg-background/60 backdrop-blur'}>
      <div className="flex justify-between items-center container">
        <Link
          href="/"
          title="brand-logo"
          className="relative mr-6 bg-primary rounded-full transition-transform active:scale-[90%] ease-in-out duration-300"
        >
          <Icons.logo className="w-auto h-[30px]" />
        </Link>

        <div className="hidden lg:block">
          <div className="flex items-center ">
            <nav className="mr-10">
              <Menu />
            </nav>

            <Link
              href="#contact"
              className={cn(
                buttonVariants({ variant: 'default' }),
                'w-full sm:w-auto text-background dark:text-white flex gap-2 transition-all hover:opacity-80 active:scale-[98%] ease-in-out duration-300'
              )}
            >
              Lancez votre projet
              <Icons.logo className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="mt-2 cursor-pointer block lg:hidden">
          <Drawer />
        </div>
      </div>
      <hr
        className={cn(
          'absolute w-full bottom-0 transition-opacity duration-300 ease-in-out',
          addBorder ? 'opacity-100' : 'opacity-0'
        )}
      />
    </header>
  );
}
