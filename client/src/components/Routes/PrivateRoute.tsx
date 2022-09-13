import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAuthMe } from 'api/endpoints';
import { Link, Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const { data, isLoading } = useQuery(['authMe'], getAuthMe, {
    retry: false,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>{data ? <Outlet /> : <Navigate to="/auth/login" />}</div>;
};

export default PrivateRoute;
