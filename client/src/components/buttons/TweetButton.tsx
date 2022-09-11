import React from 'react';

type Props = {};

const TweetButton = (props: Props) => {
  return (
    <button
      type="button"
      className="gap-5 bg-main hover:bg-mainHover p-3 pr-6 rounded-3xl transition-all text-white text-[17px] font-semibold w-full flex justify-center">
      <div>Tweet</div>
    </button>
  );
};

export default TweetButton;
