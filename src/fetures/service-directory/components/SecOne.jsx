import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import { GlobalSocialIcons } from "../../../components/social-icons/social-icons";

const SecOne = () => {
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
        xl={10.6}
        lg={11.5}
        xs={12}
        className="flex flex-column align-center justify-center"
        sx={{ gap: "4rem" }}
      >
        <Box>
          <Typography
            sx={{ maxWidth: "1169px" }}
            className="font-weight-400 font-family-dm heading-60 white-color center-text"
          >
            Service Directory
          </Typography>
          <Typography
            maxWidth={"1169px"}
            className="heading-20 font-weight-400 font-family-lato secondary-color center-text margin-top-1"
          >
            Are you seeking Agent representation? Search and find the top voice,
            child and actor agents all around the world who have open books. If
            you would like to find an agent join The Squad today!
          </Typography>
        </Box>
      </Grid>
      <Grid item lg={0.2} xs={12}>
        <GlobalSocialIcons />
      </Grid>
    </Grid>
  );
};

export default SecOne;
