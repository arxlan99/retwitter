import React, { useContext, useState } from 'react';
import { ThemeContext } from 'context/ThemeContext';
import { MdFavoriteBorder, MdOutlineModeComment, MdFavorite } from 'react-icons/md';
import { BsUpload } from 'react-icons/bs';
import { AiOutlineRetweet } from 'react-icons/ai';
import { likeTweet } from 'api/endpoints';
import { useMutation } from '@tanstack/react-query';
import { useAppSelector } from 'store';
import { useNavigate } from 'react-router-dom';

type Props = {
  tweet: any;
  // eslint-disable-next-line react/no-unused-prop-types
  refetch?: any;
};

const TweetCard = (props: Props) => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user);

  const { tweet } = props;
  const themeCtx = useContext(ThemeContext);
  const time = new Date(tweet.createdAt).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  });

  const color = !themeCtx.dark ? '#000' : '#fff';

  const [hasLiked, setHasLiked] = useState(tweet.likes.includes(user._id));
  const [likes, setLikes] = useState(tweet?.likes.length || 0);
  const { mutate } = useMutation(likeTweet, {});

  const handleLikeTweet = async () => {
    mutate(tweet._id);

    setHasLiked((prev: any) => !prev);
    // eslint-disable-next-line no-return-assign
    setLikes((prev: any) => (prev += hasLiked ? -1 : 1));
  };

  return (
    <div className="border-b border-[#daedf0] dark:border-gray-700 flex px-4 py-3 gap-3 hover:bg-[#f7f7f7] hover:bg-darkDefaultHover/20 transition-all cursor-pointer text-black dark:text-white">
      <div className="w-14" onClick={() => navigate(`/profile/${tweet.user._id}`)}>
        <img
          src="https://aui.atlassian.com/aui/latest/docs/images/avatar-person.svg"
          className="w-full"
          alt="profile"
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
              <button
                type="button"
                className="hover:bg-red-100 dark:hover:bg-darkDefaultHover p-2 rounded-full"
                onClick={() => handleLikeTweet()}>
                {/*
                    fill the heart icon if the user has liked the tweet
                    
                  */}
                {hasLiked ? (
                  <MdFavorite color="#e0245e" size={20} />
                ) : (
                  <MdFavoriteBorder color={color} size={20} />
                )}
              </button>

              <div>{likes}</div>
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
