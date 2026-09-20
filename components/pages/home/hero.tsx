import { Button } from '@/components/ui/button';
import { accentText, cn } from '@/lib/utils';
import { Mail } from 'lucide-react';
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from '@tabler/icons-react';

const socialMedia = [
  {
    href: 'mailto:banyuarfa1122@gmail.com',
    icon: Mail,
    text: 'EMAIL',
  },
  {
    href: 'https://github.com/arfabanyu',
    icon: IconBrandGithub,
    text: 'GITHUB',
  },
  {
    href: 'https://instagram.com/arfabanyu',
    icon: IconBrandInstagram,
    text: 'INSTAGRAM',
  },
  {
    href: 'https://linkedin.com/in/arfabanyusantoro',
    icon: IconBrandLinkedin,
    text: 'LINKEDIN',
  },
];

const Hero = () => {
  const githubProfileData = [
    { total: 31, dataText: 'Repositories', padding: 'pl-0' },
    { total: 421, dataText: 'Contributions', padding: 'pl-4' },
    { total: 1200, dataText: 'Commits', padding: 'pl-12' },
  ];
  return (
    <div className='' id='hero'>
      <div className='grid gap-6'>
        <div
          className={cn(
            'flex justify-between items-end',
            'max-w-7xl w-full',
            'mx-auto px-6',
          )}
        >
          <h1 className={'text-7xl'}>
            ARFA <span className={accentText()}>BANYU</span> <br />{' '}
            <span className='text-6xl'>SANTORO</span>
          </h1>
          <div>
            <h2 className='text-5xl'>
              Full Stack <br />
              <span className={accentText()}>Web Developer</span>
            </h2>
            <div className='flex gap-2 mt-2'>
              <Button>View Projects</Button>
              <Button variant={'outline'}>Download CV</Button>
            </div>
          </div>
        </div>
        <div>
          <div className='bg-foreground h-48 w-full' />
          <div
            className={cn(
              'flex justify-between items-end',
              'max-w-7xl w-full',
              'mx-auto px-6',
            )}
          >
            {socialMedia.map((item, i) => {
              return (
                <a
                  key={'link-' + i}
                  href={item.href}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button variant={'link'} className={'text-foreground px-0'}>
                    <item.icon />
                    {item.text}
                  </Button>
                </a>
              );
            })}
          </div>
        </div>
        <div
          className={cn(
            'flex justify-between items-center',
            'max-w-7xl w-full',
            'mx-auto px-6',
          )}
        >
          <p className='text-xl'>
            Building <span className={accentText()}>thoughtful</span> systems{' '}
            <br />
            that people actually enjoy using.
          </p>
          <div>
            {githubProfileData.map((item, i) => {
              return (
                <p
                  key={'github-profile-data-' + i}
                  className={cn(item.padding, 'flex items-center gap-3')}
                >
                  <span className={cn(accentText('mono'), 'text-3xl')}>
                    {item.total}
                  </span>
                  <span>{item.dataText}</span>
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
