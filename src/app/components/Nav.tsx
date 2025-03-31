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
      <Link href="/" className='ml-3 sm:ml-48'>
        <Image
          src={'/nest_white.svg'}
          width={160}
          height={160}
          alt='bird logo'
          priority
          className='h-[77px] w-fit md:h-[160px] p-3 hover:scale-110 duration-300 ease-in-out'
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