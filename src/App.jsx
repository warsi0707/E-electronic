import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./components/Home";
import Projects from "./components/Product";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
