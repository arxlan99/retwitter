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
import { NavLink } from 'react-router-dom';

type Props = {};

const Sidebar = (props: Props) => {
  const themeCtx = useContext(ThemeContext);
  const color = !themeCtx.dark ? '#000' : '#fff';

  return (
    <div className="w-[281px] p-3 h-screen  ">
      <div className="flex flex-col justify-between h-full">
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
            <div>
              <img
                src="https://aui.atlassian.com/aui/latest/docs/images/avatar-person.svg"
                width={40}
                alt="as"
              />
            </div>
            <div className="text-[15px]">
              <div className="font-bold">Ozkan</div>
              <div>@ozkan</div>
            </div>
            <div className="ml-20">
              <DotIcon color="#000" />
            </div>
          </div>

          <div className=" w-60 transition-all group-hover:opacity-100  opacity-0 absolute right-6 -top-28 shadow shadow-slate-700 bg-white dark:bg-black rounded-2xl flex  flex-col overflow-hidden">
            <div className="hover:bg-defaultHover p-4 dark:hover:bg-darkDefaultHover ">
              Add an existing account
            </div>
            <div className="hover:bg-defaultHover p-4 dark:hover:bg-darkDefaultHover ">Log out</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
