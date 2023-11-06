import * as React from "react";
import { Container } from "@mui/material";
import { ContactUsForm } from "../../components/contact-us-form/ContactUsForm";

export default function ContactUs() {
  return (
    <Container
      className="flex justify-center align-center"
      sx={{ mt: { md: "6rem", sm: "3rem", xs: "2rem" } }}
    >
      <ContactUsForm />
    </Container>
  );
}
