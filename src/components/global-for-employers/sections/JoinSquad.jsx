import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Img from "../../../assets/Images/for-employers/join-squad.png";
import { PrimaryBtn } from "../../primary-button/PrimaryBtn";

const sectionData = [
  {
    heading: "Why to Join the Squad?",
    description:
      "Showcase your portfolio, stay informed with real-time notifications, and let your creativity shine. Trust in our commitment to safety and embark on an exhilarating journey in the arts and entertainment industry. Seize your chance today and make your artistic dreams a reality with Film help Squad!",
    image: Img,
  },
];

const JoinSquad = () => {
  const lineStyle = {
    width: "191px",
    height: "3px",
    backgroundColor: "#DECDC6",
  };
  return (
    <>
      {sectionData.map((item, index) => (
        <Grid
          container
          key={index}
          sx={{ transform: item.transform, justifyContent: "space-around" }}
        >
          <Grid
            item
            lg={5}
            xs={12}
            className="width-100 flex flex-column justify-center"
            sx={{
              maxWidth: 782,
              gap: "1rem",
              transform: item.transform,
              px: { lg: 0, xs: "2rem" },
              textAlign: { lg: "start", xs: "center" },
            }}
          >
            <Typography className="font-weight-400 font-family-dm dm-color heading-40">
              {item.heading}
            </Typography>
            <Box className="justify-c-center">
              <div style={lineStyle}></div>
            </Box>
            <Typography className="text-color font-weight-400 font-family-lato text-align-c heading-20">
              {item.description}
            </Typography>
            <PrimaryBtn btnText="Join Now for Free" />
          </Grid>
          <Grid
            item
            lg={5}
            xs={12}
            p={{ lg: "0", xs: "20px" }}
            sx={{ transform: item.transform }}
          >
            <img src={item.image} width={"100%"} alt="" />
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default JoinSquad;
