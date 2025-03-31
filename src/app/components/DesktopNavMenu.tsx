'use client';
import { NavProps } from "./Nav";
import Link from "next/link";
import { ChevronDown } from "./Icons";
import '../styles/DesktopNavMenu.css'

const DesktopNavMenu: React.FC<NavProps> = ({ services }) => {

  return (
    <div className='hidden sm:flex mr-40 w-[45%] justify-between'>
      <Link href="/about" className="nav-hover" >About</Link>
      <div className="flex flex-col relative">
        <div className={`flex items-center services`}>
          <Link href={"/services"} className="nav-hover">Services</Link>
          <ChevronDown />
        </div>
        <ul
          className={`servicesSubMenu p-4 text-base absolute bg-blueOne top-[36px] w-full rounded-lg rounded-t-none drop-shadow-xl border-2 border-t-0 border-black`}
        >
          {services.map((service) => (
            <li key={service._id}>
              <Link href={`/services#${service.slug}`} className="nav-hover">
                {service.serviceName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Link href="/contact" className="nav-hover">Contact</Link>
    </div>
  )
};

export default DesktopNavMenu;