import React, { Suspense } from 'react';
import Link from 'next/link';
import MobileNavMenu from './MobileNavMenu';
import { ServiceNavQueryResponse } from '../lib/types';
import DesktopNavMenu from './DesktopNavMenu';
import Image from 'next/image';


export interface NavProps {
  services: ServiceNavQueryResponse[]
}

const Nav: React.FC<NavProps> = ({ services }) => {
  return (
    <nav className="box-border w-full h-16 bg-blueOne text-3xl sticky top-0 z-10 flex items-center sm:h-40 sm:justify-between">
      <Link href="/" className='ml-3 sm:ml-40'>
        <Image
          src={'/flower_white.svg'}
          width={180}
          height={180}
          alt='bird logo'
          priority
        />
      </Link>
      <DesktopNavMenu services={services} />
      <Suspense>
        <MobileNavMenu services={services} />
      </Suspense>
    </nav>
  );
}

export default Nav