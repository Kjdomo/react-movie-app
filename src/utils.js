const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&`;

/**
 * Query API for Movies that match the search term.
 * @param {string} searchTerm Search term to find movies that match it.
 * @return {Promise} Returns a Promise that contains a List of movies that match search term.
 */
export const getMoviesBySearchTerm = async (searchTerm) => {
    try {
        const response = await fetch(`${API_URL}s=${searchTerm}`);
        const data = await response.json();
        if (data.Response === 'True') {
            return data.Search;
        }
    } catch (error) {
        console.error(error);
    }
    return [];
};

/**
 * Query API for Movies that match the search term.
 * @param {string} id Search term to find movies that match it.
 * @return {Promise} Returns a Promise that contains a Movie that matches id, otherwise null.
 */
export const getMovieDetailsById = async (id) => {
    try {
        const response = await fetch(`${API_URL}i=${id}`);
        const data = await response.json();
        if (data.Response === 'True') {
            return data
        }
    } catch (error) {
        console.error(error);
    }
    return null;
}