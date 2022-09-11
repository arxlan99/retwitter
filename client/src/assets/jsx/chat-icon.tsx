import * as React from 'react';

const ChatIcon = (props: any) => (
  <svg
    width={props.width || 48}
    height={props.height || 48}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill={props.color || '#000'}>
    <path d="M4 44V7q0-1.15.9-2.075Q5.8 4 7 4h34q1.15 0 2.075.925Q44 5.85 44 7v26q0 1.15-.925 2.075Q42.15 36 41 36H12Zm3-7.25L10.75 33H41V7H7ZM7 7v29.75Z" />
  </svg>
);

export default ChatIcon;
