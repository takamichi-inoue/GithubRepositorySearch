import { maxLimit } from '@/config/constants';
import type { QuerySettingsProps } from '@/features/git-repo-list';
import { memo, useCallback, type Dispatch } from 'react';
import { CustomButton } from '../button';

export const Paging = memo(
  ({
    settings,
    setter,
    totalCount,
  }: {
    settings: QuerySettingsProps;
    setter: Dispatch<React.SetStateAction<QuerySettingsProps>>;
    totalCount: number;
  }) => {
    const { page, perPage } = settings;
    const pageMax = Math.min(
      Math.ceil(maxLimit / perPage),
      Math.ceil(totalCount / perPage)
    );
    const handleChange = (num: number) => setter({ ...settings, page: num });

    const getPages = useCallback(() => {
      const res: (number | string)[] = [1];
      const delta = 2;
      const noPage = '...';
      const left = Math.max(2, page - delta);
      const right = Math.min(pageMax - 1, page + delta);

      if (left > 2) res.push(noPage);

      for (let i = left; i <= right; i++) {
        res.push(i);
      }

      if (right < pageMax - 1) res.push(noPage);

      if (pageMax > 1) res.push(pageMax);

      return res;
    }, [page, pageMax]);

    return (
      <div className="flex-row gap-0.5 items-center">
        <CustomButton action={() => handleChange(page > 1 ? page - 1 : 1)}>
          prev
        </CustomButton>
        {getPages().map((val, i) => {
          return (
            <p
              key={`paging-p-${i}`}
              className={`${typeof val === 'number' ? 'paging-p' : ''} ${
                page === val ? 'active' : ''
              }`}
              onClick={() => typeof val === 'number' && handleChange(val)}
            >
              {val}
            </p>
          );
        })}
        <CustomButton
          action={() => handleChange(page < pageMax ? page + 1 : pageMax)}
        >
          next
        </CustomButton>
      </div>
    );
  }
);
