import { useParams, Link } from "react-router-dom";
import destinations from "../data/destinations";

function DestinationDetails() {
  const { id } = useParams();

  const destination = destinations.find(
    (item) => item.id === Number(id)
  );

  if (!destination) {
    return (
      <div className="page empty">
        <h1>Destination not found</h1>
        <Link to="/destinations" className="primary-btn">
          Back to Destinations
        </Link>
      </div>
    );
  }

  return (
    <div className="details-page">
      <img
        className="details-image"
        src={destination.image}
        alt={destination.name}
      />

      <div className="details-content">
        <p className="state">{destination.state}</p>

        <h1>{destination.name}</h1>

        <div className="rating">
          ⭐ {destination.rating}
        </div>

        <p className="details-description">
          {destination.description}
        </p>

        <h2>Top Attractions</h2>

        <div className="places-list">
          {destination.places.map((place) => (
            <div className="place" key={place}>
              📍 {place}
            </div>
          ))}
        </div>

        <h2>Estimated Daily Costs</h2>

        <div className="cost-grid">
          <div>
            🏨
            <strong>Hotel</strong>
            <span>₹{destination.hotel}</span>
          </div>

          <div>
            🍛
            <strong>Food</strong>
            <span>₹{destination.food}</span>
          </div>

          <div>
            🚕
            <strong>Local Transport</strong>
            <span>₹{destination.localTransport}</span>
          </div>
        </div>

        <div className="details-buttons">
          <Link to="/budget" className="primary-btn">
            Calculate Budget
          </Link>

          <Link to="/itinerary" className="secondary-btn">
            Generate Itinerary
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DestinationDetails;