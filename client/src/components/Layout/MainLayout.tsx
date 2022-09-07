import React from 'react';
import Main from './Main';
import RightBar from './RightBar';

import Sidebar from './Sidebar';

type Props = {};

const MainLayout = (props: Props) => {
  return (
    <div className="bg-white dark:bg-black flex justify-center overflow-hidden h-screen">
      <Sidebar />
      <Main />
      <RightBar />
    </div>
  );
};

export default MainLayout;
