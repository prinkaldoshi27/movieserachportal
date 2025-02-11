import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
          <div className="container-fluid">
              <Link to="/" className='navbar-brand'>TAG Movie Portal</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>

          </div>
      </nav>
  )
}
export default Navbar