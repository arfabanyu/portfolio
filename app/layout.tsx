import type { Metadata } from 'next';
import { Inter, Instrument_Serif, Bricolage_Grotesque } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const fontBody = Inter({
  variable: '--font-inter',
  weight: '300',
  subsets: ['latin'],
});

const fontAccent = Instrument_Serif({
  variable: '--font-instrument-serif',
  weight: '400',
});

const fontDisplay = Bricolage_Grotesque({
  variable: '--font-bricolage-grotesque',
  weight: '800',
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
        fontBody.variable,
        fontAccent.variable,
        fontDisplay.variable,
        // 'font-sans',
        'dark',
      )}
    >
      <body className='min-h-full flex flex-col'>{children}</body>
    </html>
  );
}
