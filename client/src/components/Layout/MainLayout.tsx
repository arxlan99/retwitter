import React from 'react';
import { Outlet } from 'react-router-dom';
import Main from './Main';
import RightBar from './RightBar';

import Navbar from './Navbar';

import Sidebar from './Sidebar';

type Props = {};

const MainLayout = (props: Props) => {
  return (
    <div className="bg-white dark:bg-black flex justify-center overflow-hidden h-screen">
      <Sidebar />
      <Main />
      <RightBar />
      {/* <div className="px-2 lg:px-10 py-5">
        
      </div> */}
    </div>
  );
};

export default MainLayout;
