import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import SidebarProvider from "./contexts/SidebarContext"; // Import SidebarProvider

const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <SidebarProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
          <Sidebar />
          <Footer />
        </SidebarProvider>
      </Router>
    </div>
  );
};

export default App;
