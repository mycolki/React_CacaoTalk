import { memo, PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import COLORS from 'style/palette';

type Color = keyof typeof COLORS;

interface TextProps {
  color?: Color;
  className?: string;
}

function Text({ color, className, children }: PropsWithChildren<TextProps>) {
  return (
    <Span className={className} color={color ? COLORS[color] : 'inherit'}>
      {children}
    </Span>
  );
}

export default memo(Text);

export const Span = styled.span<{ color: string }>`
  font-family: AppleSDGothicNeo;
  font-size: 1rem;
  letter-spacing: -0.2px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  color: ${({ color }) => color};
`;
