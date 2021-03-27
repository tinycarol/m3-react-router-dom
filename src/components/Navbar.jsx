import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/home">
            My app
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink activeClassName="active" className="nav-link" to="/home">
                Home
              </NavLink>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/about-us"
              >
                About us
              </NavLink>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/contact-us"
              >
                Contact us
              </NavLink>
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/users"
              >
                Users
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
