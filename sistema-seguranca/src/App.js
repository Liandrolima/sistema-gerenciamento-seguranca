import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Relatorios from "./páginas/Relatorios"; // ✅ Importe o componente Relatórios

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/relatorios" element={<Relatorios />} /> {/* ✅ Adicionada a rota correta */}
      </Routes>
    </Router>
  );
}

export default App;
