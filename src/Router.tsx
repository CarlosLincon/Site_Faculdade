import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import PaginaPadrao from "./components/PaginaPadrao";

export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
          </Route>

        </Routes>
      </Router>
    </main>
  );
}