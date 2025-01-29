import { useEffect, useState } from "react";
import Content from "./Content";
import Navbar from "./Navbar";
import Search from "./Search";
import { BrowserRouter as Switch, Route, Routes, useParams } from 'react-router-dom';
import MovieDetails from "./MovieDetails";
import { FetchMovies } from "./FetchMovies";
import Results from "./Results";
import Loader from "./Loader";

function App() {

  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("invincible");
  const [searchResults, setSearchResults] = useState([]);

  const API_URL = `https://www.omdbapi.com/?s=${search}&apikey=d405c964&type=movie`;

  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!search) return;

  }, [searchText])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(async () => {
      await FetchMovies(API_URL, setSearchResults, setError);
      setLoading(false);
    }, 1000)
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Search search={search} setSearch={setSearch} handleSubmit={handleSubmit} />
            {searchResults.length ? 
              <Results search={search} length={searchResults.length} /> : <> </>
            }   
            {loading && <Loader />}      
            {!loading && <Content movies={searchResults} error={error} /> }
          </>
        } />
        <Route path="/movie/:id" element={<MovieDetails error={error} setError={setError} loading={loading} setLoading={setLoading}/>} />
      </Routes>
    </>
  );
}

export default App;