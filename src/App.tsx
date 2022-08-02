import React, {useEffect} from 'react';
import {CharactersList, CharacterInfo, Header} from "./components";
import {useAppSelector} from "./modules/hooks";
import {empty, getCharacter, showCharacterInfo} from "./modules/characters/charactersSlice";

import './App.css';
import {NotFounded} from "./components/shared/NotFounded/NotFounded";

function App() {
  const isShowCharacterInfo = useAppSelector(showCharacterInfo);
  const character = useAppSelector(getCharacter);
  const isEmpty = useAppSelector(empty);

  useEffect(() => {
    document.body.style.overflow = isShowCharacterInfo ? 'hidden' : 'auto'
  }, [isShowCharacterInfo])

  return (
    <div className={`App ${isShowCharacterInfo && 'hide-scroll'}`}>
      <Header />

      {isEmpty && <NotFounded />}
      {(isShowCharacterInfo && character) && <CharacterInfo character={character} />}
      {!isEmpty && <CharactersList />}
    </div>
  );
}

export default App;
