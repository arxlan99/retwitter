import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAuthMe } from 'api/endpoints';
import { Link, Navigate, Outlet } from 'react-router-dom';
import Spinner from 'assets/icons/spinner.svg';

const ProtectedRoute = () => {
  const { data, isLoading } = useQuery(['authMe'], getAuthMe, {
    retry: false,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img src={Spinner} alt="loading..." width={60} />
      </div>
    );
  }

  return <div>{data ? <Navigate to="/" /> : <Outlet />}</div>;
};

export default ProtectedRoute;
