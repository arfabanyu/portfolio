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

const Experience = () => {
  return (
    <div className='bg-slate-950 text-sky-100' id='about'>
      <div className='grid py-16 px-8 gap-6 max-w-7xl mx-auto'>
        <h2 className='font-bold font-display text-[9rem] text-center leading-none'>
          Journey
        </h2>
        pending
        <div className='flex gap-8'>
          <div className='w-full justify-end'>
            <ul className={cn('relative  pb-40')}>
              {awards.map((award) => {
                return (
                  <li key={award.id}>
                    <p className='font-semibold'>
                      {award.title} - {award.event}
                    </p>
                    <p className='text-muted-foreground text-sm'>
                      {award.category} | {award.month} {award.year}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
          <Separator orientation='vertical' />
          <div className='w-full'>
            <ul className={cn('relative w-full pb-40')}>
              {awards.map((award) => {
                return (
                  <li key={award.id}>
                    <p className='font-semibold'>
                      {award.title} - {award.event}
                    </p>
                    <p className='text-muted-foreground text-sm'>
                      {award.category} | {award.month} {award.year}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
