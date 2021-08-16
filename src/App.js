import CryptoTracker from "./components/CryptoTracker";
import { QueryClient, QueryClientProvider } from "react-query";
import React from "react";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CryptoTracker cryptoName="bitcoin" />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
