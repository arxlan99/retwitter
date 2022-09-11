import Header from 'components/UI/Header';
import NotificationTab from 'components/UI/NotificationTab';

type Props = {};

const Notification = (props: Props) => {
  return (
    <div className="text-black dark:text-white">
      <Header title="Notifications" />
      <NotificationTab />
    </div>
  );
};

export default Notification;
