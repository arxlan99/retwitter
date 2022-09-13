import ProtectedRoute from 'components/Routes/ProtectedRoute';
import Login from './Login';
import Register from './Register';

const AuthConfig = {
  routes: [
    {
      element: <ProtectedRoute />,
      children: [
        {
          path: '/auth',
          children: [
            {
              path: 'login',
              element: <Login />,
            },
            {
              path: 'register',
              element: <Register />,
            },
          ],
        },
      ],
    },
  ],
};

export default AuthConfig;
