import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchMovieDetails } from "./FetchMovies";
import Loader from "./Loader";
const MovieDetails = ({error, setError, loading, setLoading}) => {
    const { id } = useParams();
    const URL = `https://www.omdbapi.com/?i=${id}&apikey=d405c964`
    const [dets, setDets] = useState([]);

    
    useEffect(() => {
      setLoading(true);
      setTimeout(async () => {
        await FetchMovieDetails(URL, setDets);
        setLoading(false);
      }, 1000);  

    },[])

  return (
      <>
      {loading && <Loader />}
      {!loading &&
      <div className="container mt-5">
          <div className="row">
          <div className="col-md-4">
            <img src={dets.Poster} className="img-fluid" alt={dets.Title} />
          </div>
          <div className="col-md-8">
            <h2>{dets.Title}</h2>
            <ul className="list-group">
              <li className="list-group-item"><strong>Year:</strong> {dets.Year}</li>
              <li className="list-group-item"><strong>Genre:</strong> {dets.Genre}</li>
              <li className="list-group-item"><strong>Director:</strong> {dets.Director}</li>
              <li className="list-group-item"><strong>Actors:</strong> {dets.Actors}</li>
              <li className="list-group-item"><strong>Plot:</strong> {dets.Plot}</li>
              <li className="list-group-item"><strong>Awards:</strong> {dets.Awards}</li>
            </ul>
          </div>
        </div>
      </div> }
      </>
  )
}
export default MovieDetails;