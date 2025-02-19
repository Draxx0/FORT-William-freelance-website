import { siteConfig } from '@/lib/config';
import { Linkedin, Mail } from 'lucide-react';
import { Icons } from '../icons';

interface Icon {
  icon: JSX.Element;
  url: string;
}

const icons: Icon[] = [
  {
    icon: <Linkedin className="w-full h-full" />,
    url: 'https://www.linkedin.com/in/william-fort/',
  },
  { icon: <Mail className="w-full h-full" />, url: '#' },
];

export default function Footer() {
  return (
    <footer className="flex flex-col border border-t gap-y-5 rounded-lg px-7 py-5 md:px-10">
      <div className="flex items-center justify-between">
        <a href="/" className="flex items-center gap-x-2">
          <div className="relative mr-6 bg-primary rounded-full">
            <Icons.logo className="w-auto h-[30px]" />
          </div>

          <h2 className="text-lg font-bold text-neutral-900 dark:text-white">
            William FORT
          </h2>
        </a>

        <div className="flex gap-x-2">
          {icons.map((icon, index) => (
            <a
              key={index}
              href={icon.url}
              target="_blank"
              className="flex size-6 items-center justify-center text-neutral-400 transition-all duration-100 ease-linear hover:text-primary hover:underline hover:underline-offset-4 dark:font-medium dark:text-neutral-500 hover:dark:text-neutral-100"
            >
              {icon.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between gap-y-5 md:flex-row md:items-center">
        <ul className="flex flex-col gap-x-5 gap-y-2 text-neutral-500 md:flex-row md:items-center ">
          {siteConfig.header.map((link, index) => (
            <li
              key={index}
              className="text-[15px]/normal font-medium text-neutral-400 transition-all duration-100 ease-linear hover:text-primary hover:underline hover:underline-offset-4 dark:font-medium dark:text-neutral-400 hover:dark:text-neutral-100"
            >
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="text-[15px]/normal font-medium text-neutral-400 dark:text-neutral-400">
          <p>Tous drois réservés - William FORT ©{new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
