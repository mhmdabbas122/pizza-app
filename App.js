import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Table from "./pages/Table";
import AddEditProduct from "./pages/AddEdit";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<Menu />} />
            <Route path="/table" element={<Table />} />
        <Route path="/admin/add" element={<AddEditProduct />} />
        <Route path="/admin/edit/:id" element={<AddEditProduct />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;