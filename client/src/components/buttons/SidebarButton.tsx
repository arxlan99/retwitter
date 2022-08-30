import React from 'react';

type Props = {
  children: React.ReactNode;
};

const SidebarButton = (props: Props) => {
  return (
    <button className="flex gap-5 hover:bg-defaultHover p-3 pr-6 rounded-full w-fit transition-all">
      {props.children}
    </button>
  );
};

export default SidebarButton;
