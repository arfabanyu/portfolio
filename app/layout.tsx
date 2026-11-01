import type { Metadata } from 'next';
import {
  Jost,
  Old_Standard_TT,
  JetBrains_Mono,
} from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const jostSans = Jost({
  variable: '--font-jost-sans',
  subsets: ['latin'],
});

const oldStandardTtSerif = Old_Standard_TT({
  variable: '--font-old-standard-tt-serif',
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
        jostSans.variable,
        oldStandardTtSerif.variable,
        jetBrainsMono.variable,
        // 'font-sans',
        'dark',
      )}
    >
      <body className='min-h-full flex flex-col'>{children}</body>
    </html>
  );
}
