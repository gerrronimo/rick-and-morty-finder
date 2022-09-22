import './App.sass';

import { useEffect } from 'react';

import { CharacterInfo, CharactersList, Header, NotFounded } from './components';
import { empty, getCharacter, showCharacterInfo } from './modules/characters/charactersSlice';
import { useAppSelector } from './modules/hooks';

function App() {
  const isShowCharacterInfo = useAppSelector(showCharacterInfo);
  const character = useAppSelector(getCharacter);
  const isEmpty = useAppSelector(empty);

  useEffect(() => {
    document.body.style.overflow = isShowCharacterInfo ? "hidden" : "auto";
  }, [isShowCharacterInfo]);

  return (
    <div className="App">
      <Header />

      {!isEmpty ? <CharactersList /> : <NotFounded />}
      {isShowCharacterInfo && character && (
        <CharacterInfo character={character} />
      )}
    </div>
  );
}

export default App;
