import axios from 'axios';
import {SearchParams} from "./types";

const getCharactersUrlParams = (params: SearchParams) => {
  const {page, name} = params;
  return `/?page=${page}&name=${name}`
}

export function fetchCharacters(params: SearchParams) {
  return axios.get(`https://rickandmortyapi.com/api/character/${getCharactersUrlParams(params)}`)
}
