import { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

import { slideLeftTalk, slideRightTalk } from 'style/animation';
import { Text } from './TextField';

type Align = 'left' | 'right';

interface TalkLayoutProps {
  align: 'left' | 'right';
  time?: string;
  className?: string;
}

function TalkLayout({ align, time, className, children }: PropsWithChildren<TalkLayoutProps>) {
  return (
    <Row align={align} className={className}>
      {children}
      <TimeText color="CHARCOAL_GREY2">{time ?? ''}</TimeText>
    </Row>
  );
}

export default TalkLayout;

const Row = styled.div<{ align: Align }>`
  position: relative;
  right: ${({ align }) => (align === 'right' ? '-20px' : '-80px')};
  display: flex;
  flex-direction: ${({ align }) => (align === 'right' ? 'row-reverse' : 'row')};
  align-items: flex-end;
  min-height: 2.5625rem;
  margin-bottom: 10px;
  gap: 4px;
  animation-name: ${({ align }) => (align === 'right' ? slideRightTalk : slideLeftTalk)};
  animation-duration: ${({ align }) => (align === 'right' ? '400ms' : '300ms')};
  animation-timing-function: ease-out;
  animation-iteration-count: 1;
  animation-fill-mode: both;
`;

const TimeText = styled(Text)`
  opacity: 0.4;
  font-size: 0.75rem;
`;
