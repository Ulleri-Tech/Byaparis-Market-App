import * as React from "react";
import Search from "../components/Search";
import { QueryClient, QueryClientProvider } from "react-query";

export default function HomePage() {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Search />
    </QueryClientProvider>
  );
}
