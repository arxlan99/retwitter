import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getAuthMe } from 'api/endpoints';
import { Link, Navigate, Outlet } from 'react-router-dom';
import Spinner from 'assets/icons/spinner.svg';
import { useAppDispatch } from 'store';
import { addUser } from 'store/slices/userSlice';

const PrivateRoute = () => {
  const { data, isLoading, isSuccess } = useQuery(['authMe'], getAuthMe, {
    retry: false,
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isSuccess) {
      dispatch(addUser(data.data.user));
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img src={Spinner} alt="loading..." width={60} />
      </div>
    );
  }

  return <div>{data ? <Outlet /> : <Navigate to="/auth/login" />}</div>;
};

export default PrivateRoute;
