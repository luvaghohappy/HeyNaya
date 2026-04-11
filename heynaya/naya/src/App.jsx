import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/AboutPage";
import HowItWorks from "./pages/HowItWorks";
import Support from "./pages/Support";
import Sources from "./pages/Sources";

export default function App() {
  return (
    <Router>
      <Navbar />

      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/HowItWorks" element={<HowItWorks />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/Sources" element={<Sources />} />
        </Routes>
      </div>
    </Router>
  );
}