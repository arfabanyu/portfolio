import { Button } from '@/components/ui/button';
import { accentText, cn } from '@/lib/utils';
import { Mail } from 'lucide-react';
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from '@tabler/icons-react';
import Image from 'next/image';
import { ClassNameValue } from 'tailwind-merge';

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

const About = () => {
  const photos = [
    { src: '/about/banyu-1.jpeg', alt: 'Banyu-1' },
    { src: '/about/banyu-2.jpeg', alt: 'Banyu-2' },
    { src: '/about/banyu-3.jpeg', alt: 'Banyu-3' },
  ];

  const bornIn = new Date(2008, 12, 4);
  const now = new Date();
  const classNameImg: ClassNameValue = 'max-w-64 grayscale';
  return (
    <div className='bg-slate-950' id='about'>
      <div className='flex px-6 gap-6'>
        <div className={cn('relative w-full pb-40')}>
          <div className={cn(classNameImg)}>
            <Image
              src={photos[0].src}
              alt={photos[0].alt}
              width={4000}
              height={5000}
            />
          </div>
          <div className={cn(classNameImg, 'absolute top-40 left-32')}>
            <Image
              src={photos[2].src}
              alt={photos[2].alt}
              width={4000}
              height={5000}
            />
          </div>
        </div>
        <div className='w-full m-auto space-y-2'>
          <h2 className='text-4xl font-display'>about me</h2>
          <div className='space-y-2'>
            <p className='max-w-100'>
              Hi! I am Arfa Banyu Santoro. Just call me Banyu for short. I am a{' '}
              {now.getFullYear() - bornIn.getFullYear()} years old teenager that
              born in 2008 in Jakarta, Indonesia.
            </p>
            <p>
              I am a Software Engineering student focused on web application
              development. I am interested in software engineering, system
              design, and building useful digital solutions.
            </p>
          </div>
        </div>
        <div className='w-full'>
          <div className={cn(classNameImg, 'mx-auto')}>
            <Image
              src={photos[1].src}
              alt={photos[1].alt}
              width={4000}
              height={5000}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
