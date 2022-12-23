import React, { useEffect, useState, useCallback } from 'react';
import searchMovies from './services/searchMovies';

import { Container } from './styles';
import Header from './components/Header';
import Content from './components/Content';

function Home() {
  const INITIAL_SEARCH = {
    sort: 'year',
    order: 'desc',
  };

  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState(INITIAL_SEARCH);

  const _searchMovies = useCallback(async () => {
    const movies = await searchMovies(search);

    setMovies(movies);
  }, [search]);

  useEffect(() => {
    _searchMovies()
  }, [_searchMovies]);

  return (
    <Container>
      <Header setSearch={setSearch} search={search} />
      <Content movies={movies} className="mt-15" />
    </Container>
  );
}

export default Home;
