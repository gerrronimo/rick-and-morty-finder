import React, {useEffect} from 'react';
import {CharactersList, CharacterInfo, Header, Pagination, NotFounded} from "./components";
import {useAppSelector} from "./app/hooks";
import {empty, getCharacter, showCharacterInfo} from "./modules/characters/charactersSlice";

import './App.css';

function App() {
  const isShowCharacterInfo = useAppSelector(showCharacterInfo);
  const character = useAppSelector(getCharacter);
  const isEmpty = useAppSelector(empty);

  useEffect(() => {
    if (isShowCharacterInfo) document.body.style.overflow = "hidden"
  }, [isShowCharacterInfo])

  return (
    <div className="App">
      <Header />

      {!isEmpty ? <CharactersList /> : <NotFounded />}
      {(isShowCharacterInfo && character) && <CharacterInfo character={character} />}

      <Pagination />
    </div>
  );
}

export default App;
