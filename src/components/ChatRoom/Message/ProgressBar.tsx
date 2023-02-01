import styled from '@emotion/styled';
import { progressBarLoader } from 'style/animation';
import COLORS from 'style/palette';

function ProgressBar() {
  return (
    <Wrapper>
      <Bar>
        <Progress />
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

const Progress = styled.div`
  width: 0;
  padding: 5px;
  background-color: ${COLORS.PURPLE};
  animation-name: ${progressBarLoader};
  animation-duration: 3s;
  animation-timing-function: ease;
`;
