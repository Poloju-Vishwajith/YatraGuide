import { useState } from "react";
import destinations from "../data/destinations";
import DestinationCard from "../components/DestinationCard";

function Destinations() {
  const [search, setSearch] = useState("");

  const filteredDestinations = destinations.filter((destination) =>
    `${destination.name} ${destination.state}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="page">
      <div className="page-header">
        <h1>Explore Destinations</h1>

        <p>
          Discover beautiful places across India.
        </p>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search destination or state..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="destination-grid">
        {filteredDestinations.map((destination) => (
          <DestinationCard
            key={destination.id}
            destination={destination}
          />
        ))}
      </div>

      {filteredDestinations.length === 0 && (
        <div className="empty">
          <h2>No destinations found</h2>
          <p>Try searching for another city or state.</p>
        </div>
      )}
    </div>
  );
}

export default Destinations;