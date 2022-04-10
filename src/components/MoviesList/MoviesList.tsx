/* eslint-disable */
import React, { useContext } from 'react';

import './MoviesList.scss';
import { MovieCard } from '../MovieCard';
import { MovieContext } from '../contexts/MovieContext';

interface Props {
  movies: Movie[];
}

export const MoviesList: React.FC<Props> = () => {
  const { movies } = useContext(MovieContext);

  return (
    <div className="movies">
      {movies.map(movie => (
        <MovieCard key={movie.imdbId} {...movie} />
      ))}
    </div>
  );
};
