import React, { useState } from 'react';
import logo from './images/navbar/loggo.png';
import hamburgerButton from './images/navbar/burger-menu.png';
import linkedIn from './images/navbar/lin.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
<header className="sticky top-0 h-[90px] shadow-xl z-30 bg-[#32B9B2]">
  <div className="container mx-auto flex justify-between h-full items-center px-4">
    
    {/* Logo */}
    <div className="flex-1 flex items-center">
      <a href="#" className="flex items-center gap-3 hover:opacity-70">
        <img src={logo} alt="logo" width="50px" height="50px" />
        <h3 className="font-Marcellus text-2xl lg:text-3xl text-white/90 font-semibold">
          <span className="font-bold text-orange-600">T</span>wist & <span className="font-bold text-orange-600">T</span>onic
        </h3>
      </a>
    </div>

    {/* Hamburger Button */}
    <div className="md:hidden">
      <div
        className="cursor-pointer"
        onClick={toggleMenu}
        id="nav-trigger-btn"
      >
        <img
          className="text-4xl text-purple-900"
          src={hamburgerButton}
          alt="menu"
          width="37px"
          height="35px"
        />
      </div>
    </div>

    {/* Navigation Menu */}
    <nav>
      <ul
        className={`${
          isMenuOpen ? 'h-auto p-4 flex items-center border-none' : 'h-0'
        } fixed w-full bg-[#32B9B2] overflow-hidden border-t top-[90px] left-0 right-0 flex flex-col gap-4 md:relative md:flex-row md:p-0 items-center md:top-0 rounded-b-[5%] lg:text-3xl border-none md:h-full transition-all duration-300 md:text-2xl font-Marcellus text-white/90`}
        id="nav-menu"
      >
        <li><a href="#" className="hover:text-white/60">Home</a></li>
        <li><a href="#about" className="hover:text-white/60">About</a></li>
        <li><a href="#action" className="hover:text-white/60">Cocktails</a></li>
        <li>
          <a href="https://www.linkedin.com/in/claudiu-cristian-ilie-78529a290/" target=".blank">
            <img src={linkedIn} width="50px" height="50px" />
          </a>
        </li>
      </ul>
    </nav>
  </div>
</header>
  );
};

export default NavBar;
