import Header from 'components/UI/Header';
import NotificationTab from 'components/UI/NotificationTab';

const Notification = () => {
  return (
    <div className="text-black dark:text-white">
      <Header title="Notifications" />
      <NotificationTab />
    </div>
  );
};

export default Notification;
