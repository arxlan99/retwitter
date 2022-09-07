import React from 'react';
import TweetCard from './TweetCard';

type Props = {};

const Tabs = (props: Props) => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div>
      <div className="grid grid-cols-4  font-normal ">
        <button
          type="button"
          className="py-3 px-8 hover:bg-defaultHover transition-all "
          onClick={() => setActiveTab(0)}>
          <span className={`${activeTab === 0 && 'font-bold border-b-4 border-blue-400 p-2'}`}>
            Tweets
          </span>
        </button>
        <button
          type="button"
          className="py-3 px-8 hover:bg-defaultHover transition-all "
          onClick={() => setActiveTab(1)}>
          <span className={`${activeTab === 1 && 'font-bold border-b-4 border-blue-400 p-2'}`}>
            Replies
          </span>
        </button>
        <button
          type="button"
          className="py-3 px-8 hover:bg-defaultHover transition-all  line"
          onClick={() => setActiveTab(2)}>
          <span className={`${activeTab === 2 && 'font-bold border-b-4 border-blue-400 p-2'}`}>
            Media
          </span>
        </button>
        <button
          type="button"
          className="py-3 px-8 hover:bg-defaultHover transition-all "
          onClick={() => setActiveTab(3)}>
          <span className={`${activeTab === 3 && 'font-bold border-b-4 border-blue-400 p-2'}`}>
            Likes
          </span>
        </button>
      </div>
      {activeTab === 0 && (
        <div>
          <TweetCard />
          <TweetCard />
        </div>
      )}
      {activeTab === 1 && (
        <div>
          <TweetCard />
          <TweetCard />
        </div>
      )}
      {activeTab === 2 && (
        <div>
          <TweetCard />
        </div>
      )}
      {activeTab === 3 && (
        <div>
          <TweetCard />
        </div>
      )}
    </div>
  );
};

export default Tabs;
