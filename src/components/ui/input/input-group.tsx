import type { ChangeEvent, ReactNode } from 'react';

export const InputGroup = ({
  inputName,
  onChangeValue,
  value,
  inputBefore,
  inputAfter,
}: {
  inputName: string;
  onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  inputBefore?: ReactNode;
  inputAfter?: ReactNode;
}) => {
  return (
    <div className="flex-row flex-1 gap-0.5 items-center input-group-root">
      {inputBefore && inputBefore}
      <input
        type="text"
        name={inputName}
        className="w-full"
        onChange={onChangeValue}
        value={value}
        maxLength={256}
      />
      {inputAfter && inputAfter}
    </div>
  );
};
