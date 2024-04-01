import MobileNavMenu from './MobileNavMenu';
import hamburger from '../../../public/hamburger-menu.svg'

export default function Nav() {
  return (
    <nav className="w-screen h-16 bg-blueOne text-3xl relative">
      <MobileNavMenu />
    </nav>
  );
}