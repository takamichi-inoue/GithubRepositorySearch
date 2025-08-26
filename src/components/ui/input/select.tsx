import type { ChangeEvent } from 'react';

export const CustomSelect = ({
  items,
  action,
  name = '',
  value,
  disabled = false,
}: {
  items: { label: string; value: string | number }[];
  action: (e: ChangeEvent<HTMLSelectElement>) => void;
  name: string;
  value: string | number;
  disabled?: boolean;
}) => {
  return (
    <select
      className="select-root"
      name={name}
      onChange={action}
      value={value}
      disabled={disabled}
    >
      {items.map((item) => (
        <option key={`select-option-${item.value}`} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};
