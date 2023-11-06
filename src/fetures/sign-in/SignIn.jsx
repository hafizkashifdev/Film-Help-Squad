import React from "react";
import CenturyBox from "../../assets/Images/sign-in/centuryfox.png";
import Netflix from "../../assets/Images/sign-in/netflix.png";
import BBC from "../../assets/Images/sign-in/bbc.png";
import AmazonPrime from "../../assets/Images/sign-in/amazon-prime.png";
import HBO from "../../assets/Images/sign-in/hbo.png";
import Disney from "../../assets/Images/sign-in/disney.png";
import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import WhiteCustomField from "../../components/white-custom-field/white-custom-field";

const imgData = [CenturyBox, Netflix, BBC, AmazonPrime, HBO, Disney];

const SignIn = () => {
  return (
    <Container
      className="flex flex-column justify-center align-center"
      sx={{ mt: { md: "6rem", sm: "3rem", xs: "2rem" } }}
    >
      <Card
        sx={{
          maxWidth: "460px",
          boxShadow: "0px 31.00949px 64px 0px rgba(0, 0, 0, 0.08)",
          borderRadius: "20px",
          p: { xl: "50px", xs: "10px" },
        }}
        className="width-100"
      >
        <div className="flex flex-column align-center" style={{ gap: "36px" }}>
          <Typography className="heading-40 font-family-dm dm-color font-weight-400">
            Login
          </Typography>
          <Box width={"100%"}>
            <WhiteCustomField
              label="Email Address"
              fieldPlaceholder="Enter Email"
            />
          </Box>
          <Button
            disabled
            sx={{
              bgcolor: "#E8E8ED",
              p: "10px 24px",
              color: "#A1A4B6",
              width: "fit-content",
            }}
            className="sub-heading font-family-plus font-weight-500"
          >
            Next
          </Button>
        </div>
      </Card>
      <Typography className="font-family-dm dm-color heading-40 center-text margin-top-3">
        Companies who hire with us
      </Typography>
      <Grid container gap={4} className="justify-center margin-top-2">
        {imgData.map((i) => (
          <img src={i} alt="" width={"auto"} />
        ))}
      </Grid>
    </Container>
  );
};

export default SignIn;
