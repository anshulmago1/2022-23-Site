import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import ClubInfo from "./Pages/ClubInfo";
import MeetingDates from "./Pages/MeetingDates";
import Projects from "./Pages/Projects";

function App() {
  return (
    <div className="w-full min-h-screen text-slate-50 bg-slate-900 z-40">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/club_info" element={<ClubInfo />} />
          <Route path="/meeting_dates" element={<MeetingDates />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
