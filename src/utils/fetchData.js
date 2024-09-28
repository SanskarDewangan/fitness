export const exerciseOptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f2c0a461b2msha17405a0b3fa0f8p1eafa0jsne3e6669ea142',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};

export const youtubeOptions = {
  method: 'GET',
	headers: {
		'x-rapidapi-key': 'f2c0a461b2msha17405a0b3fa0f8p1eafa0jsne3e6669ea142',
		'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
	}
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
