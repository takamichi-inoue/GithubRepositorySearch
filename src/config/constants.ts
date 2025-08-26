import type { SortTypes } from '@/types/git-repository';

export const perPages = [30, 50, 100];

export const sorts: { label: string; value: SortTypes }[] = [
  { label: 'Best Match', value: '' },
  { label: 'Stars', value: 'stars' },
  { label: 'Forks', value: 'forks' },
  { label: 'Help wanted issues', value: 'help-wanted-issues' },
  { label: 'Updated', value: 'updated' },
];

// git api の取得限度
// perPage は最大 100 件まで
// perPage * page が以下を超えての取得は不可
export const maxLimit = 1000;
