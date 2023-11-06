import React from "react";
import { Typography, Button, Grid } from "@mui/material";
import { GlobalSocialIcons } from "../../../components/social-icons/social-icons";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Grid
      container
      sx={{
        pt: { lg: "9rem", xs: "5rem" },
        pb: { lg: "13rem", xs: "6rem" },
        flexDirection: { lg: "row", xs: "column" },
        px: { lg: "0", xs: "2rem" },
      }}
      className="primary-bg-color justify-center align-center"
    >
      <Grid
        item
        lg={10.6}
        xs={12}
        className="flex flex-column align-center justify-center"
        sx={{ gap: "2rem" }}
      >
        <Typography
          sx={{ maxWidth: "1169px" }}
          className="font-weight-400 font-family-dm white-color center-text heading-60"
        >
          About Us
        </Typography>
        <Typography
          maxWidth={"1169px"}
          className="heading-20 font-weight-400 font-family-lato secondary-color center-text"
        >
          Welcome to our film website, where we explore the magic of cinema
          through reviews, interviews, and behind-the-scenes stories. Join us on
          a journey through the world of movies and discover the art of
          storytelling on the silver screen.
        </Typography>
        <Link to="/agents/create-profile">
          <Button
            className="primary-color sub-heading font-family-plus bg-white-color"
            sx={{ p: "13px 18px" }}
          >
            Join the Film Help Squad Team
          </Button>
        </Link>
      </Grid>
      <Grid item lg={0.2} xs={12}>
        <GlobalSocialIcons />
      </Grid>
    </Grid>
  );
};

export default Hero;
