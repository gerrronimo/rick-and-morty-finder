import './style.sass';

import { FC, useEffect } from 'react';

import { getAllCharacters, getSearchParams, loadCharacters } from '../../modules/characters/charactersSlice';
import { CharacterType } from '../../modules/characters/types';
import { useAppDispatch, useAppSelector } from '../../modules/hooks';
import { Character } from '../Character';
import { Pagination } from '../Pagination';

export const CharactersList: FC = () => {
  const characters = useAppSelector(getAllCharacters);
  const searchParams = useAppSelector(getSearchParams);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadCharacters(searchParams));
  }, [dispatch, searchParams]);

  return (
    <>
      <div className="characters-list-container">
        <div className="characters-list">
          {characters.map((character: CharacterType) => (
            <Character key={character.id} character={character} />
          ))}
        </div>
      </div>

      <Pagination />
    </>
  );
};
