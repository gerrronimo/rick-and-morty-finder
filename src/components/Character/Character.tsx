import React, {FC} from 'react';
import {CharacterType} from "../../modules/characters/types";
import './style.css';
import {useAnimation, motion} from "framer-motion";

export interface CharacterProps {
  character: CharacterType,
}

export const Character: FC<CharacterProps> = ({character}) => {
  const imgAnimation = useAnimation()

  const handleMouseMove = async (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    const { clientX, clientY } = e

    const moveX = clientX - window.innerWidth / 20
    const moveY = clientY - window.innerHeight / 20
    const offsetFactor = 75

    await imgAnimation.start({
      x: moveX / offsetFactor,
      y: moveY / offsetFactor
    })
  }

  return (
    <div className="character-container">
      <div className="character-image-container">
        <motion.img
          className="character-image"
          animate={imgAnimation}
          onMouseMove={e => handleMouseMove(e)}
          src={character.image}
          alt={character.name}
        />
      </div>

      <div className="character-info">
        <p>{character.name}</p>
      </div>
    </div>
  )
}
