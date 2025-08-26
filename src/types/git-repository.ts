export type GitRepositoryItemProps = {
  id: string;
  full_name: string;
  html_url: string;
  owner: { avatar_url: string };
  description: string;
  language: string;
  stargazers_count: number;
  created_at: string;
  updated_at: string;
  pushed_at: string;
};

export type GitRepositoryDataProps = {
  incomplete_results: boolean;
  items: GitRepositoryItemProps[];
  total_count: number;
};

export type SortTypes =
  | ''
  | 'stars'
  | 'forks'
  | 'help-wanted-issues'
  | 'updated';
export const orders = ['asc', 'desc'] as const;
export type OrderTypes = (typeof orders)[number];
export type FetchGitRepositoriesProps = {
  query: string;
  page: number;
  perPage: number;
  sort: SortTypes;
};
