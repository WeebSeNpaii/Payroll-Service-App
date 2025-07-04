import React from "react";
import {Outlet} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  return (
    <>
     <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
