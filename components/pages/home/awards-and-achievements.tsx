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

const AwardsAndAchievements = () => {
  return (
    <div className='bg-slate-950' id='about'>
      <div className='grid grid-cols-2 py-16 px-8 gap-6 max-w-7xl mx-auto'>
        <div className='w-full'>
          <h2 className='font-bold font-display text-4xl'>Awards</h2>
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
        <div className='w-full'>
          <h2 className='font-bold font-display text-4xl'>Achievements</h2>
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
  );
};

export default AwardsAndAchievements;
