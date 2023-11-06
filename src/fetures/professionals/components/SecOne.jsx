import React, { useState } from "react";
import { Grid, Typography, Box, Slider, Button } from "@mui/material";
import { ReactComponent as SearchIcon } from "../../../assets/SVG/Search-Icon.svg";
import { CustomTextField } from "../../../components/custom-text-field/custom-text-field";
import { GlobalSocialIcons } from "../../../components/social-icons/social-icons";

function valuetext(value) {
  return `${value}°C`;
}

const SecOne = () => {
  const [value, setValue] = useState([18, 47]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Grid
      container
      sx={{
        pt: { lg: "9rem", xs: "5rem" },
        pb: { lg: "13rem", xs: "6rem" },
        flexDirection: { lg: "row", xs: "column" },
        px: { md: "", xs: "1rem" },
      }}
      className="primary-bg-color justify-center align-center"
    >
      <Grid
        item
        xl={10.6}
        lg={11.5}
        xs={12}
        className="flex flex-column align-center justify-center"
        sx={{ gap: { lg: 4, xs: 2 }, maxWidth: "1169px" }}
      >
        <Box>
          <Typography className="font-weight-400 heading-60 font-family-dm white-color center-text">
            Search Film, TV & Theatre Professionals
          </Typography>
          <Typography className="heading-20 font-weight-400 font-family-lato secondary-color center-text margin-top-1">
            Use the search engine to quickly browse through the network
          </Typography>
        </Box>
        <Grid
          container
          className="flex-column align-center"
          sx={{ gap: { lg: 4, xs: 2 } }}
        >
          <Grid
            container
            className="justify-center"
            sx={{ gap: { lg: 4, xs: 2 } }}
          >
            <Grid item lg={3.16} xs={10}>
              <CustomTextField
                name={""}
                EndIcon={<SearchIcon />}
                fullWidth
                placeholder="Search Keyword"
              />
            </Grid>
            <Grid item lg={3.16} xs={10}>
              <CustomTextField
                name={""}
                EndIcon={<SearchIcon />}
                fullWidth
                placeholder="Search By Name"
              />
            </Grid>
          </Grid>
          <Grid
            container
            className="align-center justify-center center-text"
            sx={{ gap: { lg: 4, xs: 2 } }}
          >
            <Grid item lg={2.78} xs={10}>
              <CustomTextField name={""} fullWidth placeholder="Miles" />
            </Grid>
            <Grid item lg={0.45} xs={10}>
              <Typography className="white-color heading-20 font-weight-400 font-family-lato">
                From
              </Typography>
            </Grid>
            <Grid item lg={2.78} xs={10}>
              <CustomTextField
                name={""}
                EndIcon={<SearchIcon />}
                fullWidth
                placeholder="e.g. N1 1QP"
              />
            </Grid>
          </Grid>
          <Grid item sx={{ maxWidth: "443px", width: "100%" }}>
            <Typography className="white-color heading-20 font-weight-400 font-family-lato margin-top-1 center-text">
              Playing Age: {value[0]} - {value[1]}
            </Typography>
            <Slider
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              sx={{
                "& .MuiSlider-rail": {
                  color: "#fff !important",
                  height: "8px",
                },
                "& .MuiSlider-track": {
                  color: "#fff !important",
                },
                "& .MuiSlider-thumbColorPrimary": {
                  color: "#fff !important",
                },
                "& .MuiSlider-valueLabel": {
                  display: "none",
                },
              }}
            />
          </Grid>
          <Grid item className="flex margin-top-1 justify-center flex-wrap" gap={{ sm: 2, xs: 1 }}>
            <Button
              sx={{
                p: "12px 18px",
                border: "1px solid #fff",
                width: { sm: '145px', xs: '120px' },
              }}
              className="bg-none white-color sub-heading font-family-plus border-radius-5"
            >
              Search
            </Button>
            <Button
              sx={{ p: "12px 18px", width: { sm: '145px', xs: 'fit-content' }, }}
              className="bg-white-color primary-color sub-heading font-family-plus border-radius-5"
            >
              Clear Filters
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={0.2} xs={12}>
        <GlobalSocialIcons />
      </Grid>
    </Grid>
  );
};

export default SecOne;
