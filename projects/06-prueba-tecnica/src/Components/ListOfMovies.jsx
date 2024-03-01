
export function ListOfMovies ({ movies, query }) {
    function findMovies(movies, query) {
        return movies.find((movie) => {
            return movie.Title === query.query            
        })
    }

    let movie = findMovies(movies, query);

    if (movie){
        return (
            <li key={movie.imdbID}>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={movie.Title} />
            </li>
        )
    }

    return null

}