import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import { ReactComponent as SearchIcon } from "../../../assets/SVG/Search-Icon.svg";
import { CustomTextField } from "../../../components/custom-text-field/custom-text-field";
import { GlobalSocialIcons } from "../../../components/social-icons/social-icons";

const SecOne = () => {
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
          <Typography className="font-weight-400 font-family-dm white-color center-text heading-60">
          Search Agent Directory
          </Typography>
          <Typography
            maxWidth={"1169px"}
            className="heading-20 font-weight-400 font-family-lato secondary-color center-text margin-top-1"
          >
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
            <Grid item lg={3.13} xs={10}>
              <CustomTextField
                name={""}
                EndIcon={<SearchIcon />}
                fullWidth
                placeholder="Search Keyword"
              />
            </Grid>
            <Grid item lg={3.13} xs={10}>
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
            <Grid item lg={0.4} xs={10}>
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
