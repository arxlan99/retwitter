import React from 'react';
import Star from 'assets/icons/star.svg';

type Props = {};

const NotificationTab = (props: Props) => {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div>
      <div className="grid grid-cols-2 font-normal ">
        <button
          type="button"
          className="py-4 px-8 hover:bg-defaultHover transition-all "
          onClick={() => setActiveTab(0)}>
          <span className={`${activeTab === 0 && 'font-bold border-b-4 border-blue-400 p-2'}`}>
            All
          </span>
        </button>
        <button
          type="button"
          className="py-3 px-8 hover:bg-defaultHover transition-all "
          onClick={() => setActiveTab(1)}>
          <span className={`${activeTab === 1 && 'font-bold border-b-4 border-blue-400 p-2'}`}>
            Mentions
          </span>
        </button>
      </div>
      {activeTab === 0 && (
        <>
          <div className="flex px-6 py-3 hover:bg-defaultHover transition-all cursor-pointer">
            <div>
              <img src={Star} alt="" width={60} />
            </div>
            <div className="flex flex-col gap-1">
              <img
                src="https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ_400x400.jpg"
                alt="a"
                width={30}
                className="rounded-full"
              />
              <div>{`In case you missed SpaceX's Tweet`}</div>
              <div className="text-gray-500 ">
                Falcon 9 launches 51 Starlink satellites and Spaceflight’s Sherpa-LTC to orbit
                https://pic.twitter.com/6sjswVI0fH
              </div>
            </div>
          </div>
          <div className="flex px-6 py-3 hover:bg-defaultHover transition-all cursor-pointer">
            <div>
              <img src={Star} alt="" width={60} />
            </div>
            <div className="flex flex-col gap-1">
              <img
                src="https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ_400x400.jpg"
                alt="a"
                width={30}
                className="rounded-full"
              />
              <div>{`In case you missed SpaceX's Tweet`}</div>
              <div className="text-gray-500 ">
                Falcon 9 launches 51 Starlink satellites and Spaceflight’s Sherpa-LTC to orbit
                https://pic.twitter.com/6sjswVI0fH
              </div>
            </div>
          </div>
          <div className="flex px-6 py-3 hover:bg-defaultHover transition-all cursor-pointer">
            <div>
              <img src={Star} alt="" width={60} />
            </div>
            <div className="flex flex-col gap-1">
              <img
                src="https://pbs.twimg.com/profile_images/1082744382585856001/rH_k3PtQ_400x400.jpg"
                alt="a"
                width={30}
                className="rounded-full"
              />
              <div>{`In case you missed SpaceX's Tweet`}</div>
              <div className="text-gray-500 ">
                Falcon 9 launches 51 Starlink satellites and Spaceflight’s Sherpa-LTC to orbit
                https://pic.twitter.com/6sjswVI0fH
              </div>
            </div>
          </div>
        </>
      )}
      {activeTab === 1 && <div>2</div>}
    </div>
  );
};
export default NotificationTab;
