import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const HowApply = () => {
  const lineStyle = {
    width: "191px",
    borderBottom: "3px solid #DECDC6",
  };
  return (
    <Grid container sx={{ height: "auto", px: "5rem" }}>
      <Box className="flex flex-column align-center center-text" gap={2}>
        <Typography className="heading-40 font-weight-400 font-family-dm dm-color text-align-c">
          How to Apply
        </Typography>
        <Typography className="justify-c-center">
          <div style={lineStyle}></div>
        </Typography>
        <Typography className="text-color heading-20 font-weight-400 font-family-lato text-align-c">
          If you're interested in joining the Film Help Squad team or exploring
          collaboration opportunities, please send your resume, portfolio (if
          applicable), and a cover letter outlining your interests and
          qualifications to info@fhs
        </Typography>
        <Typography className="text-color heading-20 font-weight-400 font-family-lato margin-top-1 text-align-c">
          We appreciate your interest in being part of our mission to empower
          and connect filmmakers and creatives worldwide.
        </Typography>
      </Box>
    </Grid>
  );
};

export default HowApply;
