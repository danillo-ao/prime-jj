import React from 'react';
import { IconProps } from '@components/icons/icon.types';

const FacebookIcon: React.FC<IconProps> = ({
  color = '#fff',
  width = 30,
  height = 30,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 32 32"
      width={width}
      height={height}
    >
      <path
        fill={color}
        d="M23 0H9C4 0 0 4 0 9v14c0 5 4 9 9 9h7V20h-4c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1h4v-3c0-3.3 1.7-6 5-6h4c.6 0 1 .4 1 1v3c0 .6-.4 1-1 1h-3.8c-.1 0-.2.1-.2.2V15h5c.3 0 .6.2.8.4s.2.6.1.9l-2 3c-.1.5-.5.7-.9.7h-3v12h2c5 0 9-4 9-9V9c0-5-4-9-9-9z"
      />
    </svg>
  );
};

export default FacebookIcon;
