import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="volunteer" element={<div className="section-padding container-max"><h1 className="text-4xl font-bold">Volunteer - Coming Soon</h1></div>} />
          <Route path="own-a-home" element={<div className="section-padding container-max"><h1 className="text-4xl font-bold">Own a Home - Coming Soon</h1></div>} />
          <Route path="locations" element={<div className="section-padding container-max"><h1 className="text-4xl font-bold">Locations - Coming Soon</h1></div>} />
          <Route path="news" element={<div className="section-padding container-max"><h1 className="text-4xl font-bold">News - Coming Soon</h1></div>} />
          <Route path="donate" element={<div className="section-padding container-max"><h1 className="text-4xl font-bold">Ways to Donate - Coming Soon</h1></div>} />
          <Route path="contact" element={<div className="section-padding container-max"><h1 className="text-4xl font-bold">Contact - Coming Soon</h1></div>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;