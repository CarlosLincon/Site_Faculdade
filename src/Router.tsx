import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PaginaPadrao from "./components/PaginaPadrao";
import PaginaInicial from "./components/PaginaInicial";
import SpeedDialTooltipOpen from "./components/SpeedDialTooltipOpen";
import NavBar from "./components/Rodape";
import NotFound from "./components/NotFound";
import Cursos from "./Pages/Cursos";
export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<PaginaInicial />} />
          </Route>
          <Route path="cursos/:id" element={<Cursos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <SpeedDialTooltipOpen />
        <NavBar />
      </Router>
    </main>
  );
}