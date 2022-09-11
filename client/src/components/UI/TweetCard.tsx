import React, { useContext } from 'react';
import ChatIcon from 'assets/jsx/chat-icon';
import { ThemeContext } from 'context/ThemeContext';
import RetweetIcon from 'assets/jsx/retweet-icon';
import UploadIcon from 'assets/jsx/upload-icon';
import { MdFavoriteBorder, MdOutlineModeComment } from 'react-icons/md';
import { BsUpload } from 'react-icons/bs';
import { AiOutlineRetweet } from 'react-icons/ai';

type Props = {};

const TweetCard = (props: Props) => {
  const themeCtx = useContext(ThemeContext);
  const color = !themeCtx.dark ? '#000' : '#fff';
  return (
    <div className="border-b border-[#daedf0] dark:border-gray-700 flex px-4 py-3 gap-3 hover:bg-[#f7f7f7] hover:bg-darkDefaultHover/20 transition-all cursor-pointer text-black dark:text-white">
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
          <div>Tesla slapped with class action lawsuit over phantom braking problem</div>
          <div>
            <img
              src="https://pbs.twimg.com/media/FbbDtq0WIAIGrxM?format=jpg&name=small"
              alt=""
              className="rounded-xl"
            />
          </div>
          <div className="flex justify-between items-center mr-16">
            <div className="p-2 rounded-full dark:hover:bg-darkDefaultHover hover:bg-blue-100/80">
              <MdOutlineModeComment color={color} size={20} />
            </div>
            <div className="flex gap-1 items-center text-sm ">
              <div className="hover:bg-green-100 dark:hover:bg-darkDefaultHover  p-2 rounded-full">
                <AiOutlineRetweet color={color} size={20} />
              </div>

              <div>1</div>
            </div>
            <div className="flex gap-1 items-center text-sm">
              <div className="hover:bg-red-100 dark:hover:bg-darkDefaultHover p-2 rounded-full">
                <MdFavoriteBorder color={color} size={20} />
              </div>
              <div>21</div>
            </div>
            <div className="p-2 rounded-full hover:bg-blue-100/80 dark:hover:bg-darkDefaultHover">
              <BsUpload color={color} size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
