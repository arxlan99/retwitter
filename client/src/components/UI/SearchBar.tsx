import React from 'react';
import Search from 'assets/icons/search.svg';

type Props = {};

const SearchBar = (props: Props) => {
  return (
    <input
      type="text"
      style={{
        backgroundImage: `url(${Search})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '22px',
        backgroundPosition: 'left center',
        backgroundPositionX: '10px',
        padding: '10px 20px 10px 40px',
      }}
      className="bg-no-repeat w-full bg-[#EFF3F4] dark:bg-[#16181C] outline-none rounded-full px-4 py-3 flex gap-4 focus:bg-white blur:bg-white focus:border-main focus:border transition-all border border-transparent"
      placeholder="Search Twitter"
    />
  );
};

export default SearchBar;
