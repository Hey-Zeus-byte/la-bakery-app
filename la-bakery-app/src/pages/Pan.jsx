import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import chocoChip from "../images/choco-chip.png";
import happyFace from "../images/happyface.png";
import concha from "../images/miniconcha.png";
import pinkCookie from "../images/pinkcookie.png";
import whiteCookie from "../images/whitecookie.png";
import chocoCupcake from "../images/choco-cupcake.png";
import vanillaCupcake from "../images/vanilla-cupcake.png";
import "../styles.css";

const Homepage = () => {
  return (
    <div>
      <h1 style={{color: "green", fontSize: "100px"}}>
        Panaderia La Michoacana
      </h1>
      <NavBar />
      <div> pan content</div>
      <div class="responsive">
        <img src={chocoChip} alt="choco-chip" width="600" height="400" />
        <p class="desc">Chocolate Chip Cookie</p>
      </div>
      <div class="responsive">
        <img src={happyFace} alt="happyface" width="600" height="400" />
        <p class="desc">Happy Face Cookie</p>
      </div>
      <div class="responsive">
        <img src={whiteCookie} alt="white-cookie" width="600" height="400" />
        <p class="desc">White Cookie</p>
      </div>
      <div class="responsive">
        <img src={pinkCookie} alt="pink-cookie" width="600" height="400" />
        <p class="desc">Pink Cookie</p>
      </div>
      <div class="responsive">
        <img src={concha} alt="concha" width="600" height="400" />
        <p class="desc">Concha Click on the image to view different colors</p>
      </div>
      <div class="responsive">
        <img
          src={vanillaCupcake}
          alt="vanilla-cupcake"
          width="600"
          height="400"
        />
        <p class="desc">Vanilla Cupcake</p>
      </div>
      <div class="responsive">
        <img src={chocoCupcake} alt="choco-cupcake" width="600" height="400" />
        <p class="desc">Chocolate Cupcake</p>
      </div>
      {/* <div class="responsive">
        <img src={chocoChip} alt="choco-chip" width="600" height="400" />
        <p class="desc">Chocolate Chip Cookie</p>
      </div>
      <div class="responsive">
        <img src={chocoChip} alt="choco-chip" width="600" height="400" />
        <p class="desc">Chocolate Chip Cookie</p>
      </div>
      <div class="responsive">
        <img src={chocoChip} alt="choco-chip" width="600" height="400" />
        <p class="desc">Chocolate Chip Cookie</p>
      </div>
      <div class="responsive">
        <img src={chocoChip} alt="choco-chip" width="600" height="400" />
        <p class="desc">Chocolate Chip Cookie</p>
      </div> */}
      <Footer />
    </div>
  );
};

export default Homepage;
