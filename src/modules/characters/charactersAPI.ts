import axios from 'axios';
import {SearchParams} from "./types";

const getCharactersUrlParams = (params: SearchParams) => {
  const {page, name, species, type, gender, status} = params;
  let url = '?';

  if (page > 1) {
    url = url + `page=${page}&`;
  }

  if (name !== '') {
    url = url + `name=${name}&`;
  }

  if (species !== '') {
    url = url + `species=${species}&`;
  }

  if (type !== '') {
    url = url + `type=${type}&`;
  }

  if (gender !== '') {
    url = url + `gender=${gender}&`;
  }

  if (status !== '') {
    url = url + `status=${status}&`;
  }

  return url;
}

export function fetchCharacters(params: SearchParams) {
  return axios.get(`https://rickandmortyapi.com/api/character/${getCharactersUrlParams(params)}`);
}
