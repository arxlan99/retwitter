import React, { useContext } from 'react';
import ChatIcon from 'assets/jsx/chat-icon';
import { ThemeContext } from 'context/ThemeContext';
import RetweetIcon from 'assets/jsx/retweet-icon';
import UploadIcon from 'assets/jsx/upload-icon';
import { MdFavoriteBorder, MdOutlineModeComment } from 'react-icons/md';
import { BsUpload } from 'react-icons/bs';
import { AiOutlineRetweet } from 'react-icons/ai';

type Props = {
  tweet: any;
};

const TweetCard = (props: Props) => {
  const { tweet } = props;
  const themeCtx = useContext(ThemeContext);
  const time = new Date(tweet.createdAt).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });
  const color = !themeCtx.dark ? '#000' : '#fff';
  return (
    <div className="border-b border-[#daedf0] dark:border-gray-700 flex px-4 py-3 gap-3 hover:bg-[#f7f7f7] hover:bg-darkDefaultHover/20 transition-all cursor-pointer text-black dark:text-white">
      <div className="w-14">
        <img
          src="https://aui.atlassian.com/aui/latest/docs/images/avatar-person.svg"
          className="w-full"
          alt="as"
        />
      </div>
      <div className="flex flex-col ">
        <div className="flex gap-1">
          <div className="font-bold">{tweet.user.name}</div>
          <div className="text-[#536471]">@{tweet.user.name.split(' ')[0]}</div>
          <div className="text-[#536471]">· {time}</div>
        </div>
        <div className="flex flex-col gap-2 h-96 ">
          <div>{tweet.text}</div>
          <div className="overflow-hidden h-80">
            <img src={tweet.image} alt="" className="rounded-xl bg-contain h-full w-full" />
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
