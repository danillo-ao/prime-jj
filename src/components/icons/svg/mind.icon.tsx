import React from 'react';
import { IconProps } from '@components/icons/icon.types';

const MindIcon: React.FC<IconProps> = ({
  color = '#fff',
  width = 30,
  height = 30,
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24">
      <g fill="none" stroke={color} strokeMiterlimit={10} strokeWidth={1.91}>
        <path
          className="cls-1"
          d="M12,4.36V20.59a1.92,1.92,0,0,1-1.91,1.91,1.93,1.93,0,0,1-1.91-1.91v0a2.45,2.45,0,0,1-.48,0,3.35,3.35,0,0,1-3.34-3.34,3.19,3.19,0,0,1,.08-.7A4.29,4.29,0,0,1,3.6,8.79,3.24,3.24,0,0,1,3.41,7.7,3.34,3.34,0,0,1,6.27,4.4v0a2.87,2.87,0,0,1,5.73,0Z"
        />
        <path className="cls-1" d="M6.75,11.05a3.35,3.35,0,0,1,0-6.69" />
        <path className="cls-1" d="M8.18,13.91h0A3.82,3.82,0,0,1,12,17.73h0" />
        <path className="cls-1" d="M9.14,7.23h0A2.86,2.86,0,0,0,12,4.36h0" />
        <path
          className="cls-1"
          d="M12,4.36V20.59a1.92,1.92,0,0,0,1.91,1.91,1.93,1.93,0,0,0,1.91-1.91v0a2.45,2.45,0,0,0,.48,0,3.35,3.35,0,0,0,3.34-3.34,3.19,3.19,0,0,0-.08-.7,4.29,4.29,0,0,0,.84-7.76,3.24,3.24,0,0,0,.19-1.09,3.34,3.34,0,0,0-2.86-3.3v0a2.87,2.87,0,0,0-5.73,0Z"
        />
        <path className="cls-1" d="M17.25,11.05a3.35,3.35,0,0,0,0-6.69" />
        <path className="cls-1" d="M15.82,13.91h0A3.82,3.82,0,0,0,12,17.73h0" />
        <path className="cls-1" d="M14.86,7.23h0A2.86,2.86,0,0,1,12,4.36h0" />
      </g>
    </svg>
  );
};

export default MindIcon;
