// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';
import Footer from './component/Footer';

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <nav style={{ display: 'flex', gap: '15px', padding: '20px', background: '#eee' }}>
        <strong>Speta Agency</strong>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div style={{ padding: '20px', flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* The Catch-All Route for our 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* The Global Footer appears on every page automatically! */}
      <Footer />
    </div>
  );
}