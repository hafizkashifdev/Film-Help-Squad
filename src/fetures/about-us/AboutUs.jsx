import React from "react";
import ContactUsBg from "../../assets/Images/about-us/bg-contactus.png";
import Hero from "./sections/Hero";
import SecTwo from "./sections/SecTwo";
import SecThree from "./sections/SecThree";
import SecFour from "./sections/SecFour";
import { Box } from "@mui/material";
import { ContactUsForm } from "../../components/contact-us-form/ContactUsForm";

const AboutUs = () => {
  const bgContactUsStyle = {
    backgroundImage: `url(${ContactUsBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "auto",
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { md: "7rem", xs: "4rem" },
      }}
    >
      <Hero />
      <SecTwo />
      <SecThree />
      <SecFour />
      <div style={bgContactUsStyle}>
        <ContactUsForm />
      </div>
    </Box>
  );
};

export default AboutUs;
