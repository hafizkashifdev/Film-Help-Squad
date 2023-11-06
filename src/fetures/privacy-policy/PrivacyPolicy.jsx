import React from "react";
import { Box, Card, Container, Typography } from "@mui/material";

const PrivacyPolicy = () => {
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
            Privacy Policy (Version-1)
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
          <Typography className={descClasses}>
            By accessing or using our website and services, you agree to the
            terms and practices described in this Privacy Policy. If you do not
            agree with these terms, please do not use our website or services.
          </Typography>
        </Box>
        <Box sx={{ gap: "1rem" }} className="flex flex-column">
          <Typography className={headingClasses}>
            Information We Collect
          </Typography>
          <Typography className={descClasses}>
            We may collect the following types of information:
          </Typography>
          <Typography className={descClasses}>
            Personal Information: This may include your name, email address,
            username, and any other information you voluntarily provide when you
            register for an account or use our services.
          </Typography>
          <Typography className={descClasses}>
            Usage Information: We may collect information about how you use our
            website, such as your IP address, browser type, operating system,
            and pages visited. We may also collect information about your
            interactions with our content and features.
          </Typography>
          <Typography className={descClasses}>
            Cookies and Tracking Technologies: We may use cookies and similar
            tracking technologies to collect information about your browsing
            activities and preferences. You can manage your cookie preferences
            through your browser settings.
          </Typography>
        </Box>
        <Box sx={{ gap: "1rem" }} className="flex flex-column">
          <Typography className={headingClasses}>
            How We Use Your Information
          </Typography>
          <Typography className={descClasses}>
            <span style={{ color: "#151C48", fontWeight: 600 }}>
              Providing Services:&nbsp;
            </span>
            To provide and maintain our website and services, including user
            accounts, project collaboration, and networking features.
          </Typography>
          <Typography className={descClasses}>
            <span style={{ color: "#151C48", fontWeight: 600 }}>
              Communication: &nbsp;
            </span>
            To communicate with you, respond to inquiries, send important
            updates, and provide customer support.
          </Typography>
          <Typography className={descClasses}>
            <span style={{ color: "#151C48", fontWeight: 600 }}>
              Improvement: &nbsp;
            </span>
            To analyze usage patterns, improve our website and services, and
            develop new features and offerings.
          </Typography>
          <Typography className={descClasses}>
            <span style={{ color: "#151C48", fontWeight: 600 }}>
              Marketing: &nbsp;
            </span>
            To send promotional materials, newsletters, and updates about our
            services, which you can opt out of at any time.
          </Typography>
        </Box>
        <Box sx={{ gap: "1rem" }} className="flex flex-column">
          <Typography className={headingClasses}>
            Disclosure of Your Information
          </Typography>
          <Typography className={descClasses}>
            We may share your information in the following circumstances:
          </Typography>
          <Typography className={descClasses}>
            <span style={{ color: "#151C48", fontWeight: 600 }}>
              With Third Parties: &nbsp;
            </span>
            We may share your information with trusted third-party service
            providers who assist us in operating our website and providing our
            services. These service providers are contractually obligated to
            protect your information.
          </Typography>
          <Typography className={descClasses}>
            <span style={{ color: "#151C48", fontWeight: 600 }}>
              Legal Obligations: &nbsp;
            </span>
            We may disclose your information if required by law or in response
            to a valid legal request, such as a court order or government
            inquiry.
          </Typography>
          <Typography className={descClasses}>
            <span style={{ color: "#151C48", fontWeight: 600 }}>
              Business Transfers: &nbsp;
            </span>
            If we are involved in a merger, acquisition, or sale of all or a
            portion of our assets, your information may be transferred as part
            of that transaction.
          </Typography>
        </Box>
        <Box sx={{ gap: "1rem" }} className="flex flex-column">
          <Typography className={headingClasses}>Security</Typography>
          <Typography className={descClasses}>
            We take reasonable measures to protect your information from
            unauthorized access, disclosure, alteration, or destruction.
            However, no method of data transmission or storage is completely
            secure, and we cannot guarantee the absolute security of your
            information.
          </Typography>
        </Box>
        <Box sx={{ gap: "1rem" }} className="flex flex-column">
          <Typography className={headingClasses}>Your Choices</Typography>
          <Typography className={descClasses}>
            You have the following rights regarding your information:
          </Typography>
          <Typography className={descClasses}>
            <span style={{ color: "#151C48", fontWeight: 600 }}>
              Access: &nbsp;
            </span>
            You can access and update your personal information by logging into
            your account.
          </Typography>
          <Typography className={descClasses}>
            <span style={{ color: "#151C48", fontWeight: 600 }}>
              Deletion: &nbsp;
            </span>
            You can request the deletion of your account and associated data by
            contacting us.
          </Typography>
          <Typography className={descClasses}>
            <span style={{ color: "#151C48", fontWeight: 600 }}>
              Opt-Out: &nbsp;
            </span>
            You can opt out of receiving promotional communications from us by
            following the instructions in those communications.
          </Typography>
        </Box>
        <Box sx={{ gap: "1rem" }} className="flex flex-column">
          <Typography className={headingClasses}>
            Changes to this Privacy Policy
          </Typography>
          <Typography className={descClasses}>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or for legal or regulatory reasons. We will
            notify you of any significant changes through our website or by
            email.
          </Typography>
        </Box>
        <Box sx={{ gap: "1rem" }} className="flex flex-column">
          <Typography className={headingClasses}>Contact Us</Typography>
          <Typography className={descClasses}>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or our data practices, please contact us at [insert
            contact information].
          </Typography>
        </Box>
      </Card>
    </Container>
  );
};

export default PrivacyPolicy;
