import React, {FC, KeyboardEventHandler, useCallback} from 'react';
import {SearchLine} from '../../../../assets/icons/SeacrhLine';

import './Search.css';

export interface SearchInputProps {
  value: string,
  callback: (name: string) => void,
  submitSearch: () => void,
}

export const SearchInput: FC<SearchInputProps> = ({value, callback, submitSearch}) => {
  const submitOnEnterKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Enter') submitSearch();
  }, [submitSearch]);

  return (
    <div className="searchContainer">
      <input
        type="text"
        placeholder="Rick Sanchez"
        value={value}
        onChange={(event) => callback(event.target.value)}
        onKeyDown={submitOnEnterKey as unknown as KeyboardEventHandler<HTMLInputElement>}
      />

      <button className="icon" onClick={submitSearch}>
        <SearchLine />
      </button>
    </div>
  )
}
