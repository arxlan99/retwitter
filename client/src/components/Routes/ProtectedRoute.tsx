import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAuthMe } from 'api/endpoints';
import { Link, Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const { data, isLoading } = useQuery(['authMe'], getAuthMe, {
    retry: false,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>{data ? <Navigate to="/" /> : <Outlet />}</div>;
};

export default ProtectedRoute;
