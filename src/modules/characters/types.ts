export type CharacterType = {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: OriginType
  location: LocationType
  image: string,
  episode: string[],
  url: string,
  created: string,
}

export interface LocationType {
  name: string,
  url: string,
}

export interface OriginType {
  name: string,
  url: string,
}

export interface CharactersStore {
  loading: boolean,
  characters: CharacterType[],
  character: CharacterType | null,
  empty: boolean,

  searchParams: SearchParams,
}

export interface SearchParams {
  name: string,
  page: number,
  species: string,
  type: string,
  gender: string,
  status: string,
}
