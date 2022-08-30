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
  return (
    <div className="w-[281px] p-3 h-screen  ">
      <div className="flex flex-col justify-between h-full">
        <div className="text-xl flex flex-col gap-1 ">
          <div className="pl-2 mb-4">
            <img src={twitter} alt="logo" />
          </div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'font-bold' : 'font-normal'
            }
          >
            <SidebarButton>
              <HomeIcon color="#000" />
              <div>Home</div>
            </SidebarButton>
          </NavLink>
          <SidebarButton>
            <SearchIcon color="#000" />
            <div>Search</div>
          </SidebarButton>
          <SidebarButton>
            <NotificationIcon color="#000" />
            <div>Notifications</div>
          </SidebarButton>
          <SidebarButton>
            <MessageIcon color="#000" />
            <div>Messages</div>
          </SidebarButton>
          <SidebarButton>
            <BookmarksIcon color="#000" />
            <div>Bookmarks</div>
          </SidebarButton>
          <SidebarButton>
            <ListsIcon color="#000" />
            <div>Lists</div>
          </SidebarButton>
          <SidebarButton>
            <ProfileIcon color="#000" />
            <div>Profile</div>
          </SidebarButton>
          <SidebarButton>
            <MoreIcon color="#000" />
            <div>More</div>
          </SidebarButton>
          <div className="mt-2 mr-4">
            <TweetButton />
          </div>
        </div>

        <div className="flex justify-center items-center w-fit gap-2 hover:bg-defaultHover rounded-full py-1 px-2 cursor-pointer">
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
      </div>
    </div>
  );
};

export default Sidebar;
