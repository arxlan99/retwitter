import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
}

const Button = (props: Props) => {
  const { children, isLoading } = props;
  return (
    <button className="rounded-full bg-main text-white px-5 py-2 w-fit font-bold hover:bg-mainHover transition-all">
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
