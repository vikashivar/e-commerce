import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import { useCallback, useEffect, useState } from "react";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AppContext from "./utils/context";
// import Newsletter from "./components/Footer/Newsletter/Newsletter";

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/product/:id" element={<SingleProduct />} />
        </Routes>
        <Newsletter></Newsletter>
        <Footer></Footer>
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
