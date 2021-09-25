import { useEffect, useState } from 'react';
import { getMovieDetailsById } from '../utils';

export const MovieCard = ({ id }) => {
    const [movieDetails, setMovieDetails] = useState({}); 

    useEffect(() => {
        getMovieDetailsById(id).then(movieData => {
          console.log(movieData);
          setMovieDetails(movieData);
        });
    }, []);


    return (
        <div className="movie-card" style={{"border": "1px solid black"}} > 
            <img src={movieDetails.Poster}></img>
            <h2>{movieDetails.Title}</h2>
            <button>{movieDetails.Type}</button>
        </div>
    );
}