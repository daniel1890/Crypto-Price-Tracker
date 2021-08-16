import CryptoTracker from './components/CryptoTracker/CryptoTracker';
import { QueryClient, QueryClientProvider } from 'react-query';
import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CryptoTracker cryptoName='cardano' />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
