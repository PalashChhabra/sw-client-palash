import { getRoots } from '../api';
import { mocked } from 'ts-jest/utils';

const mockRootResponse = {
	people: 'https://swapi.dev/api/people/',
	planets: 'https://swapi.dev/api/planets/',
	films: 'https://swapi.dev/api/films/',
	species: 'https://swapi.dev/api/species/',
	vehicles: 'https://swapi.dev/api/vehicles/',
	starships: 'https://swapi.dev/api/starships/',
};

describe('get Roots', () => {
	test('getRoots should fetch the roots nodes and api urls', async () => {
		const fakeFetch = jest.fn();

		window.fetch = fakeFetch;
		// provide a mock implementation for the mocked fetch:
		mocked(fakeFetch).mockImplementation((): Promise<any> => Promise.resolve({
			json() {
				return Promise.resolve(mockRootResponse);
			},
		}));

		const roots = await getRoots().then(response => response.data);

		expect(roots).toBeDefined();
		expect(roots.films).toBe(mockRootResponse.films);
		expect(roots.people).toBe(mockRootResponse.people);
		expect(roots.planets).toBe(mockRootResponse.planets);
		expect(roots.species).toBe(mockRootResponse.species);
		expect(roots.starships).toBe(mockRootResponse.starships);
	});
});
