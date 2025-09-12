'use client';

import { cn } from '@/lib/utils';
import { Moon, SunDim } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';

type props = {
  className?: string;
};

export const AnimatedThemeToggler = ({ className }: props) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
  }, []);

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const changeTheme = async () => {
    if (!buttonRef.current) return;

    // @ts-ignore - startViewTransition is a new API not yet in TypeScript definitions
    await document.startViewTransition(() => {
      flushSync(() => {
        const dark = document.documentElement.classList.toggle('dark');
        setIsDarkMode(dark);
      });
    }).ready;

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const y = top + height / 2;
    const x = left + width / 2;

    document.documentElement.animate(
      {
        clipPath: [
          `polygon(0% 0%, 0% 0%, 100% 0%, 100% 0%)`,
          `polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)`,
        ],
      },
      {
        duration: 600,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        pseudoElement: '::view-transition-new(root)',
      }
    );
  };
  return (
    <button ref={buttonRef} onClick={changeTheme} className={cn(className)}>
      {isDarkMode ? <SunDim className="size-5" /> : <Moon className="size-5" />}
    </button>
  );
};
