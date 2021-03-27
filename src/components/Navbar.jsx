import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <ul>
      <li>
        <NavLink activeClassName="active" className="blue-text" to="/home">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" className="blue-text" to="/about-us">
          About us
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName="active"
          className="blue-text"
          to="/contact-us"
        >
          Contact us
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" className="blue-text" to="/pepe">
          Pepe
        </NavLink>
      </li>
    </ul>
  );
}
