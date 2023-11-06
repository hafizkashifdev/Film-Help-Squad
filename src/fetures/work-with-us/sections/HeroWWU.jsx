import React from "react";
import { Typography, Button, Grid } from "@mui/material";
import { GlobalSocialIcons } from "../../../components/social-icons/social-icons";

const HeroWWU = () => {
  return (
    <Grid
      container
      sx={{
        pt: { lg: "9rem", xs: "5rem" },
        pb: { lg: "13rem", xs: "6rem" },
        flexDirection: { lg: "row", xs: "column" },
        px: { md: "", xs: "2rem" },
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
          className="font-weight-400 font-family-dm heading-60 white-color center-text"
        >
          Work with Us
        </Typography>
        <Typography
          sx={{ maxWidth: "1169px" }}
          className="font-weight-400 font-family-lato heading-20 secondary-color center-text"
        >
          Are you passionate about film and the creative arts? Do you want to be
          part of a dynamic and innovative team dedicated to empowering
          filmmakers and creatives worldwide? If so, consider a career with Film
          Help Squad.
        </Typography>
          <Button
          href="#current-opportunities"
            className="primary-color sub-heading font-family-plus bg-white-color"
            sx={{ p: "13px 18px" }}
          >
            Join the Film Help Squad Team
          </Button>
      </Grid>
      <Grid item lg={0.2} xs={12}>
        <GlobalSocialIcons />
      </Grid>
    </Grid>
  );
};

export default HeroWWU;
