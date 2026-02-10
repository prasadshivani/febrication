import React from "react";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Quotation from "./pages/Quotation";
import StoreContext from "./StoreContext";
import AboutUs from "./pages/AboutUs";
import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import Catalog from "./pages/Catalog";

const App = () => {
  return (
    <>
      <StoreContext>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/quotation" element={<Quotation />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </StoreContext>
    </>
  );
};

export default App;
