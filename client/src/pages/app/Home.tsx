import React, { useEffect } from 'react';
import TweetCard from 'components/UI/TweetCard';
import WriteTweetCard from 'components/UI/WriteTweetCard';
import Dropdown from 'components/UI/Dropdown';
import Header from 'components/UI/Header';
import { useQuery } from '@tanstack/react-query';
import { getTweets } from 'api/endpoints';

type Props = {};

const Home = (props: Props) => {
  const array = [1, 2, 3, 4, 5];

  const { data: tweets } = useQuery(['tweets'], getTweets);

  useEffect(() => {
    console.log(tweets);
  }, [tweets]);

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
