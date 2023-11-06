import {
  Box,
  Card,
  Grid,
  Typography,
  Button,
  Pagination,
  Stack,
} from "@mui/material";
import { ReactComponent as Circle } from "../../../assets/SVG/Circle-Icon.svg";
import React from "react";

const secData = [
  {
    cardOne: {
      heading: "Interactive Shows And Workshops",
      types1: "Live Performing Arts",
      types2: "GBP 830 - 1000 weekly",
      types3: "Posted 1st jan 2023",
      description:
        "We are probably the most highly respected English theatre company in London; our reputation is second to none. Our actors are amongst the most highly paid actors in educational theatre. We are not a run of the mill TIE company, we do not go in to schools and just act while the pupils watch. We do not call ´interactive` having a Q&A session at the end or getting a few of the pupils to participate. In our workshops and shows, every single pupil p...",
      location: "Dates & Locations:",
      locationDetail:
        "Ongoing performance tours between October-May (4 to 6 week tours) in the Netherlands.",
    },
    cardTwo: {
      heading: "Dates & Locations:",
      description: "23 to 60, paid",
    },
  },
  {
    cardOne: {
      heading: "Interactive Shows And Workshops",
      types1: "Live Performing Arts",
      types2: "GBP 830 - 1000 weekly",
      types3: "Posted 1st jan 2023",
      description:
        "We are probably the most highly respected English theatre company in London; our reputation is second to none. Our actors are amongst the most highly paid actors in educational theatre. We are not a run of the mill TIE company, we do not go in to schools and just act while the pupils watch. We do not call ´interactive` having a Q&A session at the end or getting a few of the pupils to participate. In our workshops and shows, every single pupil p...",
      location: "Dates & Locations:",
      locationDetail:
        "Ongoing performance tours between October-May (4 to 6 week tours) in the Netherlands.",
    },
    cardTwo: {
      heading: "Women",
      description: "Female, 18+, paid",
    },
  },
];

const SecTwo = () => {
  const lineStyle = {
    width: "191px",
    height: "3px",
    backgroundColor: "#DECDC6",
  };

  return (
    <div className="flex flex-column align-center">
      <Grid
        container
        sx={{
          px: { lg: "2rem", sm: "2rem", xs: "1rem" },
          justifyContent: "center",
        }}
        gap={6}
      >
        {secData.map((item) => (
          <>
            <Card
              className="flex flex-column width-100 border-radius-20"
              sx={{
                p: { sm: "50px", xs: "20px" },
                gap: "12px",
                maxWidth: "1000px",
                boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.15)",
              }}
            >
              <Typography className="font-family-dm heading-40 dm-color font-weight-400">
                {item?.cardOne?.heading}
              </Typography>
              <div style={lineStyle}></div>
              <Box className="flex align-center" gap={"1rem"}>
                <Typography className="font-family-lato heading-20 font-weight-400">
                  {item?.cardOne?.types1}
                </Typography>
                <div>
                  <Circle />
                </div>
                <Typography className="font-family-lato heading-20 font-weight-400">
                  {item?.cardOne?.types2}
                </Typography>
                <div>
                  <Circle />
                </div>
                <Typography className="font-family-lato heading-20 font-weight-400">
                  {item?.cardOne?.types3}
                </Typography>
              </Box>
              <Typography className="heading-20 font-family-lato text-color font-weight-400">
                {item?.cardOne?.description}
              </Typography>
              <Typography className="heading-20 font-family-dm dm-color font-weight-400">
                {item?.cardOne?.location}
              </Typography>
              <Typography className="heading-20 font-family-lato text-color font-weight-400">
                {item?.cardOne?.locationDetail}
              </Typography>
            </Card>

            <Card
              className="flex flex-column justify-space-between width-100 border-radius-20"
              sx={{
                boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.15)",
                p: { sm: "50px", xs: "20px" },
                maxWidth: "460px",
              }}
            >
              <Box>
                <Typography className="heading-30 font-family-dm dm-color font-weight-400">
                  {item?.cardTwo?.heading}
                </Typography>
                <Typography className="heading-20 font-family-lato text-color font-weight-400">
                  {item?.cardTwo?.description}
                </Typography>
              </Box>
              <Box
                className="flex flex-column"
                sx={{ pt: { sm: "50px", xs: "30px" }, gap: 2 }}
              >
                <Button
                  className="primary-bg-color width-100 white-color sub-heading font-weight-400 font-family-plus"
                  sx={{ p: "12px" }}
                >
                  Apply
                </Button>
                <Button
                  className="bg-none width-100 sub-heading font-weight-400 font-family-plus"
                  sx={{
                    p: "12px",
                    border: "1px solid #44496D",
                    color: "#44496D",
                  }}
                >
                  View All 1 Roles
                </Button>
              </Box>
            </Card>
          </>
        ))}
      </Grid>
      <Stack spacing={2} className="margin-top-2">
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          sx={{
            "& .MuiPaginationItem-root": {
              backgroundColor: "transparent",
              color: "#151C48",
              height: { sm: "50px", xs: "30px" },
              width: { sm: "50px", xs: "30px" },
              borderRadius: "7px",
              border: "2px solid #E8E8ED",
              fontSize: { sm: "18px", xs: "16px" },
              fontFamily: "lato",
              fontWeight: 600,
            },
            "& .Mui-selected": {
              borderColor: "#151C48",
              backgroundColor: "transparent",
            },
          }}
        />
      </Stack>
    </div>
  );
};

export default SecTwo;
