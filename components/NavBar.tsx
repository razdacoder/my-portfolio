import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import { MdClose, MdMenu } from "react-icons/md";

const NavBar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  return (
    <nav className="py-4 flex justify-between items-center">
      <Logo />
      <ul className="hidden md:flex gap-x-10 text-sm">
        <Link href={"#"}>Home</Link>
        <Link href={"#about"}>About</Link>
        <Link href={"#showcase"}>Showcase</Link>
      </ul>

      <button className="hidden md:block text-sm font-medium text-white bg-purple-500 px-3 py-2">
        Let's Chat
      </button>
      <button className="md:hidden" onClick={() => setMobileNav(true)}>
        <MdMenu className="text-2xl" />
      </button>
      {mobileNav && (
        <div className="transition-all absolute top-0 right-2 bg-white shadow-md h-full w-1/2 p-3">
          <button
            className="p-2 bg-gray-200 rounded-full"
            onClick={() => setMobileNav(false)}
          >
            <MdClose fontSize={18} />
          </button>
          <ul className="flex flex-col gap-y-5 mt-5">
            <Link href={"#"}>Home</Link>
            <Link href={"#about"}>About</Link>
            <Link href={"#showcase"}>Showcase</Link>
            <button className="text-sm font-medium text-white bg-purple-500 px-3 py-2">
              Let's Chat
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
