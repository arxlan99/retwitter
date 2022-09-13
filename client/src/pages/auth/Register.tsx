import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { register as registerUser } from 'api/endpoints';

type Props = {};

const Register = (props: Props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [error, setError] = React.useState('');

  const { mutateAsync, isLoading } = useMutation<any, Error>(registerUser);

  const onSubmit = (data: any) => {
    if (data.password !== data.confirmPassword) {
      setError('Passwords do not match');
    } else {
      // delete confirm password
      delete data.confirmPassword;

      mutateAsync(data)
        .then((res) => {
          // eslint-disable-next-line no-console
          console.log(res);
          navigate('/', { replace: true });
        })
        .catch((err) => {
          setError(err.response.data.message);
        });
    }
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center h-screen dark:bg-black bg-[#F9FAFB]">
      <div className="text-4xl font-bold text-black dark:text-white">Register</div>
      <form
        className="lg:w-1/4 w-full shadow dark:shadow-slate-700 rounded-lg p-5 dark:bg-[#1F2937] bg-white"
        onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your name
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your name"
            {...register('name', { required: true })}
          />
          {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your email"
            {...register('email', { required: true })}
          />
          {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register('password', { required: true, minLength: 6 })}
          />
          {errors.password && <span className="text-red-500 text-sm">This field is required</span>}
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Confirm password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password again"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            {...register('confirmPassword', { required: true, minLength: 6 })}
          />
          {errors.confirmPassword && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            />
          </div>
          <label
            htmlFor="remember"
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Accept the terms and conditions of the site...
          </label>
        </div>
        {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
        {isLoading ? (
          <div className="flex justify-center">Loading...</div>
        ) : (
          <button
            type="submit"
            className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Login
          </button>
        )}
      </form>
      <div className="text-black dark:text-white">
        <Link to="/auth/login">
          Already have an account? <span className="text-blue-700 dark:text-blue-600">Login</span>
        </Link>
      </div>
    </div>
  );
};

export default Register;
