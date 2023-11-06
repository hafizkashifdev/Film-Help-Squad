import React from "react";
import { Button, Card, Grid, Typography, Box } from "@mui/material";
import WhiteCustomField from "../white-custom-field/white-custom-field";

export const ContactUsForm = () => {
  const lineStyle = {
    width: "191px",
    height: "3px",
    backgroundColor: "#DECDC6",
  };
  return (
    <Card
      sx={{
        p: { md: "60px", sm: "40px", xs: "20px" },
        mx: { md: 0, sm: "30px", xs: "15px" },
        maxWidth: "921px",
        borderRadius: "12px",
        width: "100%",
        boxShadow: "0px 31.00949px 64px 0px rgba(0, 0, 0, 0.08)",
      }}
    >
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          alignItems: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <Box
          sx={{ gap: { md: 2, xs: 1 } }}
          className="flex flex-column justify-center align-center"
        >
          <Typography className="font-family-dm dm-color font-weight-400 heading-30">
            Contact Us
          </Typography>
          <div style={lineStyle}></div>
          <Typography className="text-color center-text font-family-lato font-weight-400 heading-20">
            Let's Connect and Collaborate! Reach out to us with your inquiries,
            feedback, or partnership opportunities.
          </Typography>
        </Box>
        <Grid container spacing={2} gap={{ md: 0, xs: 2 }}>
          <Grid item xs={12} md={6}>
            <WhiteCustomField
              label="First Name"
              fieldPlaceholder="Enter first name here"
              require
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <WhiteCustomField
              label="Last Name"
              fieldPlaceholder="Enter last name here"
              require
            />
          </Grid>
        </Grid>
        <Grid className="width-100">
          <WhiteCustomField
            label="Email Address"
            fieldPlaceholder="Enter email address"
            require
          />
        </Grid>
        <Grid className="width-100">
          <WhiteCustomField
            label="Phone Number"
            fieldPlaceholder="Enter phone number"
            require
            fieldType="number"
          />
        </Grid>
        <Grid className="width-100">
          <WhiteCustomField
            multiline={true}
            rows={4}
            label="Message (Optional)"
            fieldPlaceholder="Placeholder"
          />
        </Grid>
        <Button
          className="bg-primary-color white-color border-radius-8 sub-heading font-family-plus width-100"
          sx={{
            p: "16px",
          }}
        >
          Submit
        </Button>
      </Box>
    </Card>
  );
};
