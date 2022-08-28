import MainLayout from 'components/Layout/MainLayout';
import Bookmarks from './Bookmarks';
import Explore from './Explore';
import Home from './Home';
import Profile from './Profile';

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
      ],
    },
    {
      path: '/profile',
      element: <Profile />,
    },
  ],
};

export default AppConfig;
