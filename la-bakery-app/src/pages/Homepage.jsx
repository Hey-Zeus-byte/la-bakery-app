import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import sign from "../images/sign.png";
import cover from "../images/cover1.png";

const Homepage = () => {
  return (
    <div>
      <h1 style={{color: "black", fontSize: "50px"}}>
        <img
          alt="sign"
          src={sign}
          height="225"
          style={{"border-radius": "25px"}}
        />{" "}
        <p>In Business for more than 15 years</p>
      </h1>
      <NavBar />
      <div>
        <img alt="cover" src={cover} width="100%" style={{}} />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
