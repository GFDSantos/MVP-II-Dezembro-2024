import React from 'react';
import './App.css'; // Importa o arquivo de estilo principal
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SaibaMais from "./components/Saibamais";
import Faleconosco from "./components/Faleconosco";




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<SaibaMais />} />
        <Route path="/contact" element={<Faleconosco />}/>
      </Routes>
    </Router>
  );
}

export default App;

