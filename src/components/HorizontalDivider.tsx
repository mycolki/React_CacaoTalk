import styled from '@emotion/styled';
import COLORS from 'style/palette';
import Text from './Text';

function HorizontalDivider({ text }: { text: string }) {
  return (
    <Container>
      <Divider />
      <Text
        color="CHARCOAL_GREY2"
        style={{ margin: '0 10px', fontSize: '0.75rem', fontWeight: '500', letterSpacing: 'normal', opacity: '0.4' }}
      >
        {text}
      </Text>
      <Divider />
    </Container>
  );
}

export default HorizontalDivider;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Divider = styled.div`
  width: 120px;
  height: 1px;
  background-color: ${COLORS.PALE_LILAC};
`;
