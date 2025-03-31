import Link from "next/link";

const Footer = ({}) => {

  return (
    <footer className="w-full bg-blueOne p-5  bottom-0 flex flex-col items-center md:flex-row md:justify-around">
      <Link className="active:text-white transition-colors duration-200 footer-hover" href="/">Home</Link>
      <Link className="mt-2 active:text-white transition-colors duration-200 footer-hover" href="/services">Services</Link>
      <Link className="mt-2 active:text-white transition-colors duration-200 footer-hover" href="/contact">Contact</Link>
    </footer>
  )
};

export default Footer;