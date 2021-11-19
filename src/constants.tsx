import { RootIconSet } from './models';

export const FETCH_ROOTS = '@@internal/FETCH_ROOTS';
export const FETCH_ROOTS_FAILURE = '@@internal/FETCH_ROOTS_FAILURE';
export const FETCH_ROOTS_SUCCESS = '@@internal/FETCH_ROOTS_SUCCESS';
export const FETCH_RESOURCE = '@@internal/FETCH_RESOURCE';
export const FETCH_RESOURCE_SUCCESS = '@@internal/FETCH_RESOURCE_SUCCESS';
export const FETCH_RESOURCE_FAILURE = '@@internal/FETCH_RESOURCE_FAILURE';

export enum RootKeys {
    Films = 'films',
    People = 'people',
    Planets = 'planets',
    Species = 'species',
    Starships = 'starships',
    Vehicles = 'vehicles',
}

export const RootAttributes : {[key : string] : RootIconSet} = {
	[RootKeys.Films]: {
		color: 'brown',
		icon: 'film',
	},
	[RootKeys.People]: {
		color: 'chocolate',
		icon: 'people',
	},
	[RootKeys.Planets]: {
		color: 'blue',
		icon: 'planet',
	},
	[RootKeys.Species]: {
		color: 'green',
		icon: 'skull',
	},
	[RootKeys.Starships]: {
		color: 'purple',
		icon: 'rocket',
	},
	[RootKeys.Vehicles]: {
		color: 'magenta',
		icon: 'car',
	},
};
