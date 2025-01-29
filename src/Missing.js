const Missing = ({ error }) => {
  return (
      <div style={{ marginTop: "20px" }} className="d-flex justify-content-center  alert alert-dismissible alert-danger"> 
          {/* <button class="btn-close" data-bs-dismiss="alert"></button> */}
      <strong>Oh snap! </strong> {error}
      </div>
  )
}
export default Missing