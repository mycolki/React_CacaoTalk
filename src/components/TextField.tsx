import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import COLORS from 'style/palette';

type Color = keyof typeof COLORS;

interface TextProps {
  color: Color;
  className?: string;
}

export function Text({ color, className, children }: PropsWithChildren<TextProps>) {
  return (
    <BasicText className={className} color={color}>
      {children}
    </BasicText>
  );
}

export const BasicText = styled.span<{ color: Color }>`
  font-family: AppleSDGothicNeo;
  font-size: 1rem;
  letter-spacing: -0.2px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  color: ${({ color }) => COLORS[color]};
`;

export const StyledText1 = styled(Text)`
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: -0.1px;
`;

export const StyledText2 = styled(Text)`
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: -0.1px;
`;

export const StyledText3 = styled(Text)`
  font-size: 1.063rem;
  font-weight: bold;
  letter-spacing: -0.12px;
`;

export const StyledText4 = styled(Text)`
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: -0.2px;
`;
