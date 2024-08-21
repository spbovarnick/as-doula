import React, { Suspense } from 'react';
import Link from 'next/link';
import MobileNavMenu from './MobileNavMenu';
import { ServiceNavQueryResponse } from '../lib/types';


export interface NavProps {
  services: ServiceNavQueryResponse[]
}

const Nav: React.FC<NavProps> = ({ services }) => {
  return (
    <nav className="box-border w-full h-16 bg-blueOne text-3xl sticky top-0 z-50 overflow-x-clip flex items-center">
      <Link href="/" className='ml-3'>Home</Link>
      <Suspense>
        <MobileNavMenu services={services} />
      </Suspense>
    </nav>
  );
}

export default Nav