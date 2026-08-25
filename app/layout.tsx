import type { Metadata } from 'next';
import {
  Geist,
  Instrument_Serif,
  JetBrains_Mono,
  Inter,
} from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  weight: '400',
});

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

// todo: revisi title dan desc
export const metadata: Metadata = {
  title: 'Arfa Banyu Santoro',
  description: 'Portfolio',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='en'
      className={cn(
        'h-full',
        'antialiased',
        geistSans.variable,
        instrumentSerif.variable,
        jetBrainsMono.variable,
        'font-sans',
        inter.variable,
        'dark',
      )}
    >
      <body className='min-h-full flex flex-col'>{children}</body>
    </html>
  );
}
