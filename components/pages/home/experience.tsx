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

const experiences: Award[] = [
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
    <div className='bg-slate-950 text-sky-100' id='experience'>
      <div className='mx-auto max-w-7xl px-8 py-16'>
        <h2 className='text-center text-6xl font-bold font-display md:text-[9rem]'>
          Journey
        </h2>

        <ol className='relative pt-16'>
          {/* Garis tengah */}
          <div className='absolute left-4 top-0 h-full w-px bg-sky-800 md:left-1/2' />

          {experiences.map((exp, i) => (
            <li
              key={exp.id}
              className='relative grid grid-cols-[2rem_1fr] pb-12 md:grid-cols-[1fr_4rem_1fr]'
            >
              <span
                className={cn(
                  'absolute left-4 z-10 mt-7 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-slate-950 bg-sky-400',
                  'md:left-1/2',
                )}
              />
              <div
                className={cn(
                  'col-start-2 border-y border-sky-900 bg-slate-900 p-5',
                  i % 2 === 0
                    ? 'md:col-start-1 md:text-right'
                    : 'md:col-start-3',
                )}
              >
                <p className='text-2xl'>
                  {exp.title} — {exp.event}
                </p>

                <p className='text-sm text-sky-400'>
                  {exp.category} | {exp.month} {exp.year}
                </p>

                {exp.description && exp.description !== '...' && (
                  <p className='mt-3 text-sm text-sky-100/70'>
                    {exp.description}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
        <p className='md:text-center pt-2 text-muted-foreground'>coming soon</p>
      </div>
    </div>
  );
};
export default Experience;
