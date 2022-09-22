import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PaginaPadrao from "./components/PaginaPadrao";
import PaginaInicial from "./components/PaginaInicial";
export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<PaginaInicial />} />
          </Route>

        </Routes>
      </Router>
    </main>
  );
}