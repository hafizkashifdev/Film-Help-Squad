import { Grid, Typography } from "@mui/material";
import React from "react";

const tableData = [
  {
    directory: "Employer Directory",
  },
  {
    directory: "Film Directory",
  },
  {
    directory: "TV Show Directory",
  },
];

const SecTwo = () => {
  return (
    <Grid container sx={{ px: { md: "6rem", sm: "3rem", xs: "2rem" }, gap: 3 }}>
      <Grid item xs={10}>
        <Typography className="font-family-dm heading-40 dm-color font-weight-400">
          Agents
        </Typography>
        <Typography
          sx={{ mt: { md: 3, xs: 1 } }}
          className="font-family-dm heading-30 dm-color font-weight-400"
        >
          Database Services
        </Typography>
        <Typography className="font-family-lato heading-20 font-weight-400 text-color">
          Stay connected and learn about upcoming creative projects.
        </Typography>
      </Grid>
      {tableData.map((item) => (
        <Grid
          item
          className="flex justify-space-between align-center"
          xs={12}
          sx={{ bgcolor: "#F8F5F4", p: "24px", borderRadius: "12px" }}
        >
          <Grid xs={8}>
            <Typography
              sx={{ whiteSpace: "nowrap" }}
              className="heading-25 font-family-dm dm-color font-weight-400"
            >
              {item?.directory}
            </Typography>
          </Grid>
          <Grid xs={2.5}></Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default SecTwo;
