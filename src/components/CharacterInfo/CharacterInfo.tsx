import React, {FC, useCallback} from 'react';
import {useAppDispatch} from "../../app/hooks";
import {setCharacter} from "../../modules/characters/charactersSlice";
import {CharacterType} from "../../modules/characters/types";

import './style.css';

export interface CharacterInfoProps {
  character: CharacterType
}

export const CharacterInfo: FC<CharacterInfoProps> = ({character}) => {
  const dispatch = useAppDispatch();

  const handleClose = useCallback(() => dispatch(setCharacter(null)), [])

  return (
    <>
      <div className="character-popup-overlay" onClick={handleClose}/>
      <div className="character-popup">
        <p className="close" onClick={handleClose}>[x]</p>

        <div className="character-popup-content">
          <div>
            <img src={character.image} alt={character.name} className="image"/>
          </div>

          <div>
            <div className="character-info-container">
              <p className="label">Name:</p>
              <h2>{character.name}</h2>
            </div>

            <div className="character-info-container">
              <p className="label">Status:</p>
              <h2>{character.status}</h2>
            </div>

            <div className="character-info-container">
              <p className="label">Species:</p>
              <h2>{character.species}</h2>
            </div>

            <div className="character-info-container">
              <p className="label">Gender:</p>
              <h2>{character.gender}</h2>
            </div>

            <div className="character-info-container">
              <p className="label">Origin:</p>
              <h2>{character.origin.name}</h2>
            </div>

            <div className="character-info-container">
              <p className="label">Location:</p>
              <h2>{character.location.name}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
