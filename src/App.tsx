import { PageLayout } from 'components';
import { QueryClient, QueryClientProvider } from 'react-query';
import Routes from 'pages/Routes';
import Global from './Global';

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <Global />
      <PageLayout>
        <Routes />
      </PageLayout>
    </QueryClientProvider>
  );
}

export default App;
