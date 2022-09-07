import MainLayout from 'components/Layout/MainLayout';
import Bookmarks from './Bookmarks';
import Explore from './Explore';
import Home from './Home';
import List from './List';
import Notification from './Notification';
import Profile from './Profile';
import Settings from './Settings';

const AppConfig = {
  routes: [
    {
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/bookmarks',
          element: <Bookmarks />,
        },
        {
          path: '/explore',
          element: <Explore />,
        },
        {
          path: '/profile',
          element: <Profile />,
        },
        {
          path: '/notifications',
          element: <Notification />,
        },
        {
          path: '/lists',
          element: <List />,
        },
        {
          path: '/settings',
          element: <Settings />,
        },
      ],
    },
    {
      path: '/profile',
      element: <Profile />,
    },
  ],
};

export default AppConfig;
