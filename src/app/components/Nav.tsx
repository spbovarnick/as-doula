import MobileNavMenu from './MobileNavMenu';
import hamburger from '../../../public/hamburger-menu.svg'

export default function Nav() {
  return (
    <nav className="box-border w-full h-16 bg-blueOne text-3xl sticky top-0 z-50 overflow-x-clip">
      <MobileNavMenu />
    </nav>
  );
}