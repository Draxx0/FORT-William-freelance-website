import { Icons } from '@/components/icons';
import { AnimatedThemeToggler } from '@/components/magicui/animated-theme-toggler';
import { buttonVariants } from '@/components/ui/button';
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { siteConfig } from '@/lib/config';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { IoMenuSharp } from 'react-icons/io5';

export default function drawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger>
        <IoMenuSharp className="text-2xl" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="px-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              title="brand-logo"
              className="relative mr-6 flex items-center justify-center space-x-2"
            >
              <Icons.logo className="w-auto mx-auto h-[30px] bg-primary rounded-full" />
              <span className="font-bold text-xl">William FORT</span>
            </Link>
            <AnimatedThemeToggler className="p-2 rounded-md hover:bg-accent transition-colors" />
          </div>
          <nav>
            <ul className="mt-7 text-left">
              {siteConfig.footer.map((item, index) => (
                <li key={index} className="my-3">
                  {item.trigger ? (
                    <Link
                      href={item.content.main.href}
                      className="font-semibold"
                    >
                      {item.trigger}
                    </Link>
                  ) : (
                    <Link href={item.href || ''} className="font-semibold">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </DrawerHeader>
        <DrawerFooter>
          <Link
            href="#contact"
            className={cn(
              buttonVariants({ variant: 'default' }),
              'w-full sm:w-auto text-background dark:text-white flex gap-2 transition-all hover:opacity-80 active:scale-[98%] ease-in-out duration-300'
            )}
          >
            <Icons.logo className="h-6 w-6" />
            Lancez votre projet
          </Link>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
