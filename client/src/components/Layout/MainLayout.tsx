import React from 'react';
import Main from './Main';
import RightBar from './RightBar';
import Sidebar from './Sidebar';

const MainLayout = () => {
  return (
    <div className="bg-white dark:bg-black flex justify-center overflow-hidden h-screen">
      <Sidebar />
      <Main />
      <RightBar />
    </div>
  );
};

export default MainLayout;
