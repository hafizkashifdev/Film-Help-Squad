import React from "react";
import { Grid, Typography } from "@mui/material";
import SVG1 from "../../../assets/Images/home/section4/svg1.svg";
import SVG2 from "../../../assets/Images/home/section4/svg2.svg";

const SecFour = () => {
  const lineStyle = {
    width: "191px",
    height: "3px",
    backgroundColor: "#DECDC6",
  };
  return (
    <Grid container className="primary-bg-color justify-space-around">
      <Grid
        item
        xs={12}
        sx={{
          display: "flex",
          justifyContent: "end",
          mr: { lg: "100px", xs: "30px" },
        }}
      >
        <img src={SVG2} width={"auto"} alt="" />
      </Grid>
      <Grid
        item
        xs={12}
        className="flex flex-column justify-center align-center"
        gap={"1rem"}
      >
        <Typography className="font-weight-400 font-family-dm secondary-color center-text heading-40">
          Collaborate with Film Help Squad
        </Typography>
        <div style={lineStyle}></div>
        <Typography
          sx={{ maxWidth: "1249px", px: { md: "0", xs: "2rem" } }}
          className="secondary-color heading-20 font-weight-400 font-family-lato center-text"
        >
          Are you interested in collaborating with us on a project or
          partnership? We're open to exploring collaborations with like-minded
          organizations, educational institutions, and industry professionals
          who share our vision. Let's create something amazing together!
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ ml: { lg: "100px", xs: "30px" }, mb: "-3px" }}>
        <img src={SVG1} width={"auto"} alt="" />
      </Grid>
    </Grid>
  );
};

export default SecFour;
