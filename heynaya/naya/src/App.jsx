import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/AboutPage";
import HowItWorks from "./pages/HowItWorks";
import Sources from "./pages/Sources";

import WelcomeModal from "./components/WelcomeModal";

export default function App() {
  return (
    <ThemeProvider>
      <WelcomeModal />
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-[#0b0f1a] transition-colors duration-500">
          <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AboutUs" element={<About />} />
            <Route path="/HowItWorks" element={<HowItWorks />} />
            <Route path="/Sources" element={<Sources />} />
          </Routes>
        </main>

        <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}
