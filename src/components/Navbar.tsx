import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

export function Navbar({ cartCount, onCartClick }: NavbarProps) {
  const location = useLocation();

  return (
    <nav className="fixed top-0 z-50 flex justify-between items-center w-full px-8 py-6 bg-black/80 backdrop-blur-md border-b-4 border-outline">
      <Link
        to="/"
        className="text-2xl font-black tracking-tighter text-white uppercase font-headline"
      >
        absorb
      </Link>

      <div className="hidden md:flex gap-12">
        <Link
          to="sessions"
          className={`font-headline uppercase tracking-[-0.02em] font-bold text-sm px-2 transition-none ${location.pathname === "/sessions" ? "text-white border-b-2 border-white pb-1" : "text-outline hover:text-white"}`}
        >
          SESSIONS
        </Link>
        <Link
          to="catalogue"
          className={`font-headline uppercase tracking-[-0.02em] font-bold text-sm px-2 transition-none ${location.pathname === "/catalogue" ? "text-white border-b-2 border-white pb-1" : "bg-white text-black hover:bg-transparent hover:text-white hover:border-b-2 hover:border-outline-variant pb-1"}`}
        >
          CATALOGUE
        </Link>
        <Link
          to="specs"
          className={`font-headline uppercase tracking-[-0.02em] font-bold text-sm px-2 transition-none ${location.pathname === "/specs" ? "text-white border-b-2 border-white pb-1" : "text-outline hover:text-white"}`}
        >
          SPECS
        </Link>
        <Link
          to="archive"
          className={`font-headline uppercase tracking-[-0.02em] font-bold text-sm px-2 transition-none ${location.pathname === "/archive" ? "text-white border-b-2 border-white pb-1" : "text-outline hover:text-white"}`}
        >
          ARCHIVE
        </Link>
      </div>

      <div className="flex gap-6 items-center">
        <span className="font-headline uppercase tracking-[-0.02em] font-bold text-sm text-outline hidden lg:inline">
          STATUS: ONLINE
        </span>
        <button
          onClick={onCartClick}
          className="font-headline uppercase tracking-[-0.02em] font-bold text-sm text-white border-2 border-white px-4 py-2 hover:bg-white hover:text-black transition-none"
        >
          CART({cartCount})
        </button>
      </div>
    </nav>
  );
}
