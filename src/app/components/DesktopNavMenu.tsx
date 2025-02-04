'use client';
import React, { useState, useRef, MouseEvent, useEffect } from "react";
import { NavProps } from "./Nav";
import Link from "next/link";
import { ChevronDown } from "./Icons";
import '../styles/DesktopNavMenu.css'

const DesktopNavMenu: React.FC<NavProps> = ({ services }) => {
  const [servicesAreOpen, setServicesAreOpen] = useState(false);
  const serviceButtonRef = useRef<HTMLButtonElement>(null);
  const serviceMenuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const closeServicesMenu = (e: Event) => {
      if (serviceMenuRef.current && e.target instanceof Node && !serviceMenuRef.current.contains(e.target) && !serviceButtonRef.current?.contains(e.target)) {
        servicesAreOpen && setServicesAreOpen(false);
      }

      document.body.addEventListener('click', closeServicesMenu);

      return () => {
        document.body.removeEventListener('click', closeServicesMenu);
      }
    }
  },[servicesAreOpen]);

  const servicesHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setServicesAreOpen(!servicesAreOpen);
  }

  return (
    <div className='hidden sm:flex mr-40 w-1/3 justify-between'>
      <Link href="/about" >About</Link>
      <div className="flex flex-col">
        <div className={`flex items-center services`}>
          <Link href={"/services"} className='mr-4'>Services</Link>
          <ChevronDown />
        </div>
        <ul
          className={`servicesSubMenu pl-3 text-base absolute bg-blueOne`}
          ref={serviceMenuRef}
        >
          {services.map((service) => (
            <li key={service._id}>
              <Link href={`/services#${service.slug}`}>
                {service.serviceName}
              </Link>
            </li>
          ))}
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
      <Link href="/contact">Contact</Link>
    </div>
  )
};

export default DesktopNavMenu;