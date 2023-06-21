import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Body from './components/Body';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  const [chamber, setChamber] = useState("senate");

  return (
    <div className="app">
      <Header />
      <Router>
        <main className="main-content">
        <SideBar setChamber={setChamber} />
        <Routes>
          <Route path="/" element={<Body chamber={chamber} />} />
          <Route path="/senate" element={<Body chamber="senate" />} />
          <Route path="/house" element={<Body chamber="house" />} />
          <Route path="/bills" element={<Body />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        </main>
      </Router>
      <footer className="app-footer">
        {/* Add footer components here */}
      </footer>
    </div>
  );
}

export default App;




