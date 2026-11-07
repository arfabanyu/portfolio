import { Button } from '@/components/ui/button';
import { accentText, cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

import Image from 'next/image';
import { ClassNameValue } from 'tailwind-merge';

const Projects = () => {
  const photos = [
    { src: '/about/banyu-1.jpeg', alt: 'Banyu-1' },
    { src: '/about/banyu-2.jpeg', alt: 'Banyu-2' },
    { src: '/about/banyu-3.jpeg', alt: 'Banyu-3' },
  ];

  const classNameImg: ClassNameValue = 'max-w-64 grayscale';
  return (
    <div className='50' id='about'>
      <div className='grid items-center w-full bg-sky-950 px-6 pt-2 pb-8 gap-24'>
        <p className='uppercase font-body mx-auto text-sm font-bold'>
          Explore my project <br />
          <ChevronDown className='mx-auto' />
        </p>
        <h2 className='text-9xl font-display mx-auto'>Selected Projects.</h2>
      </div>
    </div>
  );
};

export default Projects;
