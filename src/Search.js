const Search = ({ search, setSearch, handleSubmit }) => {
return (
    <div style={{ marginLeft: "70px", marginRight: "70px", marginTop: "20px" }} className="d-flex justify-content-left"> 
        <form className="d-flex" style={{ width: "100%" }} onSubmit={(e) => handleSubmit(e)}>
            <input className="form-control me-sm-2" type="search" placeholder="Search Movie" value={search} onChange={(e) => setSearch(e.target.value)}/>
            {/* <button className="btn btn-primary my-2 my-sm-0" type="submit" onClick={handleSearch}>Search</button> */}
        </form>
        
        </div>
)
}
export default Search