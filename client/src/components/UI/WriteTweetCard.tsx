import Button from 'components/buttons/Button';
import React from 'react';
import GIF from 'assets/icons/gif.svg';
import SMILE from 'assets/icons/smile.svg';
import MEDIA from 'assets/icons/media.svg';

type Props = {};

const WriteTweetCard = (props: Props) => {
  return (
    <div className="flex p-2 border-b border-gray">
      <div>
        <img
          src="https://aui.atlassian.com/aui/latest/docs/images/avatar-person.svg"
          width={40}
          alt="as"
        />
      </div>
      <div className="w-full">
        <div>
          <textarea
            placeholder="What's happening?"
            className="resize-none w-full outline-none p-2 tracking-wide"
            rows={2}
          />
        </div>
        <div className="flex justify-between w-full ">
          <div className="flex gap-1">
            <button className="hover:bg-main/10 transition-all p-2 rounded-full">
              <img src={MEDIA} alt="" width={24} />
            </button>
            <button className="hover:bg-main/10 transition-all p-2 rounded-full">
              <img src={GIF} alt="" width={24} />
            </button>
            <button className="hover:bg-main/10 transition-all p-2 rounded-full">
              <img src={SMILE} alt="" width={24} />
            </button>
          </div>

          <Button>Tweet</Button>
        </div>
      </div>
    </div>
  );
};

export default WriteTweetCard;
