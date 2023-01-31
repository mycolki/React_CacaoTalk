import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import isBetween from 'dayjs/plugin/isBetween';
import 'dayjs/locale/ko';

dayjs.extend(isBetween);
dayjs.extend(utc);
dayjs.locale('ko');

type FormatType = 'HH:mm' | 'YYYY년 M월 DD일' | 'M월 DD일' | 'dddd' | 'YYYY.MM.DD';

export function formatDate(date: string, formatType?: FormatType) {
  return dayjs(date).format(formatType);
}

export function formatDateToUTC(date?: string) {
  return dayjs(date).utc().format();
}

export function formatLastMessageDate(date: string) {
  const today = dayjs();
  const yesterday = dayjs().subtract(1, 'day');
  const dateBefore7Days = dayjs().subtract(7, 'day');

  if (dayjs(date).isSame(today, 'day')) {
    return formatDate(date, 'HH:mm');
  }

  if (dayjs(date).isSame(yesterday, 'day')) {
    return '어제';
  }

  if (dayjs(date).isBetween(today, dateBefore7Days)) {
    return formatDate(date, 'dddd');
  }

  if (dayjs(date).isBefore(today, 'year')) {
    return formatDate(date, 'YYYY.MM.DD');
  }

  if (dayjs(date).isBefore(dateBefore7Days)) {
    return formatDate(date, 'M월 DD일');
  }

  throw new Error('data 가 올바르지 않습니다.');
}

export function isStartOfDay(target: string, compared?: string) {
  return dayjs(target).diff(compared, 'day') >= 1;
}
