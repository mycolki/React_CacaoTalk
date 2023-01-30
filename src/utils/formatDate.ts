import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import isBetween from 'dayjs/plugin/isBetween';
import 'dayjs/locale/ko';

dayjs.extend(isBetween);
dayjs.extend(utc);
dayjs.locale('ko');

type FormatType = 'HH:mm' | 'YYYY년 MM월 DD일' | 'MM월 DD일' | 'dddd' | 'YYYY.MM.DD';

export function formatDate(date: string, formatType?: FormatType) {
  return dayjs(date).format(formatType);
}

export function formatDateToUTC() {
  return dayjs.utc().format();
}

export function formatLastMessageDate(date: string) {
  const today = dayjs();
  const yesterday = dayjs().subtract(1, 'day');
  const dateBefore7Days = dayjs().subtract(7, 'day');

  if (dayjs(date).isSame(today, 'd')) {
    return formatDate(date, 'HH:mm');
  }

  if (dayjs(date).isSame(yesterday, 'd')) {
    return '어제';
  }

  if (dayjs(date).isBetween(today, dateBefore7Days)) {
    return formatDate(date, 'dddd');
  }

  if (dayjs(date).isBefore(today, 'year')) {
    return formatDate(date, 'YYYY.MM.DD');
  }

  if (dayjs(date).isBefore(dateBefore7Days)) {
    return formatDate(date, 'MM월 DD일');
  }

  throw new Error('data 가 올바르지 않습니다.');
}
