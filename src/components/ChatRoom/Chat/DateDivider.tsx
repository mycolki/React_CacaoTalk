import styled from '@emotion/styled';
import COLORS from 'style/palette';
import { Text } from 'components/Shared/Texts';

interface DateDividerProps {
  date: string;
}

function DateDivider({ date }: DateDividerProps) {
  return (
    <Divider>
      <Line />
      <Date>{date}</Date>
      <Line />
    </Divider>
  );
}

export default DateDivider;

const Divider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

const Line = styled.div`
  width: 7.5rem;
  height: 1px;
  background-color: ${COLORS.PALE_LILAC};
`;

const Date = styled(Text)`
  margin: 0 10px;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: normal;
  opacity: 0.4;
  white-space: nowrap;
  color: ${COLORS.CHARCOAL_GREY2};
`;
