import { useState } from "react";
import destinations from "../data/destinations";

function Transport() {
  const [destinationId, setDestinationId] = useState(1);

  const destination = destinations.find(
    (item) => item.id === Number(destinationId)
  );

  const options = [
    {
      name: "Train",
      icon: "🚆",
      price: destination.train,
      time: "Depends on route",
      description: "Comfortable and economical for long journeys."
    },
    {
      name: "Bus",
      icon: "🚌",
      price: destination.bus,
      time: "Depends on route",
      description: "Flexible option with multiple routes."
    }
  ];

  return (
    <div className="page">
      <div className="page-header">
        <h1>🚆 Transportation Comparison</h1>

        <p>
          Compare estimated transportation costs.
        </p>
      </div>

      <div className="transport-selector">
        <label>Select Destination</label>

        <select
          value={destinationId}
          onChange={(e) =>
            setDestinationId(e.target.value)
          }
        >
          {destinations.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="transport-grid">
        {options.map((option) => (
          <div className="transport-card" key={option.name}>
            <div className="transport-icon">
              {option.icon}
            </div>

            <h2>{option.name}</h2>

            <div className="transport-price">
              ₹{option.price.toLocaleString("en-IN")}
            </div>

            <p>Estimated one-way cost</p>

            <hr />

            <p>⏱️ {option.time}</p>

            <p>{option.description}</p>

            <button className="secondary-btn">
              Select {option.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Transport;