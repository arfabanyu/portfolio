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
  {
    id: 'jia-2026',
    title: 'Top 3',
    event: 'Jakarta Innovation Awards',
    month: 'August',
    year: 2026,
    category: 'Competition',
    description: '...',
  },
];

const AwardsAndAchievements = () => {
  return (
    <div className='bg-slate-950 text-sky-100' id='about'>
      <div className='grid py-16 px-8 max-w-7xl mx-auto'>
        <div className='w-full'>
          <h2 className='font-bold font-display text-6xl'>Achievements</h2>
          <div className='grid grid-cols-2'>
            <div />
            <ul
              className={cn(
                'grid relative w-full pb-40 *:border-b *:border-sky-900',
              )}
            >
              <li />
              {awards.map((award) => {
                return (
                  <li key={award.id} className='p-4 px-4 space-y-1 bg-slate-900'>
                    <p className='text-2xl'>
                      {award.title} - {award.event}
                    </p>
                    <p className='text-sm text-sky-400'>
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

export default AwardsAndAchievements;
