import { Separator } from '@/components/ui/separator';
import { cn, formatDate } from '@/lib/utils';

type Experience = {
  id: string;
  role: string;
  organization: string;
  organizationUrl?: string;

  type: 'internship' | 'employment' | 'organization';
  location?: string;

  startDate: string;
  endDate: string | null;
  description: string;

  responsibilities: string[];
  technologies?: string[];
  achievements?: string[];

  credentialUrl?: string;
};

const experiences: Experience[] = [
  {
    id: 'morfotech-internship',
    role: 'Full-Stack Web Developer Intern',
    organization: 'Morfotech',
    organizationUrl: 'https://morfotech.id',
    type: 'internship',
    location: 'Jakarta, Indonesia',
    startDate: '2026-12',
    endDate: '2027-03',
    description: '',
    responsibilities: [],
    technologies: [],
    achievements: [],
    credentialUrl: undefined,
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
                  'absolute left-4 z-10 mt-8 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-slate-950 bg-sky-400',
                  'md:left-1/2',
                )}
              />
              <div
                className={cn(
                  'flex w-full items-center col-start-2 border-y p-5 space-y-2',
                  i % 2 === 0
                    ? 'md:col-start-1 md:text-right'
                    : 'md:col-start-3',
                )}
              >
                <div className='w-fit text-nowrap'>
                  <p className='text-sm text-muted-foreground'>
                    {formatDate(new Date(exp.startDate))} -{' '}
                    {exp.endDate
                      ? formatDate(new Date(exp.endDate))
                      : 'Present'}
                  </p>
                </div>
                <div className='w-full '>
                  <a
                    href={exp.organizationUrl}
                    className='text-3xl font-semibold'
                  >
                    {exp.organization}
                  </a>
                  <p className='text-sky-500 pt-1'>{exp.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <p className='md:text-center pt-2'>coming soon</p>
      </div>
    </div>
  );
};
export default Experience;
