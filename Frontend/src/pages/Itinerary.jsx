import { useState } from "react";
import destinations from "../data/destinations";

function Itinerary() {
  const [destinationId, setDestinationId] = useState(1);
  const [days, setDays] = useState(3);
  const [generated, setGenerated] = useState(false);

  const destination = destinations.find(
    (item) => item.id === Number(destinationId)
  );

  const generateItinerary = () => {
    setGenerated(true);

    const saved = {
      destination: destination.name,
      days,
      generatedAt: new Date().toISOString()
    };

    localStorage.setItem(
      "yatraGuideTrip",
      JSON.stringify(saved)
    );
  };

  const getPlacesForDay = (day) => {
    const places = destination.places;

    const start = ((day - 1) * 2) % places.length;

    return [
      places[start],
      places[(start + 1) % places.length]
    ];
  };

  return (
    <div className="page">
      <div className="page-header">
        <h1>📅 Smart Itinerary Generator</h1>

        <p>
          Create a personalized day-by-day travel plan.
        </p>
      </div>

      <div className="itinerary-form">
        <label>Destination</label>

        <select
          value={destinationId}
          onChange={(e) => {
            setDestinationId(e.target.value);
            setGenerated(false);
          }}
        >
          {destinations.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>

        <label>Trip Duration</label>

        <input
          type="number"
          min="1"
          max="10"
          value={days}
          onChange={(e) => {
            setDays(
              Math.min(10, Math.max(1, Number(e.target.value)))
            );
            setGenerated(false);
          }}
        />

        <button
          className="primary-btn"
          onClick={generateItinerary}
        >
          Generate Itinerary
        </button>
      </div>

      {generated && (
        <div className="itinerary">
          <h2>
            {days}-Day Trip to {destination.name}
          </h2>

          {Array.from({ length: days }, (_, index) => {
            const day = index + 1;
            const places = getPlacesForDay(day);

            return (
              <div className="day-card" key={day}>
                <div className="day-number">
                  Day {day}
                </div>

                <div>
                  <h3>
                    Explore {destination.name}
                  </h3>

                  <p>
                    🌅 Morning: Visit {places[0]}
                  </p>

                  <p>
                    🌆 Afternoon: Explore {places[1]}
                  </p>

                  <p>
                    🌙 Evening: Enjoy local food and
                    explore nearby attractions.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Itinerary;