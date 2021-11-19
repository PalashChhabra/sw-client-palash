import { Resource, Root } from './models';
//  Next Step : Move URLs to environment file
const clientURL: string = 'https://swapi.dev/api/';

// gets all the Star Wars Root elements
export const getRoots = async (): Promise<Root> => {
	const response = await fetch(clientURL);

	return await response.json();
};

// gets resources for a particular Type
export const getResource = async (root: string): Promise<Resource> => {
	const res = await fetch(`${clientURL}${root}/`);
	const resp = await res.json();

	return resp.results;
};
