const ROOT_FAV_KEY = 'FAV_RESOURCE';

// get Favourite Resources
export const getFavs = (): string[] => {
	const key = ROOT_FAV_KEY;

	let favs = localStorage.getItem(key) || '[]';

	try {
		favs = JSON.parse(favs);
		if (!favs) return [];
	} catch {
		localStorage.removeItem(ROOT_FAV_KEY);
	}

	// @ts-ignore
	return favs;
};

// toggle action of favourite
export const toggleFav = (item: string): void => {
	const favs = getFavs();
	const key = ROOT_FAV_KEY;

	if (favs.includes(item))
		localStorage.setItem(key, JSON.stringify(favs.filter(f => f !== item)));
	else localStorage.setItem(key, JSON.stringify([...favs, item]));
};
