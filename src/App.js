
import './App.css';
// import "./input.css";
import { Routes, Route } from "react-router-dom";
// import LandingPage from "../pages/landingpage";
// import DetailsPage from '../pages/DetailsPage';
// import Navbar from '../component/Navbar';
import LandingPage from './pages/Landingpage';
import DetailsPage from './pages/DetailsPage';
import Navbar from './component/Navbar';
import "./input.css"


function App() {
  return (
    <div className="bg-gradient-to-b from-[#0FECF2] to-[#91FF37] h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
