import React, { FC, useState } from 'react';
import moviesFromServer from '../../api/movies.json';
import { Movie } from '../../types/Movie';

interface MovieContextInterface {
  movies: Movie[];
  setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
  addMovie: (movie: Movie) => void;
}

export const MovieContext = React.createContext<MovieContextInterface>({
  movies: moviesFromServer,
  setMovies: () => {},
  addMovie: () => {},
});

export const MovieProvider: FC = ({ children }) => {
  const [movies, setMovies] = useState(moviesFromServer);

  const addMovie = (movie: Movie) => {
    setMovies((current) => ([
      ...current,
      movie,
    ]));
  };

  const contextValue = {
    movies,
    setMovies,
    addMovie,
  };

  return (
    <MovieContext.Provider value={contextValue}>
      {children}
    </MovieContext.Provider>
  );
};
