import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

type Props = {};

const MainLayout = (props: Props) => {
  return (
    <div className="bg-gray-100/50 min-h-screen">
      <Navbar />
      <div className="px-2 lg:px-10 py-5">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
