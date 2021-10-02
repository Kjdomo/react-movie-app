export const MovieDetails = ({ posterUrl, title, rated, runtime, genre, plot, actors, rating}) => {
    return (
        <div>
            <img src={posterUrl} />
            <div>
                <h2>{title}</h2>
                <p>{rated}</p>
            </div>
        </div>
    );
}