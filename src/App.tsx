import { PageLayout } from 'components';
import { QueryClientProvider } from 'react-query';
import queryClient from 'query';
import Routes from 'pages/Routes';
import Global from './Global';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Global />
      <PageLayout>
        <Routes />
      </PageLayout>
    </QueryClientProvider>
  );
}

export default App;
