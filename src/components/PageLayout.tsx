import { ReactNode } from 'react';
import styled from '@emotion/styled';

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
  min-width: 375px;
  height: 100%;
  background-color: #5b36ac;
`;
