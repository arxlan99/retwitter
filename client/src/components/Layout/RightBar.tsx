import React from 'react';
import SearchBar from 'components/UI/SearchBar';
import ContentCard from 'components/UI/ContentCard';

type Props = {};

const RightBar = (props: Props) => {
  return (
    <div className="w-[400px] hidden lg:flex p-2 pl-6 flex-col gap-4  ">
      <SearchBar />
      <ContentCard />
    </div>
  );
};

export default RightBar;
