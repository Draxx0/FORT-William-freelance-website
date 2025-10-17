import Chat from '@/components/chat/components/Chat';
import Footer from '@/components/sections/home/footer';
import Header from '@/components/sections/home/header';
import { TailwindIndicator } from '@/components/tailwind-indicator';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { cn, constructMetadata } from '@/lib/utils';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

export const metadata: Metadata = constructMetadata({});

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background antialiased w-full mx-auto scroll-smooth',
          inter.className
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Chat />
          <TailwindIndicator />
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
