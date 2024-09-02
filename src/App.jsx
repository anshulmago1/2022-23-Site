import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import ClubInfo from "./Pages/ClubInfo";
import Forms from "./Pages/Forms";
import Calendar from "./Pages/Calendar";
import CommunityProjects from "./Pages/CommunityProjects";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="flex flex-col w-full min-h-screen text-gray-800 bg-gray-50 font-inter">
      <Router>
        <ScrollToTop />
        <Navbar />
        <div className="flex-grow bg-gray-50 pt-20"> {/* Changed pt-16 back to pt-20 */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/club_info" element={<ClubInfo />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/projects" element={<CommunityProjects />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
