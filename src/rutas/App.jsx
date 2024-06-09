import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../contenedores/home";
import Contacto from "../contenedores/Contacto";
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/contacto" element={<Contacto />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
