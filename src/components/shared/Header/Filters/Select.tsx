import { FC } from 'react';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  value: string;
  callback: (name: string) => void;
  options: SelectOption[];
}

export const Select: FC<SelectProps> = ({ value, callback, options }) => {
  return (
    <select
      name="gender"
      id="gender-select"
      className="filter-select"
      value={value}
      onChange={(event) => callback(event.target.value)}
    >
      {options.map(({ value, label }) => (
        <option value={value} key={`${label}_${value}`}>
          {label}
        </option>
      ))}
    </select>
  );
};
