import { GitRepoListTop } from '@/features/git-repo-list';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '@/App.scss';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GitRepoListTop />
    </QueryClientProvider>
  );
}

export default App;
