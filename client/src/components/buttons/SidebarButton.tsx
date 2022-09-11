import React from 'react';

type Props = {
  children: React.ReactNode;
};

const SidebarButton = (props: Props) => {
  const { children } = props;
  return (
    <button
      type="button"
      className="flex gap-5 hover:bg-defaultHover dark:hover:bg-darkDefaultHover/50 p-3 pr-6 rounded-full w-fit transition-all dark:text-white">
      {children}
    </button>
  );
};

export default SidebarButton;
