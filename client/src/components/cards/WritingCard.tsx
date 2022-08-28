import React from 'react';

import Button from 'components/UI/Button';
import image from 'assets/icons/image.svg';
import world from 'assets/icons/world.svg';

type Props = {};

const WritingCard = (props: Props) => {
  return (
    <div className="rounded-xl border px-5 py-3 shadow-sm bg-white">
      <div>
        <h1 className="font-semibold text-xs border-b pb-2">Tweet Something</h1>
      </div>
      <div>
        <textarea
          className="resize-none border-gray-300 w-full outline-none py-2"
          rows={3}
          placeholder="What's happening?"
        />
      </div>
      <div className="flex justify-between">
        <div className="flex gap-3 justify-center items-center">
          <img src={image} alt="" className="w-4 h-4" />
          <img src={world} alt="" className="w-4 h-4" />
          <div className="text-xs text-blue-400">Everyone can reply</div>
        </div>

        <Button>Tweet</Button>
      </div>
    </div>
  );
};

export default WritingCard;
