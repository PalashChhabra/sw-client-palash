import IonIcon from '@reacticons/ionicons';
import React from 'react';

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
