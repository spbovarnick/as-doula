import Link from "next/link";

const Footer = ({}) => {

  return (
    <footer className="w-full bg-blueOne p-5  bottom-0 flex flex-col items-center md:flex-row md:justify-around">
      <Link className="active:text-white transition-colors duration-200" href="/">Home</Link>
      <Link className="mt-2 active:text-white transition-colors duration-200" href="/services">Services</Link>
      <Link className="mt-2 active:text-white transition-colors duration-200" href="/contact">Contact</Link>
    </footer>
  )
};

export default Footer;