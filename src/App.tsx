import { QueryClientProvider } from 'react-query';
import queryClient from 'query';
import Routes from 'pages/Routes';
import PageLayout from 'pages/PageLayout';
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
