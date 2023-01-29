import { PageLayout } from 'components';
import Routes from 'pages/Routes';
import Global from './Global';

function App() {
  return (
    <>
      <Global />
      <PageLayout>
        <Routes />
      </PageLayout>
    </>
  );
}

export default App;
