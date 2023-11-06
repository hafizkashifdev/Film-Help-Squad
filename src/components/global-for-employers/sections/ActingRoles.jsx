import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { PrimaryBtn } from "../../primary-button/PrimaryBtn";

const ActingRoles = ({ btnData, btnHeading, btnSubHead }) => {
  const lineStyle = {
    width: "191px",
    height: "3px",
    backgroundColor: "#DECDC6",
  };
  return (
    <Grid container className="flex-column align-center" gap={2}>
      <Grid
        item
        className="flex flex-column align-center center-text"
        sx={{ px: { md: "0", xs: "2rem" }, gap: 2 }}
      >
        <Typography className="font-family-dm dm-color font-weight-400 heading-40">
          {btnHeading}
        </Typography>
        <div style={lineStyle}></div>
        <Typography className="font-family-lato text-color font-weight-400 heading-20">
          {btnSubHead}
        </Typography>
      </Grid>
      <Grid item width={"90%"}>
        <Grid
          container
          className="margin-top-1"
          sx={{ display: "flex" }}
          spacing={6}
        >
          {btnData.map((i) => (
            <Grid item xs={12} lg={3} sm={6} md={4}>
              <Button
                className="primary-color bg-white-color sub-heading font-family-plus font-weight-500 width-100"
                sx={{
                  p: "12px 18px",
                  border: "1px solid #44496D",
                  whiteSpace: "nowrap",
                  ":hover": {
                    border: "none",
                    bgcolor: "rgba(68, 73, 109, 0.1) !important",
                  },
                }}
              >
                {i}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <PrimaryBtn btnText="Join Now For Free" btnClass="margin-top-1" />
    </Grid>
  );
};

export default ActingRoles;
