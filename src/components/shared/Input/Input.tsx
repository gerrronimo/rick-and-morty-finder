import React, {FC, KeyboardEventHandler, useCallback} from 'react';

import './style.css';

export interface SearchInputProps {
  value: string,
  callback: (name: string) => void,
  submit: () => void,
  placeholder?: string,
  Icon?: FC,
}

export const Input: FC<SearchInputProps> = ({value, callback, submit, Icon, placeholder}) => {
  const submitOnEnterKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Enter') submit();
  }, [submit]);

  return (
    <div className="searchContainer">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(event) => callback(event.target.value)}
        onKeyDown={submitOnEnterKey as unknown as KeyboardEventHandler<HTMLInputElement>}
      />

      {Icon && (
        <button className="icon" onClick={submit}>
          {/*@ts-ignore*/}
          <Icon />
        </button>
      )}
    </div>
  )
}
