export type Root = {
  films: string;
  people: string;
  planets: string;
  species: string;
  starships: string;
  vehicles: string;
};

export enum RootKeys {
   Films = 'films',
   People = 'people',
   Planets = 'planets',
   Species = 'species',
   Starships = 'starships',
   Vehicles = 'vehicles',
}

export type RootType = typeof RootKeys;

export type Payload = Root;

export interface IReducer {
  type?: string;
  payload?: Payload;
  error?: Payload;
  isLoading?: boolean;
}

export type Action = {
  type: string;
  payload?: Payload;
};

export interface Istate {
  roots: {
    payload: Root;
    isLoading: boolean;
    error: Error;
  };
}
