import { Link } from "react-router-dom";

function DestinationCard({ destination }) {
  return (
    <div className="destination-card">
      <img src={destination.image} alt={destination.name} />

      <div className="card-content">
        <h3>{destination.name}</h3>

        <p className="state">
          {destination.state}
        </p>

        <p>{destination.description}</p>

        <div className="rating">
          ⭐ {destination.rating}
        </div>

        <Link
          to={`/destination/${destination.id}`}
          className="primary-btn"
        >
          Explore
        </Link>
      </div>
    </div>
  );
}

export default DestinationCard;