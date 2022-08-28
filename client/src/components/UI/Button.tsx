import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = (props: Props) => {
  return (
    <button type="button" className="button">
      {props.children}
    </button>
  );
};

export default Button;
