import React from 'react';

type Props = {};

const ContentCard = (props: Props) => {
  return (
    <div className="bg-[#F7F9F9] dark:bg-[#16181C] rounded-2xl overflow-hidden">
      <div className="font-bold text-xl py-3 px-4 tracking-wide">{`What's happening`}</div>
      <div className="py-3 px-4 flex flex-col gap-.5 hover:bg-defaultHover dark:hover:bg-darkDefaultHover transition-all cursor-pointer">
        <div className="text-xs text-[#536471]">Politics</div>
        <div className="font-bold">
          Image of Dr. Oz campaign poster was digitally altered, fact-checkers say
        </div>
        <div className="text-xs text-[#536471]">10K Tweets</div>
      </div>
      <div className="py-3 px-4 flex flex-col gap-.5 hover:bg-defaultHover dark:hover:bg-darkDefaultHover transition-all cursor-pointer">
        <div className="text-xs text-[#536471]">Politics</div>
        <div className="font-bold">
          Image of Dr. Oz campaign poster was digitally altered, fact-checkers say
        </div>
        <div className="text-xs text-[#536471]">8K Tweets</div>
      </div>
      <div className="py-3 px-4 flex flex-col gap-.5 hover:bg-defaultHover dark:hover:bg-darkDefaultHover  transition-all cursor-pointer">
        <div className="text-xs text-[#536471]">Politics</div>
        <div className="font-bold">Bronny</div>
        <div className="text-xs text-[#536471]">12K Tweets</div>
      </div>
      <div className="py-3 px-4 flex flex-col gap-.5 hover:bg-defaultHover dark:hover:bg-darkDefaultHover  transition-all cursor-pointer">
        <div className="text-xs text-[#536471]">Politics</div>
        <div className="font-bold">Comfortably Numb</div>
        <div className="text-xs text-[#536471]">10K Tweets</div>
      </div>
      <div className="py-3 px-4 flex flex-col gap-.5 hover:bg-defaultHover dark:hover:bg-darkDefaultHover  transition-all cursor-pointer">
        <div className="text-xs text-[#536471]">Politics</div>
        <div className="font-bold">
          Image of Dr. Oz campaign poster was digitally altered, fact-checkers say
        </div>
        <div className="text-xs text-[#536471]">10K Tweets</div>
      </div>
      <div className="py-3 px-4 flex flex-col gap-.5 hover:bg-defaultHover dark:hover:bg-darkDefaultHover  transition-all cursor-pointer text-[15px]">
        <div className="text-main">Show more</div>
      </div>
    </div>
  );
};

export default ContentCard;
