import React from 'react';
import { Outlet } from 'react-router-dom';

type Props = {};

const Main = (props: Props) => {
  return (
    <div className="border-x border-[#daedf0] w-[600px] overflow-auto">
      <Outlet />
    </div>
  );
};

export default Main;
