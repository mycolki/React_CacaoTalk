import { ReactNode } from 'react';
import styled from '@emotion/styled';
import COLORS from 'style/palette';

function PageLayout({ children }: { children: ReactNode }) {
  return (
    <Background>
      <Layout>{children}</Layout>
    </Background>
  );
}

export default PageLayout;

const Background = styled.div`
  display: flex;
  justify-content: center;
  height: calc(var(--app-height, 100vh));
`;

const Layout = styled.div`
  width: 375px;
  height: 100%;
  border: 1px solid ${COLORS.PALE_LILAC};
`;
