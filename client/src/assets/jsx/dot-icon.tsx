import * as React from 'react';

const DotIcon = (props: any) => (
  <svg
    width={props.width || 26}
    height={props.height || 26}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill={props.color || '#000'}
  >
    <circle cx={5} cy={12} r={2} />
    <circle cx={12} cy={12} r={2} />
    <circle cx={19} cy={12} r={2} />
  </svg>
);

export default DotIcon;
