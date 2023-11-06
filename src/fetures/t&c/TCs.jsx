import React from "react";
import { Box, Card, Container, Typography } from "@mui/material";

const TCs = () => {
  const headingClasses = [
    "heading-30",
    "font-weight-400",
    "font-family-dm",
    "dm-color",
  ];
  const descClasses = [
    "heading-20",
    "font-weight-400",
    "font-family-lato",
    "text-desc-color",
  ];

  return (
    <Container
      className="flex justify-center align-center"
      sx={{ mt: { md: "6rem", sm: "3rem", xs: "2rem" } }}
    >
      <Card
        sx={{
          maxWidth: "1600px",
          boxShadow: "0px 31.00949px 64px 0px rgba(0, 0, 0, 0.08)",
          p: { md: "60px", sm: "40px", xs: "20px" },
          gap: "2rem",
          borderRadius: "25px",
        }}
        className="width-100 flex flex-column"
      >
        <Box>
          <Typography className="primary-color heading-40 font-family-dm font-weight-400">
            Terms and Conditions (Version 1)
          </Typography>
          <Typography className={descClasses}>
            Last Updated: 04.09.2023
          </Typography>
        </Box>

        <Box sx={{ gap: "1rem" }} className="flex flex-column">
          <Typography className="font-family-dm dm-color heading-30 font-weight-400">
            Introduction
          </Typography>
          <Typography className={descClasses}>
            Welcome to Film Help Squad ("we," "our," or "us"). By using our
            website and services ("Service"), you agree to comply with and be
            bound by these Terms and Conditions ("Terms"). If you do not agree
            to these Terms, please do not use our Service.
          </Typography>
        </Box>

        <Box sx={{ gap: "1rem" }} className="flex flex-column">
          <Typography className={headingClasses}>Use of the Service</Typography>
          <Typography className={descClasses}>
            <span style={{ color: "#151C48", fontWeight: 600 }}>
              Eligibility: &nbsp;
            </span>
            You must be at least 18 years old to use our Service. By using the
            Service, you represent and warrant that you are at least 18 years
            old and have the legal capacity to enter into these Terms.
          </Typography>

          <Typography className={descClasses}>
            <span style={{ color: "#151C48", fontWeight: 600 }}>
              User Accounts: &nbsp;
            </span>
            To access certain features of our Service, you may be required to
            register for an account. You are responsible for maintaining the
            confidentiality of your account credentials and for all activities
            that occur under your account. You agree to notify us immediately of
            any unauthorized use of your account.
          </Typography>
        </Box>

        <Box sx={{ gap: "1rem" }} className="flex flex-column">
          <Typography className={headingClasses}>
            Content and User Contributions
          </Typography>
          <Typography className={descClasses}>
            <span style={{ color: "#151C48", fontWeight: 600 }}>
              User Content: &nbsp;
            </span>
            You are solely responsible for any content you post, upload, or
            otherwise make available through the Service ("User Content"). You
            retain ownership of your User Content, but by posting it on our
            Service, you grant us a non-exclusive, worldwide, royalty-free
            license to use, reproduce, modify, adapt, publish, translate,
            distribute, and display your User Content.
          </Typography>
          <Typography className={descClasses}>
            <span style={{ color: "#151C48", fontWeight: 600 }}>
              Prohibited Content: &nbsp;
            </span>
            You may not post or transmit any content that is illegal, offensive,
            defamatory, infringing on intellectual property rights, or violates
            these Terms.
          </Typography>
        </Box>

        <Box sx={{ gap: "1rem" }} className="flex flex-column">
          <Typography className={headingClasses}>
            Intellectual Property
          </Typography>
          <Typography className={descClasses}>
            <span style={{ color: "#151C48", fontWeight: 600 }}>
              Ownership: &nbsp;
            </span>
            We own all intellectual property rights in the Service, including
            but not limited to trademarks, copyrights, and trade secrets. You
            may not use our intellectual property without our prior written
            consent.
          </Typography>
          <Typography className={descClasses}>
            <span style={{ color: "#151C48", fontWeight: 600 }}>
              User License: &nbsp;
            </span>
            We grant you a limited, non-exclusive, non-transferable, and
            revocable license to use the Service for its intended purposes. This
            license does not grant you any rights to our intellectual property.
          </Typography>
        </Box>

        <Box sx={{ gap: "1rem" }} className="flex flex-column">
          <Typography className={headingClasses}>Privacy</Typography>
          <Typography className={descClasses}>
            We collect and use your information in accordance with our Privacy
            Policy. By using our Service, you consent to the collection and use
            of your information as described in the Privacy Policy.
          </Typography>
        </Box>

        <Box sx={{ gap: "1rem" }} className="flex flex-column">
          <Typography className={headingClasses}>Termination</Typography>
          <Typography className={descClasses}>
            We reserve the right to terminate or suspend your account and access
            to the Service at our sole discretion, without notice, for any
            violation of these Terms or for any other reason.
          </Typography>
        </Box>

        <Box sx={{ gap: "1rem" }} className="flex flex-column">
          <Typography className={headingClasses}>
            Disclaimers and Limitation of Liability
          </Typography>
          <Typography className={descClasses}>
            <span style={{ color: "#151C48", fontWeight: 600 }}>
              No Warranty: &nbsp;
            </span>
            The Service is provided "as is" and "as available" without
            warranties of any kind, whether express or implied. We make no
            representations or warranties regarding the accuracy, reliability,
            or availability of the Service.
          </Typography>
          <Typography className={descClasses}>
            <span style={{ color: "#151C48", fontWeight: 600 }}>
              Limitation of Liability: &nbsp;
            </span>
            To the extent permitted by law, we shall not be liable for any
            indirect, incidental, consequential, or punitive damages arising out
            of or in connection with your use of the Service.
          </Typography>
        </Box>

        <Box sx={{ gap: "1rem" }} className="flex flex-column">
          <Typography className={headingClasses}>Governing Law</Typography>
          <Typography className={descClasses}>
            These Terms are governed by and construed in accordance with the
            laws of England and Wales. Any disputes arising from or related to
            these Terms shall be subject to the exclusive jurisdiction of the
            courts in England and Wales.
          </Typography>
        </Box>

        <Box sx={{ gap: "1rem" }} className="flex flex-column">
          <Typography className={headingClasses}>
            Changes to these Terms
          </Typography>
          <Typography className={descClasses}>
            We may update these Terms from time to time. Any changes will be
            posted on our website, and your continued use of the Service after
            such changes constitute your acceptance of the revised Terms.
          </Typography>
        </Box>

        <Box sx={{ gap: "1rem" }} className="flex flex-column">
          <Typography className={headingClasses}>Contact Us</Typography>
          <Typography className={descClasses}>
            If you have any questions or concerns regarding these Terms, please
            contact us at [insert contact information].
          </Typography>
        </Box>
      </Card>
    </Container>
  );
};

export default TCs;
