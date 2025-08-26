import type { GitRepositoryItemProps } from '@/types/git-repository';
import type { ReactNode } from 'react';

const ContentBlock = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex-row items-center gap-0.5 flex-wrap">{children}</div>
  );
};

export const CustomList = ({ items }: { items: GitRepositoryItemProps[] }) => {
  return (
    <div className="flex-col flex-1 scroll-y">
      {items.map((d) => (
        <div key={d.id} className="list-item flex-col p-1 gap-0.5 m-0.5">
          <a
            target="_blank"
            href={d.html_url}
            className="flex-row items-center gap-0.5 flex-wrap"
          >
            <img className="avatar" src={`${d.owner.avatar_url}`} />
            <p className="font-size-lg">{d.full_name}</p>
          </a>
          <div className="flex-col px-0.5 gap-0.5">
            <ContentBlock>
              <p className="w-full">{d.description}</p>
            </ContentBlock>
            <ContentBlock>
              <p>Language: {d.language || 'none'}</p>
              <p>Star: {d.stargazers_count}</p>
            </ContentBlock>
            <ContentBlock>
              <p className="font-size-xs">CreatedAt: {d.created_at}</p>
              <p className="font-size-xs">UpdatedAt: {d.updated_at}</p>
              <p className="font-size-xs">PushedAt: {d.pushed_at}</p>
            </ContentBlock>
          </div>
        </div>
      ))}
    </div>
  );
};
