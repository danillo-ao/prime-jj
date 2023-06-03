import React from 'react';
import { ScheduleTableProps } from './schedule-table.types';

import * as Styles from './schedule-table.styles';
import { Clock, XCircle } from 'react-feather';
import { getThemeColor } from '@theme/theme.utils';

const ScheduleTable: React.FC<ScheduleTableProps> = ({ day, hours }) => {
  return (
    <Styles.ScheduleTableContent>
      <Styles.ScheduleTableHeader>{day}</Styles.ScheduleTableHeader>

      <Styles.ScheduleTableBody>
        {hours.map((hour, index) => {
          const disabled = hour.label === '--';
          return (
            <Styles.ScheduleTableHour
              key={`${day}-${hour}-${index}`}
              category={disabled ? 'disabled' : hour.category}
            >
              {disabled ? (
                <>
                  <XCircle size={15} color={getThemeColor('grey700')} />
                </>
              ) : (
                <>
                  <Clock size={15} />
                  {hour.label}
                </>
              )}
            </Styles.ScheduleTableHour>
          );
        })}
      </Styles.ScheduleTableBody>
    </Styles.ScheduleTableContent>
  );
};

export { ScheduleTable };
