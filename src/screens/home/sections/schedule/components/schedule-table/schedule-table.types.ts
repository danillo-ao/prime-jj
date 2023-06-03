export interface ScheduleHours {
  label?: string;
  category?: 'kids' | 'adult';
}

export interface ScheduleTableProps {
  day?: string;
  hours: ScheduleHours[];
}
