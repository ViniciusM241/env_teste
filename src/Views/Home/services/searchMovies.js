import client from "~/boot/client";

export default async function searchMovies(search) {
  const res = await client.get(`/movies${search ? `?_sort=${search.sort}&_order=${search.order}` : ''}`);

  return res.data;
}
