import React, { useEffect } from 'react';
import TweetCard from 'components/UI/TweetCard';
import WriteTweetCard from 'components/UI/WriteTweetCard';
import Dropdown from 'components/UI/Dropdown';
import Header from 'components/UI/Header';
import { useQuery } from '@tanstack/react-query';
import { getTweets } from 'api/endpoints';
import Spinner from 'assets/icons/spinner.svg';

type Props = {};

const Home = (props: Props) => {
  const { data: tweets, isLoading, refetch } = useQuery(['tweets'], getTweets);

  return (
    <div>
      <Header title="Latest Tweets" />
      {isLoading ? (
        <div className="flex justify-center">
          <img src={Spinner} alt="loading..." width={60} />
        </div>
      ) : (
        <>
          <WriteTweetCard refetch={refetch} />
          {tweets.data?.map((item: any) => (
            <TweetCard tweet={item} key={item._id} />
          ))}
        </>
      )}
    </div>
  );
};

export default Home;
