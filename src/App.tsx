import { QueryClientProvider } from 'react-query';
import queryClient from 'query';
import Routes from 'pages/Routes';
import PageLayout from 'pages/PageLayout';
import ErrorBoundary from 'ErrorBoundary';
import Global from './Global';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Global />
      <PageLayout>
        <ErrorBoundary>
          <Routes />
        </ErrorBoundary>
      </PageLayout>
    </QueryClientProvider>
  );
}

export default App;
