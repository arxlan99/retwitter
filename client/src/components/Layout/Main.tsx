import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <div className="border-x border-[#daedf0] dark:border-gray-700 w-[600px] overflow-y-auto overflow-x-hidden">
      <Outlet />
    </div>
  );
};

export default Main;
