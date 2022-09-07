import React from 'react';
import Calendar from 'assets/icons/calendar.svg';
import Tabs from 'components/UI/Tabs';

type Props = {};

const Profile = (props: Props) => {
  return (
    <div>
      <div className="text-xl font-bold p-3 sticky top-0 bg-white/95 z-50">
        Ozkan
      </div>
      <div>
        <img
          src="https://pbs.twimg.com/profile_banners/1360248526589026323/1617364065/1080x360"
          alt=""
        />
        <div className="h-20">
          <img
            src="https://pbs.twimg.com/profile_images/1375796931591602177/_0eyyiTr_400x400.jpg"
            alt=""
            className="rounded-full w-36 border-4 border-white -translate-y-1/2 translate-x-4"
          />
        </div>
        <div className="px-4">
          <div className="font-extrabold text-lg">Ozkan</div>
          <div className="-translate-y-2">@ozkan</div>
          <div className="text-[#536471] flex gap-2 items-center pt-2 text-[15px]">
            <div>
              <img src={Calendar} alt="" width={18} />
            </div>
            <div>Joined February 2022</div>
          </div>
          <div className="flex font-bold gap-4 mt-2">
            <div className="flex gap-1 items-center">
              <span className="tracking-tighter	">111</span>
              <span className="text-[#536471] text-sm font-normal">
                Following
              </span>
            </div>
            <div className="flex gap-1 items-center">
              <span className="tracking-tighter	">21</span>
              <span className="text-[#536471] text-sm font-normal">
                Followers
              </span>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <Tabs />
        </div>
      </div>
    </div>
  );
};

export default Profile;
