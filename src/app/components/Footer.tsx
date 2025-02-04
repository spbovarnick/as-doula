import Link from "next/link";

const Footer = ({}) => {

  return (
    <footer className="w-full bg-blueOne p-5">
      <p className="font-libre_baskerville text-xl">Annie Scott</p>
      <div className="flex flex-col mt-3 w-fit underline">
        <Link className="active:text-white transition-colors duration-200" href="/">Home</Link>
        <Link className="mt-2 active:text-white transition-colors duration-200" href="/">Contact</Link>
      </div>
    </footer>
  )
};

export default Footer;