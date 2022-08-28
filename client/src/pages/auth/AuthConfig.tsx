import Login from './Login';
import Register from './Register';

const AuthConfig = {
  routes: [
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
};

export default AuthConfig;
