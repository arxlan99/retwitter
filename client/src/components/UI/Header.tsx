import React from 'react';

type Props = {
  title: string;
};

const Header = (props: Props) => {
  const { title } = props;
  return (
    <div className="text-xl font-bold p-3 sticky top-0 bg-white/95 dark:bg-black text-black dark:text-white">
      {title}
    </div>
  );
};

export default Header;
