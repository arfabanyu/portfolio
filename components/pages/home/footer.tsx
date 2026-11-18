import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

type Award = {
  id: string;
  title: string;
  event: string;
  month: string;
  year: number;
  category: string;
  description: string;
};

const awards: Award[] = [
  {
    id: 'game-jam-2026',
    title: '3rd Place',
    event: 'Haven Club Game Jam',
    month: 'November',
    year: 2026,
    category: 'Competition',
    description: '...',
  },
];

const Footer = () => {
  return (
    <div className='bg-slate-950' id='about'>
      <div className='grid py-16 gap-6 max-w-7xl '>tes</div>
      <div className='bg-linear-to-b from-slate-950 via-30% via-sky-500 to-sky-300  w-full rounded-t-2xl pt-36'>
        <h3 className='font-display text-[26.3em] leading-128 text-sky-950 text-center mx-auto'>
          Banyu
        </h3>
      </div>
    </div>
  );
};

export default Footer;
