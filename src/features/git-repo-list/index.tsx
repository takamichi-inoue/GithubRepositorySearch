import { useState, type ReactNode } from 'react';

import { useGetRepositoryList } from '@/hooks/use-get-repository-list';

import { InputGroup } from '@/components/ui/input/input-group';
import { CustomSelect } from '@/components/ui/input/select';
import { CustomList } from '@/components/ui/list/list';
import { ListResult } from '@/components/ui/list/list-result';
import { Pagination } from '@/components/ui/pagination/index';
import { Spinner } from '@/components/ui/spinner';
import { perPages, sorts } from '@/config/constants';
import {
  orders,
  type OrderTypes,
  type SortTypes,
} from '@/types/git-repository';
import { Search, X } from 'lucide-react';

export const Field = ({
  label,
  children,
  direction = 'row',
}: {
  label: string;
  children: ReactNode;
  direction?: 'row' | 'col';
}) => {
  return (
    <div
      className={`flex-${direction} gap-0.5 ${
        direction === 'row' ? 'items-center' : ''
      } field-wrapper`}
    >
      <p>{label}</p>
      {children}
    </div>
  );
};

export type QuerySettingsProps = {
  query: string;
  page: number;
  perPage: number;
  sort: SortTypes;
  order: OrderTypes;
};

export const GitRepoListTop = () => {
  const [querySettings, setQuerySettings] = useState<QuerySettingsProps>({
    query: '',
    page: 1,
    perPage: perPages[0],
    sort: sorts[0].value,
    order: 'desc',
  });
  const [searchWord, setSearchWord] = useState('');

  const { data, isLoading } = useGetRepositoryList({
    ...querySettings,
  });

  return (
    <div className="contents-root flex-col">
      {/* header */}
      <div className="flex-col">
        <div className="flex-row items-center justify-center content-header p-0.5">
          {/* header title */}
          <Search />
          <p className="font-size-xl text-center p-0.5">
            GitHub Repository Search
          </p>
        </div>
        {/* search */}
        <div className="search-area p-0.5">
          <Field label="Search Word">
            <InputGroup
              inputName="search-input"
              value={searchWord}
              onChangeValue={(e) => setSearchWord(e.target.value)}
              inputBefore={
                <Search
                  size={16}
                  onClick={() => {
                    setQuerySettings({
                      ...querySettings,
                      page: 1,
                      query: searchWord,
                    });
                  }}
                  className="icon-button"
                  cursor={'pointer'}
                />
              }
              inputAfter={
                <X
                  size={16}
                  onClick={() => {
                    setQuerySettings({
                      ...querySettings,
                      page: 1,
                      query: '',
                    });
                  }}
                  className="icon-button"
                  cursor={'pointer'}
                />
              }
            />
          </Field>
        </div>
      </div>

      {isLoading ? (
        <div className="flex-row flex-1 justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="flex-col flex-1 p-0.5 overflow-hidden">
          {/* list */}
          <div className="flex-col flex-1 gap-0.5 overflow-hidden">
            <div className="flex-row gap-0.5 items-center">
              {/* results */}
              <ListResult
                totalCount={data?.total_count || 0}
                perPage={querySettings.perPage}
                page={querySettings.page}
                itemsLength={data?.items.length || 0}
              />

              {/* sort / order */}
              {data && data.total_count > 0 && (
                <CustomSelect
                  items={sorts.map((obj) => ({
                    label: obj.label,
                    value: obj.value,
                  }))}
                  value={querySettings.sort}
                  action={(e) =>
                    setQuerySettings({
                      ...querySettings,
                      page: 1,
                      sort: e.target.value as SortTypes,
                    })
                  }
                  name="select-sort"
                />
              )}
              {querySettings.sort && (
                <CustomSelect
                  items={orders.map((val) => ({
                    label: val,
                    value: val,
                  }))}
                  value={querySettings.order}
                  action={(e) =>
                    setQuerySettings({
                      ...querySettings,
                      page: 1,
                      order: e.target.value as OrderTypes,
                    })
                  }
                  name="select-order"
                />
              )}
            </div>

            {data && data.total_count > 0 && (
              <>
                <CustomList items={data?.items || []} />
                {/* pagination */}
                <div className="text-end flex-row justify-end">
                  <Pagination
                    settings={querySettings}
                    setter={setQuerySettings}
                    totalCount={data?.total_count || 0}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
