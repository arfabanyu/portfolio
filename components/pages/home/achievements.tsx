import { Separator } from '@/components/ui/separator';
import { cn, formatDate } from '@/lib/utils';

type Achievements = {
  id: string;
  title: string;
  event: string;
  date: string;
  category: string;
  description: string;
};

const achievements: Achievements[] = [
  {
    id: 'game-jam-2026',
    title: '3rd Place',
    event: 'Haven Club Game Jam',
    date: '2026-11',
    category: 'Competition',
    description: '...',
  },
  {
    id: 'jia-2026',
    title: 'Top 3',
    event: 'Jakarta Innovation Awards',
    date: '2026-08',
    category: 'Competition',
    description: '...',
  },
];

const Achievements = () => {
  return (
    <div className='bg-slate-950 text-sky-100' id='about'>
      <div className='grid py-16 px-8 max-w-7xl mx-auto'>
        <div className='w-full'>
          <h2 className='font-bold font-display text-[9rem]'>Achievements</h2>
          <div className='grid grid-cols-2'>
            <div />
            <ul className={cn('grid relative w-full pb-40 *:border-b')}>
              <li />
              {achievements.map((achievement) => {
                return (
                  <li key={achievement.id} className='flex py-6 px-4'>
                    <p className='text-sm text-muted-foreground pr-8 border-r'>
                      {formatDate(new Date(achievement.date))
                        .split(' ')
                        .map((word, i) => (
                          <p key={word + '-' + i}>{word}</p>
                        ))}
                    </p>
                    <div className='ml-4 space-y-1'>
                      <p className='text-sky-500'>{achievement.title}</p>
                      <p className='text-2xl'>{achievement.event}</p>
                    </div>
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

export default Achievements;
