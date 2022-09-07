import React from 'react';
import TweetCard from 'components/UI/TweetCard';
import WriteTweetCard from 'components/UI/WriteTweetCard';
import Dropdown from 'components/UI/Dropdown';

type Props = {};

const Home = (props: Props) => {
  const a = 2;
  const array = [1, 2, 3, 4, 5];

  return (
    <div>
      <div className="text-xl font-bold p-3 sticky top-0 bg-white/95">Latest Tweets</div>
      <WriteTweetCard />
      {array.map((item) => (
        <TweetCard key={item} />
      ))}
    </div>
  );
};

export default Home;
