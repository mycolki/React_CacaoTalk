import styled from '@emotion/styled';
import COLORS from 'style/palette';

import Text from './Text';

function HorizontalDivider({ text }: { text: string }) {
  return (
    <Container>
      <Divider />
      <CenterText color="CHARCOAL_GREY2">{text}</CenterText>
      <Divider />
    </Container>
  );
}

export default HorizontalDivider;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 7px 0;
`;

const Divider = styled.div`
  width: 7.5rem;
  height: 1px;
  background-color: ${COLORS.PALE_LILAC};
`;

const CenterText = styled(Text)`
  margin: 0 10px;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: normal;
  opacity: 0.4;
  white-space: nowrap;
`;
