import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import BgImg from "../../../assets/Images/about-us/bg-contactus.png";

const Opportunities = () => {
  const lineStyle = {
    width: "191px",
    borderBottom: "3px solid #DECDC6",
  };
  const bgImageStyle = {
    backgroundImage: `url(${BgImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "auto",
  };
  return (
    <div style={bgImageStyle} id="current-opportunities">
      <Grid
        container
        sx={{ height: "auto", px: { md: "5rem", xs: "2rem" }, gap: 4 }}
      >
        <Box
          className="flex flex-column align-center center-text width-100"
          sx={{ gap: 2 }}
        >
          <Typography className="font-weight-400 font-family-dm heading-40 dm-color">
            Current Opportunities
          </Typography>
          <Typography className="justify-c-center">
            <div style={lineStyle}></div>
          </Typography>
          <Typography className="text-color font-weight-400 heading-20 font-family-lato">
            We're always on the lookout for talented individuals who are
            passionate about our mission. While we may not have specific job
            openings at this moment, we encourage you to check back regularly
            for updates or feel free to reach out to express your interest.
          </Typography>
        </Box>
        <iframe
          src="https://jobs.orcaloholding.co.uk/jobs/companies/3lzPJY6OvGqk1OALE25ZjDWBxw"
          width="100%"
          height="100%"
          no-border
          scrolling="no"
          title="Jobs Widget"
          style={{ border: "none", minHeight: "950px" }}
        />
      </Grid>
    </div>
  );
};

export default Opportunities;
