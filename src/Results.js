const Results = ({ search, length }) => {
  return (
      <div style={{ marginLeft: "70px", marginTop: "20px" }} className="d-flex justify-content-left"> 
          <p>Showing {length} Movies for "{search}"</p>
    </div>
  )
}
export default Results;