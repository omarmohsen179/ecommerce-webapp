import React, { useEffect } from "react";
// import UpperPage from "../../../Components/UpperPage";
import ContactUsForm from "./Components/ContactUsForm";
import ContactUslist from "./Components/ContactUslist";
import Intro from "./Components/Intro";
import "./ContactUs.css";
function ContactUs() {
  return (
    <div>
      {/* <UpperPage Title={"Contact Us"} /> */}
      <Intro />
      <ContactUslist />
      <ContactUsForm />
    </div>
  );
}

export default ContactUs;
