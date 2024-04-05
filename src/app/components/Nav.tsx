import React from 'react';
import MobileNavMenu from './MobileNavMenu';
import { ServiceNavQueryResponse } from '../lib/types';


export interface NavProps {
  services: ServiceNavQueryResponse[]
}

const Nav: React.FC<NavProps> = ({ services }) => {
  return (
    <nav className="box-border w-full h-16 bg-blueOne text-3xl sticky top-0 z-50 overflow-x-clip">
      <MobileNavMenu services={services} />
    </nav>
  );
}

export default Nav