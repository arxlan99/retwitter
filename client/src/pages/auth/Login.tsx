import React from 'react';
import Google from 'assets/icons/google.svg';

type Props = {};

const Login = (props: Props) => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center h-screen">
      <div className="text-4xl font-bold">Login</div>
      <button className="flex bg-white gap-4 hover:bg-blue-100/50 text-black font-bold py-3 px-16  focus:outline-none focus:shadow-outline rounded-full border transition-all">
        <img src={Google} alt="" width={28} />
        <div>Sign in with Google</div>
      </button>
    </div>
  );
};

export default Login;
