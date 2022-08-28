import * as React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import AppConfig from 'pages/app/AppConfig';
import AuthConfig from 'pages/auth/AuthConfig';

function Routes() {
  const routes = [AppConfig.routes, AuthConfig.routes];
  let element = useRoutes([
    ...routes.flat(),
    {
      path: '*',
      element: <Navigate to="/" />,
    },
  ]);

  return element;
}

export default Routes;
