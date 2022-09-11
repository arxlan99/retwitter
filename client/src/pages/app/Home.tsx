import React from 'react';
import TweetCard from 'components/UI/TweetCard';
import WriteTweetCard from 'components/UI/WriteTweetCard';
import Dropdown from 'components/UI/Dropdown';
import Header from 'components/UI/Header';

type Props = {};

const Home = (props: Props) => {
  const array = [1, 2, 3, 4, 5];

  return (
    <div>
      <Header title="Latest Tweets" />
      <WriteTweetCard />
      {array.map((item) => (
        <TweetCard key={item} />
      ))}
    </div>
  );
};

export default Home;
