import type {
  GitRepositoryDataProps,
  OrderTypes,
  SortTypes,
} from '@/types/git-repository';
import axios from 'axios';

export const fetchGitRepositories = async (args: {
  query: string;
  page: number;
  perPage: number;
  sort: SortTypes;
  order: OrderTypes;
}): Promise<GitRepositoryDataProps> => {
  try {
    if (args.query) {
      const response = await axios.get(
        'https://api.github.com/search/repositories',
        {
          params: {
            q: args.query,
            page: args.page,
            per_page: args.perPage,
            sort: args.sort,
            order: args.order,
          },
        }
      );
      return response.data;
    }
  } catch {
    // nop
  }
  return { incomplete_results: false, items: [], total_count: 0 };
};
