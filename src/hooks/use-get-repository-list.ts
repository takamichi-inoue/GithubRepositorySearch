import { fetchGitRepositories } from '@/api/gitHub';
import type {
  GitRepositoryDataProps,
  OrderTypes,
  SortTypes,
} from '@/types/git-repository';
import { useQuery } from '@tanstack/react-query';

export const useGetRepositoryList = (args: {
  query: string;
  page: number;
  perPage: number;
  sort: SortTypes;
  order: OrderTypes;
}) => {
  return useQuery<GitRepositoryDataProps, Error>({
    queryKey: ['git-repos', args],
    queryFn: () => fetchGitRepositories(args),
  });
};
