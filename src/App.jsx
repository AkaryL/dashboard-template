import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import DemograficoPage from "./pages/DemograficoPage";
import TerritorialPage from "./pages/TerritorialPage";
import PercepcionPage from "./pages/PercepcionPage";
import SentimientoPage from "./pages/SentimientoPage";
import ActoresPage from "./pages/ActoresPage";

function App() {
  const categories = [
    "Resumen",
    "Demografico",
    "Territorial",
    "Percepcion",
    "Sentimiento Digital",
    "Actores y Riesgo",
  ];

  return (
    <Router>
      <Routes>
        <Route element={<Layout categories={categories} />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/demografico" element={<DemograficoPage />} />
          <Route path="/territorial" element={<TerritorialPage />} />
          <Route path="/percepcion" element={<PercepcionPage />} />
          <Route path="/sentimiento-digital" element={<SentimientoPage />} />
          <Route path="/actores-y-riesgo" element={<ActoresPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
