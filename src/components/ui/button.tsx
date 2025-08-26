import type { MouseEvent, ReactNode } from 'react';

export const CustomButton = ({
  children,
  action,
}: {
  children: ReactNode;
  action: (e: MouseEvent<HTMLButtonElement>) => void;
}) => {
  return <button onClick={action}>{children}</button>;
};
