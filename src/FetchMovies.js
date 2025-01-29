export const FetchMovies = async (API_URL, setSearchResults, setError) => {
    try {
        const res = await fetch(API_URL);
        const data = await res.json();

        if(data.Response === 'True') {
            setSearchResults(data.Search);
            setError(null);
        } else{
            setSearchResults([]);
            setError("No Movie Found");
        }
    }catch {
        setSearchResults([]);
        setError('Error fetching data');
    }
    
}

export const FetchMovieDetails = async (URL, setDets, setError) => {
     try {
         const res = await fetch(URL);
         const data = await res.json();
         setDets(data);
         if(data.Response === 'True') {
             setDets(data);
         }else{
             setDets([]);
             setError(data.Error);
         }
     }catch {
         setDets([]);
         setError('Error fetching data');
     }
 }