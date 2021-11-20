import axios from 'axios';
import { Resource, ResourceResult, Root } from './models';
//  Next Step : Move URLs to environment file
const clientURL: string = 'https://swapi.dev/api/';

// gets all the Star Wars Root elements
export const getRoots = async () => axios.get<Root>(clientURL);

// gets resources for a particular Type
export const getResource = async (root: string) => axios.get<Resource>(`${clientURL}${root}/`);

// gets resource Details for a provided endpoint
export const getResourceDetail = async (apiUrl: string) => axios.get<ResourceResult>(`${apiUrl}`);
