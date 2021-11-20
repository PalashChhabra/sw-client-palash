/* eslint-disable camelcase */
import { transformText } from '../utils/transformText';

const resourceData = [
	{
		originalKey: 'orbital_period',
		expectedKey: 'Orbital period',
	},
	{
		originalKey: 'surface_water',
		expectedKey: 'Surface water',
	},
	{
		originalKey: 'rotation_period',
		expectedKey: 'Rotation period',
	},
];

describe('should tranform data Keys and replace underscores', () => {
	for (const { originalKey, expectedKey } of resourceData) {
		it(`expect (${originalKey} to match ${expectedKey}`, () => {
			const output = transformText(originalKey);

			expect(output).toEqual(expectedKey);
			expect(output).toMatchSnapshot();
		});
	}
});
