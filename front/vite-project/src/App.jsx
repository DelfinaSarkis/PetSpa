import { Routes, Route, useLocation } from "react-router-dom";
import Formulario from "./views/Formulario/Formulario";
import Footer from "./components/Footer/Footer";
import Home from "./views/Home/Home";
import Turnos from "./views/Turnos/Turnos.jsx";
import About from "./views/About/About.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/" ? null : <NavBar />}
      <Routes>
        <Route path="/" element={<Formulario />} />
        <Route path="/home" element={<Home />} />
        <Route path="/appointments" element={<Turnos />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
