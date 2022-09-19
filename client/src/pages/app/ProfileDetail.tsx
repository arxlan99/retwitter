import React from 'react';
import Calendar from 'assets/icons/calendar.svg';
import Tabs from 'components/UI/Tabs';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getUser } from 'api/endpoints';
import Spinner from 'assets/icons/spinner.svg';
import Header from 'components/UI/Header';

const Profile = () => {
  const params = useParams<{ id: string }>();

  const { data, isLoading } = useQuery(['user', params.id], () => getUser(params.id as string), {
    cacheTime: 0,
    enabled: !!params.id,
  });

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center">
          <img src={Spinner} alt="loading..." width={60} />
        </div>
      ) : (
        <>
          <Header title={data.data.name} />
          <div>
            <img
              src="https://pbs.twimg.com/profile_banners/1360248526589026323/1617364065/1080x360"
              alt=""
            />
            <div className="h-20">
              <img
                src="https://aui.atlassian.com/aui/latest/docs/images/avatar-person.svg"
                alt=""
                className="rounded-full w-36 border-4 border-white dark:border-darkDefaultHover -translate-y-1/2 translate-x-4"
              />
            </div>
            <div className="px-4 text-black dark:text-white">
              <div className="font-extrabold text-lg">{data.data.name}</div>
              <div className="-translate-y-2">@{data.data.name.split(' ')[0]}</div>
              <div className="text-[#536471] flex gap-2 items-center pt-2 text-[15px]">
                <div>
                  <img src={Calendar} alt="" width={18} />
                </div>
                <div>Joined February 2022</div>
              </div>
              <div className="flex font-bold gap-4 mt-2">
                <div className="flex gap-1 items-center">
                  <span className="tracking-tighter	">111</span>
                  <span className="text-[#536471] text-sm font-normal">Following</span>
                </div>
                <div className="flex gap-1 items-center">
                  <span className="tracking-tighter	">21</span>
                  <span className="text-[#536471] text-sm font-normal">Followers</span>
                </div>
              </div>
            </div>
            <div className="mt-5">
              <Tabs id={params.id} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
