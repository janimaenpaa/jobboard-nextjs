import { format } from 'date-fns';

export const formatDate = (date: number | Date) => {
  return format(new Date(date), 'dd.MM.yyyy');
};
