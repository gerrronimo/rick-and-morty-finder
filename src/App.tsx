import React, {useEffect} from 'react';
import {CharactersList, CharacterInfo, Header} from "./components";
import {useAppSelector} from "./app/hooks";
import {getCharacter, showCharacterInfo} from "./modules/characters/charactersSlice";

import './App.css';

function App() {
  const isShowCharacterInfo = useAppSelector(showCharacterInfo);
  const character = useAppSelector(getCharacter);

  useEffect(() => {
    if (isShowCharacterInfo) {
      document.body.style.overflow = "hidden"
    }
  }, [isShowCharacterInfo])

  return (
    // <div className="App"={}>
    <div className={`App ${isShowCharacterInfo && 'hide-scroll'}`}>
      {(isShowCharacterInfo && character) && <CharacterInfo character={character} />}
      <Header />
      <CharactersList />
    </div>
  );
}

export default App;
