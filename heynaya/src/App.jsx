import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Sources from "./pages/Sources";

export default function App() {
  return (
    <Router>
      <Navbar />

      {/* Page content offset for fixed navbar */}
      <div className="pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/sources" element={<Sources />} />
        </Routes>
      </div>
    </Router>
  );
}
