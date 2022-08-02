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
    setPage: (state: CharactersStore, action: PayloadAction<number>) => {
      console.log(action.payload)
      state.searchParams.page = action.payload;
    },
    setSearch: (state: CharactersStore, action: PayloadAction<string>) => {
      state.searchParams.name = action.payload;
    },
    setSpecies: (state: CharactersStore, action: PayloadAction<string>) => {
      state.searchParams.species = action.payload;
    },
    setType: (state: CharactersStore, action: PayloadAction<string>) => {
      state.searchParams.type = action.payload;
    },
    setGender: (state: CharactersStore, action: PayloadAction<string>) => {
      state.searchParams.gender = action.payload;
    },
    setStatus: (state: CharactersStore, action: PayloadAction<string>) => {
      state.searchParams.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCharacters.fulfilled, (state, action) => {
        state.empty = false;
        state.searchParams.lastPage = action.payload.info.pages
        state.characters = action.payload.results
      })
      .addCase(loadCharacters.rejected, (state, action) => {
        state.empty = true;
      })
  }
})

export const {setCharacter, setSearch, setType, setSpecies, setGender, setStatus, setPage} = characterSlice.actions;

export const getAllCharacters = (state: RootState) => state.characters.characters;
export const getCharacter = (state: RootState) => state.characters.character;

export const getSearchParams = (state: RootState) => state.characters.searchParams;
export const getSearch = (state: RootState) => state.characters.searchParams.name;
export const getSpecies = (state: RootState) => state.characters.searchParams.species;
export const getType = (state: RootState) => state.characters.searchParams.type;
export const getGender = (state: RootState) => state.characters.searchParams.gender;
export const getStatus = (state: RootState) => state.characters.searchParams.status;

export const getPage = (state: RootState) => state.characters.searchParams.page;
export const getLastPage = (state: RootState) => state.characters.searchParams.lastPage;

export const showCharacterInfo = (state: RootState) => !!state.characters.character
export const empty = (state: RootState) => state.characters.empty

export default characterSlice.reducer;
