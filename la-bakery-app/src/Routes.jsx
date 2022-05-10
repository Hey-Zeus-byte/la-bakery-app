import React from "react";
import {Route, Routes as BrowserRoutes} from "react-router-dom";
import ContactInfo from "./pages/ContactInfo";
import Homepage from "./pages/Homepage";
import Pan from "./pages/Pan";
import Cakes from "./pages/Cakes";
import Tamales from "./pages/Tamales";

const Routes = () => {
  return (
    <BrowserRoutes>
      <Route path="/" element={<Homepage />} />
      <Route path="/pan_pastries" element={<Pan />} />
      <Route path="/cakes" element={<Cakes />} />
      <Route path="/tamales" element={<Tamales />} />
      <Route path="/contact_us" element={<ContactInfo />} />
    </BrowserRoutes>
  );
};

export default Routes;
