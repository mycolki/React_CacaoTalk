import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import 'dayjs/locale/ko';

dayjs.extend(utc).locale('ko');

type FormatType = 'HH:mm' | 'YYYY년 MM월 DD일' | 'MM월 DD일' | 'ddd' | 'YYYY.MM.DD';

export function formatDateToLocale(date: string, formatType?: FormatType) {
  return dayjs(date).format(formatType);
}

export function formatDateToUTC() {
  return dayjs.utc().format();
}
