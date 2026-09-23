import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";
import BudgetPlanner from "./pages/BudgetPlanner";
import Itinerary from "./pages/Itinerary";
import Transport from "./pages/Transport";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/destinations"
            element={<Destinations />}
          />

          <Route
            path="/destination/:id"
            element={<DestinationDetails />}
          />

          <Route
            path="/budget"
            element={<BudgetPlanner />}
          />

          <Route
            path="/itinerary"
            element={<Itinerary />}
          />

          <Route
            path="/transport"
            element={<Transport />}
          />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;