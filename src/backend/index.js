import data from './db.json';

export const get = (search) => {
  const result = data.movies;

  if (search) {
    result.sort((x, y) => {
      if (x[search.sort] < y[search.sort])
        return search.order === 'asc' ? -1 : 1;

      if (x[search.sort] > y[search.sort])
        return search.order === 'asc' ? 1 : -1;

      return 0;
    });
  }

  return result;
};
