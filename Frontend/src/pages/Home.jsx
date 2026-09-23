import { Link } from "react-router-dom";
import destinations from "../data/destinations";
import DestinationCard from "../components/DestinationCard";

function Home() {
  return (
    <div>
      <section className="hero">
        <div className="hero-content">
          <p className="hero-small">DISCOVER INDIA</p>

          <h1>
            Your Journey.
            <br />
            Your Way.
          </h1>

          <p>
            Plan your perfect Indian adventure with personalized
            itineraries, budget planning and transport comparison.
          </p>

          <div className="hero-buttons">
            <Link to="/destinations" className="primary-btn">
              Explore Destinations
            </Link>

            <Link to="/budget" className="secondary-btn">
              Plan My Trip
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Everything You Need to Plan</h2>

        <div className="feature-grid">
          <div className="feature">
            <span>🗺️</span>
            <h3>Discover Places</h3>
            <p>
              Explore popular destinations and tourist attractions.
            </p>
          </div>

          <div className="feature">
            <span>💰</span>
            <h3>Budget Planner</h3>
            <p>
              Estimate your complete trip cost before travelling.
            </p>
          </div>

          <div className="feature">
            <span>📅</span>
            <h3>Smart Itinerary</h3>
            <p>
              Generate a day-by-day travel plan based on your trip.
            </p>
          </div>

          <div className="feature">
            <span>🚆</span>
            <h3>Compare Transport</h3>
            <p>
              Compare estimated train and bus costs.
            </p>
          </div>
        </div>
      </section>

      <section className="destinations-section">
        <div className="section-heading">
          <div>
            <h2>Popular Destinations</h2>
            <p>Start exploring India's most exciting destinations.</p>
          </div>

          <Link to="/destinations">View All →</Link>
        </div>

        <div className="destination-grid">
          {destinations.slice(0, 6).map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;