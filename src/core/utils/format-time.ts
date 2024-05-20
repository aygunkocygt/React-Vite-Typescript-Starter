import { format, getTime, formatDistanceToNow } from 'date-fns';

export function fDate(date: Date | number | string, newFormat?: string): string {
  const fm = newFormat || 'dd MMM yyyy';

  return date ? format(new Date(date), fm) : '';
}

export function fTime(date: Date | number | string, newFormat?: string): string {
  const fm = newFormat || 'p';

  return date ? format(new Date(date), fm) : '';
}

export function fDateTime(date: Date | number | string, newFormat?: string): string {
  const fm = newFormat || 'dd MMM yyyy p';

  return date ? format(new Date(date), fm) : '';
}

export function fTimestamp(date: Date | number | string): number | string {
  return date ? getTime(new Date(date)) : '';
}

export function fToNow(date: Date | number | string): string {
  return date
    ? formatDistanceToNow(new Date(date), {
        addSuffix: true,
      })
    : '';
}

export function isBetween(inputDate: Date | number | string, startDate: Date | number | string, endDate: Date | number | string): boolean {
  const date = new Date(inputDate);

  const results =
    new Date(date.toDateString()) >= new Date(startDate.toString()) &&
    new Date(date.toDateString()) <= new Date(endDate.toString());

  return results;
}

export function isAfter(startDate: Date | number | string, endDate: Date | number | string): boolean {
  const results =
    startDate && endDate ? new Date(startDate).getTime() > new Date(endDate).getTime() : false;

  return results;
}
