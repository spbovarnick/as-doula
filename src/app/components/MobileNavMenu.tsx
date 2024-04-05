'use client';
import 'animate.css'
import React, { useState, MouseEvent } from 'react';
import Link from 'next/link';
import { Hamburger, Cross, ChevronDown } from './Icons';
import styles from '../styles/MobileNavMenu.module.css'
import { NavProps } from './Nav';

const MobileNavMenu: React.FC<NavProps> = ({ services }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [servicesAreOpen, setServicesAreOpen] = useState(false);

  const menuHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setMenuIsOpen(!menuIsOpen);
  }

  const servicesHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setServicesAreOpen(!servicesAreOpen);
  }

  console.log(menuIsOpen)
  return (
    <>
    <button
      className='absolute top-8 right-6 -translate-y-2/4'
      onClick={menuHandler}
    >
      <div className={`${menuIsOpen ? '' : 'hidden'} animate__animated animate__fadeIn`}>
        <Cross />
      </div>
      <div className={`${menuIsOpen ? `hidden` : ``} animate__animated animate__fadeIn`}>
        <Hamburger />
      </div>
    </button>
    <div id='slideInMenu' className={`${styles.mobileMenu} ${menuIsOpen ? `open ${styles.open}` : `closed ${styles.closed}`} w-9/12 h-9/12 bg-blueOne absolute top-full right-0`}>
      <ul>
        <li>About</li>
        <li>
          <div className='flex items-center'>
            <span className='mr-4'>Services</span>
            <button
              onClick={servicesHandler}
              className={`${servicesAreOpen ? 'orgin-center -rotate-180' : ''} transition-transform delay-200`}
            >
              <ChevronDown />
            </button>
          </div>
          <ul className={``}>
            {services.map((service) => (
              <Link href={`services#${service.slug}`} key={service._id}>{service.serviceName}</Link>
            ))}
          </ul>
        </li>
        <li>Contact</li>
      </ul>
    </div>
    </>
  );
}

export default MobileNavMenu