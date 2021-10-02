import { MovieCard } from "./MovieCard";

export const MovieList = ({ movies, updateSelectedMovie}) => {
    console.log(movies)
    return (
        <div>
            {movies.map(movie => {
                return <MovieCard 
                    updateSelectedMovie={() => updateSelectedMovie(movie.imdbID)}
                    posterUrl={movie.Poster}
                    title={movie.Title}
                    type={movie.Type}
                />
            })}
        </div>
    );
}