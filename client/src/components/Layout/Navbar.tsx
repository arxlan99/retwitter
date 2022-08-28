import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import menu from 'assets/icons/menu.svg';

type Props = {};

const Navbar = (props: Props) => {
  const [open, setOpen] = useState(false);

  const handleOpenMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="flex justify-between py-5 px-16 border-b bg-white relative h-16">
      <Link to="/">Logo</Link>
      <div
        className={`${
          open ? 'opacity-100' : 'opacity-0'
        } flex bg-white w-full flex-col mt-11 lg:mt-0 lg:flex-row gap-6 lg:gap-20 justify-start lg:justify-center transition-all absolute lg:relative right-0 py-3 lg:py-0 px-16 lg:px-0`}
      >
        <NavLink
          className={({ isActive }) => (isActive ? 'font-bold' : 'font-normal')}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'font-bold' : 'font-normal')}
          to="/explore"
        >
          Explore
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'font-bold' : 'font-normal')}
          to="/bookmarks"
        >
          Bookmarks
        </NavLink>
      </div>
      <div className="hidden lg:flex">
        <div>Image</div>
        <div>Name</div>
      </div>
      <div className="block lg:hidden">
        <button onClick={handleOpenMenu}>
          <img src={menu} alt="menu" width={24} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
