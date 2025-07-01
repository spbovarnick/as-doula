'use client';
import { NavProps } from "./Nav";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "./Icons";
import '../styles/DesktopNavMenu.css'
import ClientImage from "./ClientImg";

const DesktopNavMenu: React.FC<NavProps> = ({ services }) => {

  const bigScriptClass = "h-[2.25rem] w-full"
  const lilScriptClass = "h-[1.5rem] w-fit"

  return (
    <div className='hidden sm:flex mr-40 w-[45%] justify-between'>
      <Link href="/about" className="nav-hover" >
        <Image
          src="/buttons/about.png"
          width={500}
          height={500}
          className={bigScriptClass}
          alt="About"
        />
      </Link>
      <div className="flex flex-col relative">
        <div className={`flex items-center services`}>
          <Link href={"/services"} className="nav-hover">
            <Image
              src="/buttons/services.png"
              width={500}
              height={500}
              className={bigScriptClass}
              alt="Services"
            />
          </Link>
          <ChevronDown />
        </div>
        <ul
          className={`servicesSubMenu p-4 text-base absolute bg-blueOne top-[36px] w-full rounded-lg rounded-t-none drop-shadow-xl border-2 border-t-0 border-black`}
        >
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
      </div>
      <Link href="/contact" className="nav-hover">
          <Image
            src="/buttons/contact.png"
            width={500}
            height={500}
            className={bigScriptClass}
            alt="Contact"
          />
      </Link>
    </div>
  )
};

export default DesktopNavMenu;