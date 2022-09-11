import * as React from 'react';

const RetweetIcon = (props: any) => (
  <svg
    width={props.width || 48}
    height={props.height || 48}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill={props.color || '#000'}>
    <path d="m14 44-8-8 8-8 2.1 2.2-4.3 4.3H35v-8h3v11H11.8l4.3 4.3Zm-4-22.5v-11h26.2l-4.3-4.3L34 4l8 8-8 8-2.1-2.2 4.3-4.3H13v8Z" />
  </svg>
);

export default RetweetIcon;
