import { useState } from "react";
import destinations from "../data/destinations";

function BudgetPlanner() {
  const [destinationId, setDestinationId] = useState(1);
  const [days, setDays] = useState(3);
  const [people, setPeople] = useState(1);
  const [transport, setTransport] = useState("train");

  const destination = destinations.find(
    (item) => item.id === Number(destinationId)
  );

  const transportCost =
    transport === "train"
      ? destination.train
      : destination.bus;

  const accommodation =
    destination.hotel * days;

  const food =
    destination.food * days * people;

  const localTransport =
    destination.localTransport * days * people;

  const total =
    accommodation +
    food +
    localTransport +
    transportCost * people;

  return (
    <div className="page">
      <div className="page-header">
        <h1>💰 Smart Budget Planner</h1>
        <p>
          Estimate your travel expenses based on your preferences.
        </p>
      </div>

      <div className="planner">
        <div className="form-section">
          <label>Destination</label>

          <select
            value={destinationId}
            onChange={(e) =>
              setDestinationId(e.target.value)
            }
          >
            {destinations.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}, {item.state}
              </option>
            ))}
          </select>

          <label>Number of Days</label>

          <input
            type="number"
            min="1"
            value={days}
            onChange={(e) =>
              setDays(Math.max(1, Number(e.target.value)))
            }
          />

          <label>Number of People</label>

          <input
            type="number"
            min="1"
            value={people}
            onChange={(e) =>
              setPeople(Math.max(1, Number(e.target.value)))
            }
          />

          <label>Transportation</label>

          <select
            value={transport}
            onChange={(e) => setTransport(e.target.value)}
          >
            <option value="train">Train</option>
            <option value="bus">Bus</option>
          </select>
        </div>

        <div className="budget-result">
          <h2>Estimated Trip Cost</h2>

          <div className="total">
            ₹{total.toLocaleString("en-IN")}
          </div>

          <p>
            {destination.name} • {days} days • {people}{" "}
            {people === 1 ? "person" : "people"}
          </p>

          <div className="cost-row">
            <span>🏨 Accommodation</span>
            <strong>
              ₹{accommodation.toLocaleString("en-IN")}
            </strong>
          </div>

          <div className="cost-row">
            <span>🍛 Food</span>
            <strong>
              ₹{food.toLocaleString("en-IN")}
            </strong>
          </div>

          <div className="cost-row">
            <span>🚕 Local Transport</span>
            <strong>
              ₹{localTransport.toLocaleString("en-IN")}
            </strong>
          </div>

          <div className="cost-row">
            <span>
              🚆 {transport === "train" ? "Train" : "Bus"}
            </span>
            <strong>
              ₹{(transportCost * people).toLocaleString("en-IN")}
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BudgetPlanner;