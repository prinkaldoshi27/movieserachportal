import { Link } from "react-router-dom";
import Missing from "./Missing"
import MovieList from "./MovieList";
import Results from "./Results";

const Content = ({ movies, error, searchText }) => {
    return (
        error ? (
            <>
                <Missing error={error} />
            </>
        ) : (
            <div style={{ marginLeft: "70px", marginRight: "70px" }} className="row row-cols-1 row-cols-md-4 g-4  justify-content-left"> 
                {movies.map((movie, index) => (
                    <Link to={`/movie/${movie.imdbID}`}>
                   <MovieList title ={ movie.Title}  
                         year = {movie.Year}
                         poster={movie.Poster}
                         imidbID={movie.imdbID}
                            key={index}
                    />
                    </Link>
                ))}
            </div>
        ) 
    );
};

export default Content;