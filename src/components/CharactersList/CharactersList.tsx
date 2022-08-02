import React, {FC, useEffect} from 'react'
import {getAllCharacters, getSearchParams, loadCharacters} from "../../modules/characters/charactersSlice";
import {useAppDispatch, useAppSelector} from "../../modules/hooks";
import {CharacterType} from "../../modules/characters/types";
import {Character} from '../Character';
import './style.css';

export const CharactersList: FC = () => {
  const characters = useAppSelector(getAllCharacters);
  const searchParams = useAppSelector(getSearchParams);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadCharacters(searchParams));
  }, [dispatch, searchParams])

  return (
    <div className="characters-list">
      {characters.map((character: CharacterType) => (
        <Character
          key={character.id}
          character={character}
        />
      ))}
    </div>
  )
}
