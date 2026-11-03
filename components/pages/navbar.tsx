import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Ghost } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  const links = [
    {
      href: '/#hero',
      text: 'Home',
    },
    {
      href: '/#projects',
      text: 'Projects',
    },
    {
      href: '/#experience',
      text: 'Experience',
    },
    {
      href: '/#about',
      text: 'About',
    },
    {
      href: '/#contact',
      text: 'Contact',
    },
  ];
  return (
    <div className={cn('w-full sticky', 'p-8')}>
      <div className={cn('flex gap-3', 'max-w-7xl w-fit', 'mx-auto')}>
        {links.map((link, i) => {
          return (
            <Link key={'navbar-link-' + i} href={link.href}>
              <Button variant={'ghost'}>{link.text}</Button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
