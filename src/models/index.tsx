import IonIcon from '@reacticons/ionicons';
import React from 'react';
import { FETCH_ROOTS, FETCH_ROOTS_FAILURE, FETCH_ROOTS_SUCCESS } from '../constants';

export type Root = {
  films: string;
  people: string;
  planets: string;
  species: string;
  starships: string;
  vehicles: string;
};

export interface RootIconSet {
	icon : React.ComponentProps<typeof IonIcon>['name'];
	color?: string;
}

export interface TableKeysSet {
	keys: string[];
	otherInfoKey: string;
}

export type ResourceResult = {
	name: string;
	title: string;
	url: string;
	[x: string]: string | string[];
};

export type Resource = {
	count?: number;
	next?: string;
	previous?: string;
	results: ResourceResult[];
};

export type Payload = Root | ResourceResult[] | ResourceResult | Error;

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
  resource: {
    payload: ResourceResult[];
    isLoading: boolean;
    error: Error;
  };
  resourceDetail: {
	payload: ResourceResult;
    isLoading: boolean;
    error: Error;
  }
}
export interface FetchRootsRequest {
  type: typeof FETCH_ROOTS;
}

export type FetchRootsSuccess = {
  type: typeof FETCH_ROOTS_SUCCESS;
  payload: Root;
};

export type FetchRootsFailure = {
  type: typeof FETCH_ROOTS_FAILURE;
  payload: Error;
};
