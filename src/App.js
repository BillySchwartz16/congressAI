import React, { useState } from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Body from './components/Body';
import './App.css';

function App() {
  const [chamber, setChamber] = useState("senate");

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <SideBar setChamber={setChamber} />
        <Body chamber={chamber} />
      </main>
      <footer className="app-footer">
        {/* Add footer components here */}
      </footer>
    </div>
  );
}

export default App;




