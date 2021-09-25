import logo from './logo.svg';
import './App.css';
import { MovieCard } from './components/MovieCard';
import { useState, useEffect } from 'react';
import { getMoviesBySearchTerm } from './utils';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
      getMoviesBySearchTerm("Batman").then(movieList => {
        setMovies(movieList);
      });
  }, []);

  return (
    <div className="App">
      {movies.map((movie, index) => {
        return <MovieCard key={movie.imdbID} id={movie.imdbID} title={movie.Title} type={movie.Type} posterUrl={movie.Poster} />
      })};

    </div>
  );
}

export default App;
