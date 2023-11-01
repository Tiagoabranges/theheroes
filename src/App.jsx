import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Battle from './Pages/Batle/Battle';
import './app.css'; // Importe seu arquivo CSS para os estilos do App

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/battle" element={<Battle />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
