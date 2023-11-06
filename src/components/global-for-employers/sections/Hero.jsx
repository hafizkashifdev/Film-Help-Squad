import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { GlobalSocialIcons } from "../../social-icons/social-icons";
import { useNavigate } from "react-router-dom";

const Hero = ({ heroImg, heroHeading, heroSubHead }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Grid
        container
        sx={{
          flexDirection: { lg: "row", xs: "column" },
          pt: { lg: "0", md: "5rem", xs: "3rem" },
        }}
        className="primary-bg-color justify-center align-center"
      >
        <Grid
          item
          lg={5}
          xs={12}
          sx={{
            px: { md: "0", xs: "2rem" },
            textAlign: { lg: "start", xs: "center" },
          }}
        >
          <Typography
            sx={{
              maxWidth: "1169px",
            }}
            className="font-weight-400 font-family-dm white-color heading-60"
          >
            {heroHeading}
          </Typography>
          <Typography className="heading-20 font-weight-400 font-family-lato secondary-color margin-top-1">
            {heroSubHead}
          </Typography>
          <Button
            className="primary-color bg-white-color margin-top-1 sub-heading font-family-plus font-weight-600"
            sx={{ p: "13px 18px" }}
            onClick={()=>navigate("/professionals/create-profile")}
          >
            Join Now For Free
          </Button>
        </Grid>
        <Grid
          item
          lg={0.1}
          xs={12}
          sx={{
            display: { lg: "none", xs: "block" },
            mb: { lg: "0", xs: "1rem" },
          }}
        >
          <GlobalSocialIcons />
        </Grid>
        <Grid item lg={6} md={6} sm={8} xs={12} mb={"-3px"}>
          <img src={heroImg} width={"100%"} alt="mainImage" />
        </Grid>
        <Grid item lg={0.1} xs={12} display={{ lg: "block", xs: "none" }}>
          <GlobalSocialIcons />
        </Grid>
      </Grid>
      <Box
        sx={{ bgcolor: "#F8F5F4", py: "30px", px: { md: "0", xs: "2rem" } }}
        className="flex font-family-dm dm-color font-weight-400 justify-center center-text heading-40"
      >
        Your Ultimate Gateway to the world of Creative Possibilities!
      </Box>
    </div>
  );
};

export default Hero;
