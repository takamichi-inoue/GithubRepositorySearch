import { perPages } from '@/config/constants';
import type { QuerySettingsProps } from '@/features/git-repo-list';
import type { Dispatch } from 'react';
import { CustomSelect } from '../input/select';
import { Paging } from './paging';

export const Pagination = ({
  settings,
  setter,
  totalCount,
}: {
  settings: QuerySettingsProps;
  setter: Dispatch<React.SetStateAction<QuerySettingsProps>>;
  totalCount: number;
}) => {
  return (
    <div className="flex-row gap-0.5 items-center">
      <CustomSelect
        items={perPages.map((val) => ({ label: String(val), value: val }))}
        action={(e) => {
          setter({ ...settings, page: 1, perPage: Number(e.target.value) });
        }}
        value={settings.perPage}
        name="select-per-page"
      />
      <Paging
        settings={settings}
        setter={setter}
        totalCount={totalCount || 0}
      />
    </div>
  );
};
