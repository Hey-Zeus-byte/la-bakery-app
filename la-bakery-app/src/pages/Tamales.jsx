import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";

const Tamales = () => {
  return (
    <div>
      <h1 style={{color: "green", fontSize: "100px"}}>
        Panaderia La Michoacana
      </h1>
      <NavBar />
      <div>Tamale content</div>
      <Footer />
    </div>
  );
};

export default Tamales;
