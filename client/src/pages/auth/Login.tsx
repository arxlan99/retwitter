import React from 'react';
import Google from 'assets/icons/google.svg';
import { Link } from 'react-router-dom';

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center h-screen dark:bg-black bg-[#F9FAFB]">
      <div className="text-4xl font-bold text-black dark:text-white">Login</div>
      <form className="w-1/4 shadow dark:shadow-slate-700 rounded-lg p-5 dark:bg-[#1F2937] bg-white">
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
            required
          />
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
            required
          />
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
            Remember me
          </label>
        </div>
        <button
          type="submit"
          className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Login
        </button>
      </form>
      <div className="text-black dark:text-white">
        <Link to="/auth/register">
          Dont have an account? <span className="text-blue-700 dark:text-blue-600">Sign up</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
