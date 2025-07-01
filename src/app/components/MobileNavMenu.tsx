'use client';
import 'animate.css'
import React, { useState, MouseEvent, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Hamburger, Cross, ChevronDown } from './Icons';
import styles from '../styles/MobileNavMenu.module.css'
import { NavProps } from './Nav';
import { usePathname, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import ClientImage from './ClientImg';

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
      servicesAreOpen && setServicesAreOpen(false);
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

  const bigScriptClass = "h-[1.25rem] w-fit mb-2"
  const lilScriptClass = "h-[1rem] w-fit mb-2"

  return (
    <div className='sm:hidden'>
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
          <li className=''>
            <Link href={"/about"}>
              <Image
                src="/buttons/about.png"
                width={500}
                height={500}
                className={bigScriptClass}
                alt="About"
              />
            </Link>
          </li>
          <li className=''>
              <Link href={"/services"} className='mr-2'>
                <Image
                  src="/buttons/services.png"
                  width={500}
                  height={500}
                  className={`${bigScriptClass} inline`}
                  alt="Services"
                />
              </Link>
              <button
                className='inline-flex items-center'
                onClick={servicesHandler}
              >
                <span
                  className={`${servicesAreOpen ? '' : 'orgin-center -rotate-180'} transition-transform delay-200`}
                >
                  <ChevronDown />
                </span>
              </button>
              <ul className={`${servicesAreOpen ? 'max-h-96' : 'max-h-0'} ${styles.services} overflow-hidden pl-3 text-base transition-[max-height] delay-200`}>
              {services && services.map((service) => (
                <li key={service._id}>
                  <Link href={`/services#${service.slug}`} className="nav-hover">
                    <ClientImage
                      img={service.buttonScript}
                      sizes={"(max-width: 1024px) 500px, 300px"}
                      classes={lilScriptClass}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className=''>
            <Link href={"/contact"}>
              <Image
                src="/buttons/contact.png"
                width={500}
                height={500}
                className={bigScriptClass}
                alt="Contact"
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileNavMenu