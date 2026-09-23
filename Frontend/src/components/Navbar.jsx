import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        ✈️ YatraGuide
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/destinations">Destinations</Link>
        <Link to="/budget">Budget Planner</Link>
        <Link to="/itinerary">Itinerary</Link>
        <Link to="/transport">Transport</Link>
      </div>
    </nav>
  );
}

export default Navbar;