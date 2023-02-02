import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import isBetween from 'dayjs/plugin/isBetween';
import 'dayjs/locale/ko';

dayjs.extend(isBetween);
dayjs.extend(utc);
dayjs.locale('ko');

type FormatType = 'hh:mm' | 'a hh:mm' | 'YYYY년 M월 D일' | 'M월 D일' | 'dddd' | 'YYYY.M.D';

export function formatDate(date: string, formatType?: FormatType) {
  return dayjs(date).format(formatType);
}

export function formatDateToUTC(date?: string) {
  return dayjs(date).utc().format();
}

export function formatLastMessageDate(date: string) {
  const today = dayjs();
  const targetDate = dayjs(date);
  const yesterday = dayjs().subtract(1, 'day');
  const dateBefore7Days = dayjs().subtract(7, 'day');

  if (targetDate.isSame(today, 'day')) {
    return formatDate(date, 'a hh:mm');
  }

  if (targetDate.isSame(yesterday, 'day')) {
    return '어제';
  }

  if (targetDate.isBetween(today, dateBefore7Days)) {
    return formatDate(date, 'dddd');
  }

  if (targetDate.isBefore(today, 'year')) {
    return formatDate(date, 'YYYY.M.D');
  }

  if (targetDate.isBefore(dateBefore7Days)) {
    return formatDate(date, 'M월 D일');
  }

  throw new Error('data 가 올바르지 않습니다.');
}

export function isMoreThan1DayApart(target: string, compared?: string) {
  if (!compared) {
    return false;
  }

  return dayjs(target).diff(compared, 'day') >= 1;
}

export function isSameMinute(target: string, compared?: string) {
  if (!compared) {
    return false;
  }

  return dayjs(target).isSame(compared, 'm');
}
