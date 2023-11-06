import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Image1 from "../../../assets/Images/home/section3/image1.png";
import Image2 from "../../../assets/Images/home/section3/image2.png";
import { PrimaryBtn } from "../../../components/primary-button/PrimaryBtn";

const sectionData = [
  {
    number: "100,000",
    heading: "Employers and Professionals are a part of Film Help Squad",
    description:
      "At Film Help Squad, we bring together employers seeking top talent and seasoned professionals eager to make their mark in the dynamic world of filmmaking. Join our community today and be a part of the industry's next big success story.",
    image: Image1,
  },
  {
    heading: "Opportunity Awaits!",
    description:
      "Join our community of actors, films, TV and Theatre professionals, voiceover, artists, extras, dancers, singers, musicians & child actors.",
    image: Image2,
    transform: "ScaleX(-1)",
  },
];

const Section3 = () => {
  const lineStyle = {
    width: "191px",
    borderBottom: "3px solid #DECDC6",
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
              px: { md: 0, sm: "10px", xs: "6px" },
              textAlign: { lg: "start", xs: "center" },
            }}
          >
            <Typography
              className="green-color font-weight-400 heading-60 font-family-dm"
              sx={{
                mb: { md: 0, xs: "-12px" },
              }}
            >
              {item.number}
            </Typography>
            <Typography className="font-weight-400 heading-40 font-family-dm dm-color">
              {item.heading}
            </Typography>
            <Box className="justify-c-center">
              <div style={lineStyle}></div>
            </Box>
            <Typography className="text-color font-weight-400 heading-20 font-family-lato text-align-c">
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

export default Section3;
