import React from 'react';
import Spinner from 'assets/icons/spinner.svg';
import { useQuery } from '@tanstack/react-query';
import { getTweets } from 'api/endpoints';
import { useAppSelector } from 'store';

import TweetCard from './TweetCard';

type Props = {};

const Tabs = (props: Props) => {
  const [activeTab, setActiveTab] = React.useState(0);
  const { data: tweets, isLoading } = useQuery(['customTweets'], getTweets);
  const user = useAppSelector((state) => state.user);
  console.log(tweets);

  return (
    <div>
      <div className="grid grid-cols-4  font-normal text-dark dark:text-white ">
        <button
          type="button"
          className="py-3 px-8 hover:bg-defaultHover dark:hover:bg-darkDefaultHover transition-all "
          onClick={() => setActiveTab(0)}>
          <span className={`${activeTab === 0 && 'font-bold border-b-4 border-blue-400 p-2'}`}>
            Tweets
          </span>
        </button>
        <button
          type="button"
          className="py-3 px-8 hover:bg-defaultHover dark:hover:bg-darkDefaultHover transition-all "
          onClick={() => setActiveTab(1)}>
          <span className={`${activeTab === 1 && 'font-bold border-b-4 border-blue-400 p-2'}`}>
            Replies
          </span>
        </button>
        <button
          type="button"
          className="py-3 px-8 hover:bg-defaultHover dark:hover:bg-darkDefaultHover transition-all "
          onClick={() => setActiveTab(2)}>
          <span className={`${activeTab === 2 && 'font-bold border-b-4 border-blue-400 p-2'}`}>
            Media
          </span>
        </button>
        <button
          type="button"
          className="py-3 px-8 hover:bg-defaultHover dark:hover:bg-darkDefaultHover transition-all "
          onClick={() => setActiveTab(3)}>
          <span className={`${activeTab === 3 && 'font-bold border-b-4 border-blue-400 p-2'}`}>
            Likes
          </span>
        </button>
      </div>
      {activeTab === 0 && (
        <div>
          {isLoading ? (
            <div className="flex justify-center">
              <img src={Spinner} alt="loading..." width={60} />
            </div>
          ) : (
            tweets.data
              .filter((item: any) => item.user._id === user._id)
              .map((item: any) => <TweetCard tweet={item} key={item._id} />)
          )}
        </div>
      )}
      {activeTab === 1 && (
        <div>
          {/*  <TweetCard />
          <TweetCard /> */}
        </div>
      )}
      {activeTab === 2 && <div>{/* <TweetCard /> */}</div>}
      {activeTab === 3 && <div>{/* <TweetCard /> */}</div>}
    </div>
  );
};

export default Tabs;
