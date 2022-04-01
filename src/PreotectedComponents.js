import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Homepage from "./Components/HomePage/Homepage";

function ProtectedComponents() {
  return (
    <>
      <Header />
      <Homepage />
      <Footer />
    </>
  );
}

export default ProtectedComponents;
