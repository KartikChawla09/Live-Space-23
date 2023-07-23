import React from "react";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import Services from "./pages/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/services" element={<Services></Services>}></Route>
          <Route path="/contact" element={<ContactUs></ContactUs>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
