import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {fetchCharacters} from "./charactersAPI";
import {CharacterType, CharactersStore, SearchParams} from './types';
import {initialState} from './initialState';

export const loadCharacters = createAsyncThunk(
  'characters/loadCharacters',
  async (params: SearchParams) => {
    const res = await fetchCharacters(params);
    return res.data;
  }
);

export const characterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacter: (state: CharactersStore, action: PayloadAction<CharacterType | null>) => {
      state.character = action.payload;
    },
    setSearch: (state: CharactersStore, action: PayloadAction<string>) => {
      state.searchParams.name = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadCharacters.fulfilled, (state, action) => {
      state.characters = action.payload.results
    })
  }
})

export const {setCharacter, setSearch} = characterSlice.actions;

export const getAllCharacters = (state: RootState) => state.characters.characters;

export const getSearchParams = (state: RootState) => state.characters.searchParams;
export const getSearch = (state: RootState) => state.characters.searchParams.name;
export const getPage = (state: RootState) => state.characters.searchParams.page;
export const getCharacter = (state: RootState) => state.characters.character;
export const showCharacterInfo = (state: RootState) => !!state.characters.character

export default characterSlice.reducer;
