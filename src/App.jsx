import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurTeam from './pages/OurTeam';
import GlassesCollection from './pages/GlassesCollection';
import EyeglassesTrips from './pages/EyeglassesTrips';
import GetInvolved from './pages/GetInvolved';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/team" element={<OurTeam />} />
            <Route path="/glasses-collection" element={<GlassesCollection />} />
            <Route path="/eyeglasses-trips" element={<EyeglassesTrips />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
