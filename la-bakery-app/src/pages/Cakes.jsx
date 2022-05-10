import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";

const Cakes = () => {
  return (
    <div>
      <h1 style={{color: "green", fontSize: "100px"}}>
        Panaderia La Michoacana
      </h1>
      <NavBar />
      <div>Regular Cakes</div>
      <div>Wedding Cakes</div>
      <div>Special Cakes</div>
      <Footer />
    </div>
  );
};

export default Cakes;
