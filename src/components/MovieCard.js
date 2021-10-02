export const MovieCard = ({ posterUrl, title, type, updateSelectedMovie }) => {
    return (
        <div className="movie-card" onClick={updateSelectedMovie}> 
            <img src={posterUrl} alt="Movie Poster" />
            <h2>{title}</h2>
            <button>{type}</button>
        </div>
    );
}