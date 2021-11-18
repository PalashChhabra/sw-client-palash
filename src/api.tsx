import { Root } from './models';
//  Next Step : Move URLs to environment file
const clientURL: string = 'https://swapi.dev/api/';

// gets all the Star Wars Root elements
export const getRoots = async (): Promise<Root> => {
	const response = await fetch(clientURL);

	return await response.json();
};
