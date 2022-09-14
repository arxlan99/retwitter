import Header from 'components/UI/Header';
import TweetCard from 'components/UI/TweetCard';
import React from 'react';

type Props = {};

const Bookmarks = (props: Props) => {
  const array = [1];

  return (
    <div>
      <Header title="Bookmarks" />
      {/*  {array.map((item) => (
        <TweetCard key={item} />
      ))} */}
    </div>
  );
};

export default Bookmarks;
