import './style.sass';

import { motion, useAnimation } from 'framer-motion';
import React, { FC, useCallback } from 'react';

import { setCharacter } from '../../modules/characters/charactersSlice';
import { CharacterType } from '../../modules/characters/types';
import { useAppDispatch } from '../../modules/hooks';

export interface CharacterProps {
  character: CharacterType;
}

export const Character: FC<CharacterProps> = ({ character }) => {
  const dispatch = useAppDispatch();
  const imgAnimation = useAnimation();

  const handleMouseMove = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const { clientX, clientY } = e;

    const moveX = clientX - window.innerWidth / 2;
    const moveY = clientY - window.innerHeight / 2;
    const offsetFactor = 150;

    await imgAnimation.start({
      x: moveX / offsetFactor,
      y: moveY / offsetFactor,
    });
  };

  const handleOpenInfo = useCallback(() => {
    dispatch(setCharacter(character));
  }, [dispatch, character]);

  return (
    <div className="character-container" onClick={handleOpenInfo}>
      <div
        className="character-image-container"
        onMouseMove={(e) => handleMouseMove(e)}
      >
        <motion.img
          className="character-image"
          animate={imgAnimation}
          src={character.image}
          alt={character.name}
        />
      </div>

      <div className="character-info">
        <p>{character.name}</p>
      </div>
    </div>
  );
};
