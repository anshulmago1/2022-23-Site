import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import ClubInfo from "./Pages/ClubInfo";
import Projects from "./Pages/Projects";
import Forms from "./Pages/Forms";

function App() {
  return (
    <div className="w-full min-h-screen text-slate-50 bg-slate-900 z-40">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/club_info" element={<ClubInfo />} />
          <Route path="/forms" element={<Forms />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
