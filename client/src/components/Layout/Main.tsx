import TweetCard from 'components/UI/TweetCard';
import WriteTweetCard from 'components/UI/WriteTweetCard';
import React from 'react';
import { Outlet } from 'react-router-dom';

type Props = {};

const Main = (props: Props) => {
  const array = [1, 2, 3, 4, 5];
  return (
    <div className="border-x border-[#daedf0] w-[600px] overflow-auto">
      <div className="text-xl font-bold p-3 sticky top-0 bg-white/95">
        Latest Tweets
      </div>
      <WriteTweetCard />
      {array.map((item) => (
        <TweetCard key={item} />
      ))}
      <Outlet />
    </div>
  );
};

export default Main;
