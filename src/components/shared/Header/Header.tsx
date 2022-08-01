import React, {FC, useCallback} from 'react';
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {getSearch, getSearchParams, loadCharacters, setSearch} from "../../../modules/characters/charactersSlice";
import {SearchInput} from "./Search";
import {Filters} from "./Filters";

export const Header: FC = () => {
  const dispatch = useAppDispatch();
  const searchName = useAppSelector(getSearch);
  const searchParams = useAppSelector(getSearchParams);

  const onChangeSearchName = useCallback((name: string): void => {
    dispatch(setSearch(name));
  }, [])

  const submitSearch = useCallback(() => {
    dispatch(loadCharacters(searchParams));
  }, [searchParams])

  return (
    <header>
      <SearchInput
        value={searchName}
        callback={onChangeSearchName}
        submitSearch={submitSearch}
      />

      <Filters />
    </header>
  )
}
