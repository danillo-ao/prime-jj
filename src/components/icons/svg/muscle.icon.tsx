import React from 'react';
import { IconProps } from '@components/icons/icon.types';

const MuscleIcon: React.FC<IconProps> = ({
  color = '#fff',
  width = 30,
  height = 30,
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24">
      <path
        stroke={color}
        fill="none"
        strokeMiterlimit={10}
        strokeWidth={1.91}
        d="M9.14,16.77S8,13.17,10.09,11A14.12,14.12,0,0,1,13,9.13a4.78,4.78,0,1,1,5.61,4.7c-1.83,2.77-5.83,7.71-11.33,7.71C4.36,21.54,1.5,13,1.5,9.13V4.48A2.26,2.26,0,0,1,3.64,2.23c1.73-.09,4,0,4.54,1.17C9,5.11,7.23,8.18,5.32,8.18c0,1.5,1.83,4.76,3.49,6.56"
      />
    </svg>
  );
};

export default MuscleIcon;
