import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login';
import InscriptionC from './components/inscriptionclient';
import InscriptionV from './components/inscriptionVendeur';

function App() {
  return (
    <div>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>

      <Router basename="/inscriptionclient">
        <Routes>
          <Route path="/" element={<InscriptionC />} />
        </Routes>
      </Router>

      <Router basename="/inscriptionVendeur">
        <Routes>
          <Route path="/" element={<InscriptionV />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;