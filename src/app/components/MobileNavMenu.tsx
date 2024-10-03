'use client';
import 'animate.css'
import React, { useState, MouseEvent, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Hamburger, Cross, ChevronDown } from './Icons';
import styles from '../styles/MobileNavMenu.module.css'
import { NavProps } from './Nav';
import { usePathname, useSearchParams } from 'next/navigation';

const MobileNavMenu: React.FC<NavProps> = ({ services }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [servicesAreOpen, setServicesAreOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (menuRef.current) {
      menuIsOpen && setMenuIsOpen(false);
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    const closeSlideMenu = (e: Event) => {
      if (menuRef.current && e.target instanceof Node && !menuRef.current.contains(e.target) && !buttonRef.current?.contains(e.target)) {
        menuIsOpen && setMenuIsOpen(false);
      };
    };

    document.body.addEventListener('click', closeSlideMenu);

    return () => {
      document.body.removeEventListener('click', closeSlideMenu);
    }
  }, [menuIsOpen]);

  const menuHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setMenuIsOpen(!menuIsOpen);
  }

  const servicesHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setServicesAreOpen(!servicesAreOpen);
  }

  return (
    <>
    <button
      className='absolute top-8 right-6 -translate-y-2/4'
      onClick={menuHandler}
      ref={buttonRef}
    >
      <div className={`${menuIsOpen ? '' : 'hidden'} animate__animated animate__fadeIn`}>
        <Cross />
      </div>
      <div className={`${menuIsOpen ? `hidden` : ``} animate__animated animate__fadeIn`}>
        <Hamburger />
      </div>
    </button>
    <div
      id='slideInMenu'
      className={`${styles.mobileMenu} ${menuIsOpen ? `open ${styles.open}` : `closed ${styles.closed}`} w-9/12 h-9/12 bg-blueOne absolute top-full right-0 pt-0 pr-0 pl-4 pb-3 text-lg rounded-bl-lg`}
      ref={menuRef}
    >
      <ul>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li className=''>
          <button
            className='flex items-center'
            onClick={servicesHandler}
          >
            <Link href={"/services"} className='mr-4'>Services</Link>
            <span
              className={`${servicesAreOpen ? '' : 'orgin-center -rotate-180'} transition-transform delay-200`}
            >
              <ChevronDown />
            </span>
          </button>
            <ul className={`${servicesAreOpen ? 'max-h-96' : 'max-h-0'} ${styles.services} overflow-hidden pl-3 text-base transition-[max-height] delay-200`}>
            {services.map((service) => (
              <li key={service._id}><Link href={`/services#${service.slug}`} >{service.serviceName}</Link></li>
            ))}
          </ul>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
    </div>
    </>
  );
}

export default MobileNavMenu