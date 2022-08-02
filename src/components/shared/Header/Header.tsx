import React, {FC, useCallback} from 'react';
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {
  getSearch,
  getSearchParams,
  getSpecies,
  getType,
  loadCharacters,
  setSearch,
  setSpecies,
  setType
} from "../../../modules/characters/charactersSlice";
import {Input} from "../Input";
import {Filters} from "./Filters";
import {SearchLine} from '../../../assets/icons/SeacrhLine';

export const Header: FC = () => {
  const dispatch = useAppDispatch();
  const searchName = useAppSelector(getSearch);
  const searchSpecies = useAppSelector(getSpecies);
  const searchType = useAppSelector(getType);
  const searchParams = useAppSelector(getSearchParams);

  const onChangeSearchName = useCallback((name: string): void => {
    dispatch(setSearch(name));
  }, [dispatch]);

  const onChangeSearchSpecies = useCallback((name: string): void => {
    dispatch(setSpecies(name));
  }, [dispatch]);

  const onChangeSearchType = useCallback((name: string): void => {
    dispatch(setType(name));
  }, [dispatch]);

  const submitSearch = useCallback(() => {
    dispatch(loadCharacters(searchParams));
  }, [searchParams, dispatch])

  return (
    <header>
      <Input
        value={searchName}
        callback={onChangeSearchName}
        submit={submitSearch}
        Icon={SearchLine}
        placeholder="Name"
      />

      <Input
        value={searchSpecies}
        callback={onChangeSearchSpecies}
        submit={submitSearch}
        placeholder="Species"
      />

      <Input
        value={searchType}
        callback={onChangeSearchType}
        submit={submitSearch}
        placeholder="Type"
      />

      <Filters/>
    </header>
  )
}
