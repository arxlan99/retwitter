import TweetCard from 'components/UI/TweetCard';
import React from 'react';

type Props = {};

const Bookmarks = (props: Props) => {
  const array = [1];

  return (
    <div>
      <div className="text-xl font-bold p-3 sticky top-0 bg-white/95">Bookmarks</div>
      {array.map((item) => (
        <TweetCard key={item} />
      ))}
    </div>
  );
};

export default Bookmarks;
