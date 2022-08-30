import React from 'react';
import Chat from 'assets/icons/chat.svg';
import Favorite from 'assets/icons/favorite.svg';
import Retweet from 'assets/icons/retweet.svg';
import Upload from 'assets/icons/upload.svg';

type Props = {};

const TweetCard = (props: Props) => {
  return (
    <div className="border-b border-gray flex px-4 py-3 gap-3 hover:bg-[#f7f7f7] transition-all cursor-pointer">
      <div>
        <img
          src="https://aui.atlassian.com/aui/latest/docs/images/avatar-person.svg"
          width={64}
          alt="as"
        />
      </div>
      <div className="flex flex-col ">
        <div className="flex gap-1">
          <div className="font-bold">The Verge</div>
          <div className="text-[#536471]">@verge</div>
          <div className="text-[#536471]">· 7m</div>
        </div>
        <div className="flex flex-col gap-2">
          <div>
            Tesla slapped with class action lawsuit over phantom braking problem
          </div>
          <div>
            <img
              src="https://pbs.twimg.com/media/FbbDtq0WIAIGrxM?format=jpg&name=small"
              alt=""
              className="rounded-xl"
            />
          </div>
          <div className="flex justify-between items-center mr-16">
            <div className="p-2 rounded-full hover:bg-blue-100/80">
              <img src={Chat} alt="" width={18} />
            </div>
            <div className="flex gap-1 items-center text-sm ">
              <div className="hover:bg-green-100 p-2 rounded-full">
                <img src={Retweet} alt="" width={18} />
              </div>

              <div>1</div>
            </div>
            <div className="flex gap-1 items-center text-sm">
              <div className="hover:bg-red-100 p-2 rounded-full">
                <img src={Favorite} alt="" width={18} />
              </div>
              <div>21</div>
            </div>
            <div className="p-2 rounded-full hover:bg-blue-100/80">
              <img src={Upload} alt="" width={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
