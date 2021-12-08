import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import MainRouter from "./router/MainRouter";
import "./sass/main.scss";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainRouter />
    </QueryClientProvider>
  );
}

export default App;
