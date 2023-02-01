import styled from '@emotion/styled';
import { loader } from 'style/animation';
import COLORS from 'style/palette';

function ProgressBar({ time }: { time?: string }) {
  return (
    <Wrapper>
      <Bar>
        <Progress time={time} />
      </Bar>
    </Wrapper>
  );
}

export default ProgressBar;

const Wrapper = styled.div`
  width: 100%;
  height: 6px;
  overflow: hidden;
  border-radius: 6px;
  margin: 6px 0;
`;

const Bar = styled.div`
  background-color: ${COLORS.PALE_LILAC};
`;

const Progress = styled.div<{ time?: string }>`
  width: 0;
  padding: 5px;
  background-color: ${COLORS.PURPLE};
  animation-name: ${loader};
  animation-duration: ${({ time }) => time ?? '3s'};
  animation-timing-function: ease;
`;
