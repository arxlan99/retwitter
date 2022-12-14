import { ThemeContext } from 'context/ThemeContext';
import React, { useContext } from 'react';
import twitter from 'assets/icons/twitter.svg';

import HomeIcon from 'assets/jsx/home-icon';
import SearchIcon from 'assets/jsx/search-icon';
import NotificationIcon from 'assets/jsx/notification-icon';
import MessageIcon from 'assets/jsx/Message-icon';
import BookmarksIcon from 'assets/jsx/bookmarks-icon';
import ListsIcon from 'assets/jsx/Lists-icon';
import ProfileIcon from 'assets/jsx/profile-icon';
import DotIcon from 'assets/jsx/dot-icon';
import MoreIcon from 'assets/jsx/more-icon';
import SidebarButton from 'components/buttons/SidebarButton';
import TweetButton from 'components/buttons/TweetButton';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from 'api/endpoints';
import { useMutation } from '@tanstack/react-query';
import { useAppDispatch, useAppSelector } from 'store';
import { AiOutlineClose } from 'react-icons/ai';
import { toggle } from 'store/slices/menuSlice';

const Sidebar = () => {
  const themeCtx = useContext(ThemeContext);
  const color = !themeCtx.dark ? '#000' : '#fff';
  const navigate = useNavigate();
  const menu = useAppSelector((state) => state.menu);
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const { mutateAsync } = useMutation(logout);

  const handleLogout = () => {
    mutateAsync()
      .then(() => {
        localStorage.removeItem('token');
      })
      .then(() => {
        navigate('/login', { replace: true });
      });
    // navigate('/auth/login');
  };

  return (
    <div
      className={`absolute top-0 left-0 w-screen z-[99] lg:static lg:w-[281px] bg-white dark:bg-black p-3 h-screen transition-all lg:block ${
        menu.open ? 'block' : 'hidden'
      }`}>
      <div className="flex flex-col justify-between h-full">
        <button
          type="button"
          className="lg:hidden block absolute right-5 top-5"
          onClick={() => dispatch(toggle())}>
          <AiOutlineClose className="text-2xl" />
        </button>
        <div className="text-xl flex flex-col gap-1 ">
          <div className="pl-2 mb-4">
            <img src={twitter} alt="logo" />
          </div>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'font-bold' : 'font-normal')}>
            <SidebarButton>
              <HomeIcon color={color} />
              <div>Home</div>
            </SidebarButton>
          </NavLink>
          {/*  <SidebarButton>
            <SearchIcon color="#000" />
            <div>Search</div>
          </SidebarButton> */}
          <NavLink
            to="/notifications"
            className={({ isActive }) => (isActive ? 'font-bold' : 'font-normal')}>
            <SidebarButton>
              <NotificationIcon color={color} />
              <div>Notifications</div>
            </SidebarButton>
          </NavLink>
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? 'font-bold' : 'font-normal')}>
            <SidebarButton>
              <MessageIcon color={color} />
              <div>Settings</div>
            </SidebarButton>
          </NavLink>
          <NavLink
            to="/bookmarks"
            className={({ isActive }) => (isActive ? 'font-bold' : 'font-normal')}>
            <SidebarButton>
              <BookmarksIcon color={color} />
              <div>Bookmarks</div>
            </SidebarButton>
          </NavLink>
          <NavLink
            to="/lists"
            className={({ isActive }) => (isActive ? 'font-bold' : 'font-normal')}>
            <SidebarButton>
              <ListsIcon color={color} />
              <div>Lists</div>
            </SidebarButton>
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? 'font-bold' : 'font-normal')}>
            <SidebarButton>
              <ProfileIcon color={color} />
              <div>Profile</div>
            </SidebarButton>
          </NavLink>
          <SidebarButton>
            <MoreIcon color={color} />
            <div>More</div>
          </SidebarButton>
          <div className="mt-2 mr-4">
            <TweetButton />
          </div>
        </div>

        <div className="relative  cursor-pointer group text-black dark:text-white">
          <div className="hover:bg-defaultHover dark:hover:bg-darkDefaultHover flex justify-center py-1 px-2 gap-2  w-fit rounded-full items-center">
            <div className="w-10">
              <img
                src="https://aui.atlassian.com/aui/latest/docs/images/avatar-person.svg"
                width={40}
                alt="as"
              />
            </div>
            <div className="text-[15px]">
              <div className="font-bold  min-w-[120px] ">{user.name}</div>
              <div>@{user.name.split(' ')[0]}</div>
            </div>
            <div className="ml-12">
              <DotIcon color="#000" />
            </div>
          </div>

          <div className=" w-60 transition-all group-hover:opacity-100  opacity-0 absolute right-6 -top-28 shadow shadow-slate-700 bg-white dark:bg-black rounded-2xl flex  flex-col overflow-hidden">
            <div className="hover:bg-defaultHover p-4 dark:hover:bg-darkDefaultHover ">
              Add an existing account
            </div>
            <button
              type="button"
              onClick={() => handleLogout()}
              className="hover:bg-defaultHover p-4 dark:hover:bg-darkDefaultHover ">
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
