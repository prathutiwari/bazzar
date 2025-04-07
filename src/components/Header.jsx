import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  
  const handleMenu = () => {
    setDisplayMenu(!displayMenu);
  };

  return (
    <header className="shadow-lg">
      <div className="container flex items-center justify-between">
        <div className="py-2">
          {/* <img src={logo} alt='logo' className='w-[90px] sm:w-[120px]' /> */}
          <h1 className="text-[30px] font-semibold">shopName</h1>
        </div>

        {/* Mobile Icons */}
        <div className="flex"> 
          <div
            className="hidden cursor-pointer px-2 pt-1 rounded-sm relative"
          >
              <i className="fi fi-rr-cart-shopping-fast text-[22px]"></i>
          </div>

          <div
            className="lg:hidden cursor-pointer px-2 pt-1 rounded-sm"
            onClick={handleMenu}
          >
            <i className="fi fi-br-menu-burger"></i>
          </div>
        </div>
        

        {/* Main navigation for larger screens */}
        <nav className="hidden lg:block">
          <ul className="flex items-center text-black">
            <li className="py-1 px-2 mx-1">
              <Link to="/">Home</Link>
            </li>
            <li className="py-1 px-2 mx-1">
              <Link to="/store-locator">Store Locator</Link>
            </li>
            <li className="py-1 px-2 mx-1">
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </nav>

        {/* Mobile menu */}
        {displayMenu && (
          <nav className="lg:hidden absolute right-0 top-[72px] shadow-lg w-[50%] bg-white pb-1 transition-all z-10">
            <ul className="text-black text-center">
              <li className="py-2 px-4">
              <Link to="/store-locator">Store Locator</Link>
              </li>
              <li className="py-2 px-4">
              <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;