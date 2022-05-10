import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";

const ContactInfo = () => {
  return (
    <div>
      <h1 style={{color: "green", fontSize: "100px"}}>
        Panaderia La Michoacana
      </h1>
      <NavBar />
      <div>
        <h1>Hours of Operation:</h1>
        <ol style={{fontSize: "30px", listStyle: "none"}}>
          <li>Sunday: 7am - 2pm</li>
          <li>Monday: Closed</li>
          <li>Tuesday - Saturday: 7am - 7pm</li>
        </ol>
        <h1>
          Address:{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/maps/place/Panaderia+La+Michoacana/@37.6393977,-120.928185,17z/data=!3m1!4b1!4m5!3m4!1s0x80905509390f87db:0x117e23f07a596833!8m2!3d37.6393617!4d-120.9259964"
          >
            3801 Yosemite Blvd Suite B Modesto CA 95357
          </a>
        </h1>
        <h1>Phone Number: 209-578-3599</h1>
        <h1>
          Follow us in our Instagram:
          <a
            target="_blank"
            rel="noreferrer"
            href="https://instagram.com/panaderialamichoacana?igshid=YmMyMTA2M2Y="
          >
            {" "}
            Panaderia La Michoacana
          </a>
        </h1>
        <div style={{fontSize: "30px"}}>
          <h2>Like to make an order?</h2>
          If you would like to place an order for a cake please call atleast 2 -
          3 days, for wedding cakes atleast one week in advanced. All cake
          orders made over the phone or in person will need atleast a 50%
          deposit.
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactInfo;
