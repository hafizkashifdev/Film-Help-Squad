import React from "react";
import { Grid, Typography } from "@mui/material";
import SVG1 from "../../../assets/Images/home/section4/svg1.svg";
import SVG2 from "../../../assets/Images/home/section4/svg2.svg";

const Section4 = () => {
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
        sx={{ gap: "1rem", px: { md: 0, sm: "10px", xs: "6px" } }}
      >
        <Typography className="font-weight-400 font-family-dm secondary-color center-text heading-40">
          Create a Profile & Connect with a Squad
        </Typography>
        <div style={lineStyle}></div>
        <Typography
          sx={{
            maxWidth: "1249px",
            px: { md: "0", xs: "2rem" },
          }}
          className="secondary-color font-weight-400 font-family-lato center-text heading-20"
        >
          The Squad Network provides industry-leading tools which empower
          creative professionals to connect and find jobs across all sectors of
          Film, TV, Theatre and Commercial Production.
        </Typography>
      </Grid>
      <Grid item xs={12} sx={{ ml: { lg: "100px", xs: "30px" }, mb: "-3px" }}>
        <img src={SVG1} width={"auto"} alt="" />
      </Grid>
    </Grid>
  );
};

export default Section4;
