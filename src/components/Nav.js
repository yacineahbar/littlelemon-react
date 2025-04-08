import { Link } from "react-router-dom";
import "./css/Nav.css";

export default function Nav() {
  return (
    <nav>
      <div className="navbar">
        <img className="logo" src="/littlelemon_logo.png" alt="Logo"></img>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
          <li>
            <Link to="/order">Order Online</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
