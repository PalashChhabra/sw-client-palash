import { RootIconSet, TableKeysSet } from './models';

export const FETCH_ROOTS = '@@internal/FETCH_ROOTS';
export const FETCH_ROOTS_FAILURE = '@@internal/FETCH_ROOTS_FAILURE';
export const FETCH_ROOTS_SUCCESS = '@@internal/FETCH_ROOTS_SUCCESS';
export const FETCH_RESOURCE = '@@internal/FETCH_RESOURCE';
export const FETCH_RESOURCE_SUCCESS = '@@internal/FETCH_RESOURCE_SUCCESS';
export const FETCH_RESOURCE_FAILURE = '@@internal/FETCH_RESOURCE_FAILURE';
export const FETCH_RESOURCE_DETAIL = '@@internal/FETCH_RESOURCE_DETAIL';
export const FETCH_RESOURCE_DETAIL_SUCCESS = '@@internal/FETCH_RESOURCE_DETAIL_SUCCESS';
export const FETCH_RESOURCE_DETAIL_FAILURE = '@@internal/FETCH_RESOURCE_DETAIL_FAILURE';

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

export const ResourceAttributes : {[key : string] : TableKeysSet} = {
	[RootKeys.Films]: {
		keys: ['title', 'episode_id', 'director', 'producer', 'release_date'],
		otherInfoKey: 'characters',
	},
	[RootKeys.People]: {
		keys: ['height', 'mass', 'gender', 'birth_year', 'hair_color', 'skin_color'],
		otherInfoKey: 'films',
	},
	[RootKeys.Planets]: {
		keys: ['climate', 'diameter', 'terrain', 'population', 'rotation_period', 'orbital_period'],
		otherInfoKey: 'residents',
	},
	[RootKeys.Species]: {
		keys: ['classification', 'language', 'average_lifespan', 'average_height', 'designation', 'skin_colors'],
		otherInfoKey: 'people',
	},
	[RootKeys.Starships]: {
		keys: ['model', 'manufacturer', 'cost_in_credits', 'passengers', 'cargo_capacity', 'crew'],
		otherInfoKey: 'films',
	},
	[RootKeys.Vehicles]: {
		keys: ['model', 'manufacturer', 'cost_in_credits', 'length', 'cargo_capacity', 'vehicle_class'],
		otherInfoKey: 'films',
	},
};
