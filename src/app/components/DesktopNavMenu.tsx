'use client';
import { NavProps } from "./Nav";
import Link from "next/link";
import { ChevronDown } from "./Icons";
import '../styles/DesktopNavMenu.css'

const DesktopNavMenu: React.FC<NavProps> = ({ services }) => {

  return (
    <div className='hidden sm:flex mr-40 w-[45%] justify-between'>
      <Link href="/about" >About</Link>
      <div className="flex flex-col relative">
        <div className={`flex items-center services`}>
          <Link href={"/services"} className=''>Services</Link>
          <ChevronDown />
        </div>
        <ul
          className={`servicesSubMenu p-4 text-base absolute bg-blueOne top-[36px] w-full rounded-lg rounded-t-none drop-shadow-xl border-2 border-t-0 border-black`}
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