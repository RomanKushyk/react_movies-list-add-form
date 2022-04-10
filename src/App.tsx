import React, { memo, useContext } from 'react';

import './App.scss';

import { MoviesList } from './components/MoviesList';
import { NewMovie } from './components/NewMovie';
import { MovieContext, MovieProvider } from './components/contexts/MovieContext';

export const App: React.FC = memo(() => {
  const { movies, addMovie } = useContext(MovieContext);

  return (
    <MovieProvider>
      <div className="page">
        <div className="page-content">
          <MoviesList movies={movies} />
        </div>
        <div className="sidebar">
          <NewMovie onAdd={addMovie} />
        </div>
      </div>
    </MovieProvider>
  );
});
