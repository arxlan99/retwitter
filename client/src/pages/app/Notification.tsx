import NotificationTab from 'components/UI/NotificationTab';

type Props = {};

const Notification = (props: Props) => {
  return (
    <div>
      <div className="text-xl font-bold p-3 sticky top-0 bg-white/95">Notifications</div>
      <NotificationTab />
    </div>
  );
};

export default Notification;
