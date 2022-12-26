import { get } from '~/backend';

export default function searchMovies(search) {
  const res = get(search);

  return res;
}
