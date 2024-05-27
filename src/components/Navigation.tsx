"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { navigationLinks } from '@/lib/navigationLinks';
import Button from './Button';

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className='flex items-center flex-wrap gap-2 mb-8 '>
      {navigationLinks.map((navLink) => (
        <Button
          key={navLink.id}
          isActive={pathname === navLink.link}
          href={navLink.link}
        >
          {navLink.title}
        </Button>
      ))}
    </nav>
  );
};

export default Navigation;
