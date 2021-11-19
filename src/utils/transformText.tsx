// to transform text and remove underscore
export const transformText = (str: string): string =>
	(str.length > 1 ? str[0].toUpperCase() + str.slice(1).replace(/_/g, ' ') : str);
