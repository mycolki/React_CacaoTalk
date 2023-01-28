import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

import { PageLayout } from 'components';
import Routes from 'pages/Routes';

function App() {
  return (
    <>
      <Global
        styles={css`
          ${emotionReset}
        `}
      />
      <PageLayout>
        <Routes />
      </PageLayout>
    </>
  );
}

export default App;
