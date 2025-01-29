import { useState, useEffect } from "react"

const MovieList = ({ title, year, poster, imidbID, handleDetails }) => {
  const API_URL = `https://www.omdbapi.com/?i=${imidbID}&apikey=d405c964`

  return (
    <>
      <div className="card mb-3" style={{ width: "300px", height: "320px", margin: "10px", display: "inline-block" }}>
        <h3 className="card-header">

          {
            title.length > 12 ? `${title.substring(0, 12)}...` : title
          }</h3>
        <div className="card-body">
          <h5 className="card-title">{year}</h5>
        </div>
        <img src={poster} className="d-block user-select-none" width="100%" height="199" style={{ borderBottomLeftRadius: "7px", borderBottomRightRadius: "7px" }} />

      </div>

    </>
  )
}
export default MovieList
