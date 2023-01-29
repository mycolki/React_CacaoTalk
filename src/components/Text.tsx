import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { HTMLAttributes } from 'react';

import { COLORS } from 'style/palette';

const textStyle1 = css`
  font-size: 1.063rem;
  font-weight: bold;
  letter-spacing: -0.12px;
`;
const textStyle2 = css`
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: -0.1px;
`;
const textStyle3 = css`
  font-size: 1.063rem;
  font-weight: bold;
  letter-spacing: -0.12px;
`;
const textStyle4 = css`
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: -0.2px;
`;

const textStyles = { textStyle1, textStyle2, textStyle4, textStyle3 };

type TextStyle = keyof typeof textStyles;

interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  textStyle?: TextStyle;
  color?: keyof typeof COLORS;
}

function Text({ children, textStyle, color = 'BLACK', ...rest }: TextProps) {
  return (
    <StyledText textStyle={textStyle ? textStyles[textStyle] : undefined} color={COLORS[color]} {...rest}>
      {children}
    </StyledText>
  );
}

export default Text;

const StyledText = styled.span<{ textStyle?: SerializedStyles; color: string }>`
  font-size: 1rem;
  letter-spacing: -0.2px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  ${({ textStyle }) => textStyle};
  color: ${({ color }) => color};
`;
