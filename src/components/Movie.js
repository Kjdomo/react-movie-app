import { useState, useEffect } from 'react';
import { MovieDetails } from './MovieDetails';
import { MovieList } from './MovieList';
import { Modal } from './Modal';
import { getMovieDetailsById, getMoviesBySearchTerm } from '../utils';


export const Movie = () => {
    const [selectedMovieId, setSelectedMovieId] = useState(null);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        getMoviesBySearchTerm("Batman")
            .then(movies => setMovies(movies));
    }, []);

    useEffect(() => {
        if (selectedMovieId === null) return;
        getMovieDetailsById(selectedMovieId)
            .then(movie => setSelectedMovie(movie));

    }, [setSelectedMovieId]);

    return (
        <div>
            <div>Movie Component</div>
            {selectedMovie &&
                <Modal>
                    <MovieDetails />
                </Modal>
            }
            <MovieList movies={movies} updateSelectedMovie={(movieID) => setSelectedMovieId(movieID)} />
        </div>
    );  
}